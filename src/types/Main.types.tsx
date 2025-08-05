import type { WorkExperienceTypes, EducationTypes } from './About.types';
import type { SkillsType } from './SkillsTab.types';

export interface MainStoreType {
  workData: WorkExperienceTypes[];
  workLoading: boolean;
  educData: EducationTypes[];
  educLoading: boolean;
  skillData: SkillsType[];
  skillLoading: boolean;
}
