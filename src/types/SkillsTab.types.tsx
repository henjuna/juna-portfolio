export type SkillPropTypes = {
  skillData: SkillsType[];
};

export type TabKeyType = 'programming' | 'frontend' | 'backend' | 'tools';

export type TabType = {
  label: string;
  key: TabKeyType;
};

export type SkillType = {
  name: string;
  icon: string;
};

export type SkillsType = Record<TabKeyType, SkillType[]>;
