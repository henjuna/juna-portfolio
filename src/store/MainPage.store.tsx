import { create } from 'zustand';
import type { MainPageStoreTypes } from '../types/MainPage.types';

export const useMainPageStore = create<MainPageStoreTypes>((set) => ({
  hasUpdated: true,
  setHasUpdated: (updated) => set({ hasUpdated: updated }),

  // Intro Data
  homeData: [],
  setHomeData: (data) => set({ homeData: data }),
  homeLoading: true,
  setHomeLoading: (loading) => set({ homeLoading: loading }),

  // About Data
  skillData: [],
  skillLoading: true,
  educationData: [],
  educLoading: true,
  workData: [],
  workLoading: true,

  setSkillData: (data) => set({ skillData: data }),
  setSkillLoading: (loading) => set({ skillLoading: loading }),
  setEducationData: (data) => set({ educationData: data }),
  setEducationLoading: (loading) => set({ educLoading: loading }),
  setWorkData: (data) => set({ workData: data }),
  setWorkLoading: (loading) => set({ workLoading: loading }),
}));
