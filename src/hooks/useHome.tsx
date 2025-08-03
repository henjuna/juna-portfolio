import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import type { HomeDataTypes } from '../types/Home.types';

export const useHome = () => {
  const [homeData, setData] = useState<HomeDataTypes[]>([]);
  const [homeLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'intro'));
        const querySnapshot = await getDocs(q);
        const result: HomeDataTypes[] = querySnapshot.docs.map(
          (doc) => doc.data() as HomeDataTypes,
        );
        setData(result);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { homeData, homeLoading };
};
