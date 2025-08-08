import type { EducationTypes, WorkExperienceTypes } from '../types/About.types';
import type { HomeDataTypes } from '../types/Home.types';
import type { SkillsType } from '../types/SkillsTab.types';

export interface MainPageStoreTypes {
  hasUpdated: boolean;
  setHasUpdated: (updated: boolean) => void;

  // Intro Data
  homeData: HomeDataTypes[];
  setHomeData: (data: HomeDataTypes[]) => void;
  homeLoading: boolean;
  setHomeLoading: (loading: boolean) => void;

  // About Data
  skillData: SkillsType[];
  skillLoading: boolean;
  educationData: EducationTypes[];
  educLoading: boolean;
  workData: WorkExperienceTypes[];
  workLoading: boolean;
  setSkillData: (data: SkillsType[]) => void;
  setSkillLoading: (loading: boolean) => void;
  setEducationData: (data: EducationTypes[]) => void;
  setEducationLoading: (loading: boolean) => void;
  setWorkData: (data: WorkExperienceTypes[]) => void;
  setWorkLoading: (loading: boolean) => void;
}
