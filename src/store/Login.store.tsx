import { create } from 'zustand';
import type { LoginStoreTypes } from '../types/Login.types';

export const useLoginStore = create<LoginStoreTypes>((set) => ({
  formValues: {
    email: '',
    password: '',
    setEmail: (email) =>
      set((state) => ({ formValues: { ...state.formValues, email } })),
    setPassword: (password) =>
      set((state) => ({ formValues: { ...state.formValues, password } })),
  },
  error: false,
  setError: (error) => set({ error }),
}));
