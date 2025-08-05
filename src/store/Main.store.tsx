import { create } from 'zustand';
import type { MainStoreType } from '../types/Main.types';

export const useMainStore = create<MainStoreType>()(() => ({
  workData: [],
  workLoading: true,
  educData: [],
  educLoading: true,
  skillData: [],
  skillLoading: true,
}));
