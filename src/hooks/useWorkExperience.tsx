import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import type { WorkExperienceTypes } from '../types/About.types';

export const useWorkExperience = () => {
  const [workData, setData] = useState<WorkExperienceTypes[]>([]);
  const [workLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'workExperience'),
          orderBy('yearFrom', 'desc'),
        );
        const querySnapshot = await getDocs(q);
        const result: WorkExperienceTypes[] = querySnapshot.docs.map(
          (doc) => doc.data() as WorkExperienceTypes,
        );
        setData(result);
      } catch (error) {
        console.error('Failed to fetch work experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { workData, workLoading };
};
