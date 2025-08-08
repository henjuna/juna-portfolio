import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useMainPageStore } from '../store/MainPage.store';
import { db } from '../firebase';
import type { EducationTypes, WorkExperienceTypes } from '../types/About.types';
import type { HomeDataTypes } from '../types/Home.types';
import type { SkillsType } from '../types/SkillsTab.types';

export const loadMainData = async () => {
  const store = useMainPageStore.getState();

  store.setHomeLoading(true);
  store.setSkillLoading(true);
  store.setEducationLoading(true);
  store.setWorkLoading(true);

  try {
    const [introSnap, skillsSnap, educationSnap, workSnap] = await Promise.all([
      getDocs(query(collection(db, 'intro'))),
      getDocs(query(collection(db, 'skills'))),
      getDocs(query(collection(db, 'education'), orderBy('yearFrom', 'desc'))),
      getDocs(
        query(collection(db, 'workExperience'), orderBy('yearFrom', 'desc')),
      ),
    ]);
    store.setHomeData(introSnap.docs.map((doc) => doc.data() as HomeDataTypes));
    store.setSkillData(skillsSnap.docs.map((doc) => doc.data() as SkillsType));
    store.setEducationData(
      educationSnap.docs.map((doc) => doc.data() as EducationTypes),
    );
    store.setWorkData(
      workSnap.docs.map((doc) => doc.data() as WorkExperienceTypes),
    );
  } catch (error) {
    console.error('Error loading main page data:', error);
  } finally {
    store.setHomeLoading(false);
    store.setSkillLoading(false);
    store.setEducationLoading(false);
    store.setWorkLoading(false);
  }
};
