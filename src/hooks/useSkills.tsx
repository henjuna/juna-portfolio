import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import type { SkillsType } from '../types/SkillsTab.types';

export const useSkills = () => {
  const [skillData, setSkillData] = useState<SkillsType[]>([]);
  const [skillLoading, setSkillLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'skills'));
        const querySnapshot = await getDocs(q);
        const result: SkillsType[] = querySnapshot.docs.map(
          (doc) => doc.data() as SkillsType,
        );
        setSkillData(result);
      } catch (error) {
        console.error('Failed to fetch work experience:', error);
      } finally {
        setSkillLoading(false);
      }
    };

    fetchData();
  }, []);

  return { skillData, skillLoading };
};
