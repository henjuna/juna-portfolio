import { create } from 'zustand';
import type { HomeStoreTypes } from '../types/Home.types';

export const useHomeStore = create<HomeStoreTypes>((set) => ({
  homeData: [],
  homeLoading: true,
  setHomeData: (data) => set({ homeData: data }),
  setHomeLoading: (loading) => set({ homeLoading: loading }),
}));
