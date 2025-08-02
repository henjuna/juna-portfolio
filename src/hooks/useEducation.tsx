import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import type { EducationTypes } from '../types/About.types';

export const useEducation = () => {
  const [educData, setData] = useState<EducationTypes[]>([]);
  const [educLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'education'),
          orderBy('yearFrom', 'desc'),
        );
        const querySnapshot = await getDocs(q);
        const result: EducationTypes[] = querySnapshot.docs.map(
          (doc) => doc.data() as EducationTypes,
        );
        setData(result);
      } catch (error) {
        console.error('Failed to fetch education:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { educData, educLoading };
};
