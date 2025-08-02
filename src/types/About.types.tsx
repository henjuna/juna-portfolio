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
