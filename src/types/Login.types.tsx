export type LoginFormTypes = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
};

export interface LoginStoreTypes {
  formValues: LoginFormTypes;
  error: boolean;
  setError: (error: boolean) => void;
}
