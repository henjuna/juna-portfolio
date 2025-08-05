import type { SkillsType } from './SkillsTab.types';

export type aboutPropTypes = {
  workData: WorkExperienceTypes[];
  workLoading: boolean;
  educData: EducationTypes[];
  educLoading: boolean;
  skillData: SkillsType[];
  skillLoading: boolean;
};

export type EducationTypes = {
  title: string;
  school: string;
  yearFrom: string;
  yearTo: string;
  details: string[];
};

export type WorkExperienceTypes = {
  yearFrom: string;
  yearTo: string;
  title: string;
  company: string;
  details: string[];
};

export interface AboutStoreTypes {
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
