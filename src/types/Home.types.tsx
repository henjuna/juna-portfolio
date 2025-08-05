export type HomeDataTypes = {
  name: string;
  description: string;
};

export type HomePropTypes = {
  data: HomeDataTypes;
  loading: boolean;
};

export interface HomeStoreTypes {
  homeData: HomeDataTypes[];
  setHomeData: (data: HomeDataTypes[]) => void;
  homeLoading: boolean;
  setHomeLoading: (loading: boolean) => void;
}
