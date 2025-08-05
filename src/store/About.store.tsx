import { create } from 'zustand';
import type { AboutStoreTypes } from '../types/About.types';

export const useAboutStore = create<AboutStoreTypes>((set) => ({
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
