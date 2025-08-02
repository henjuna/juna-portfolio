export type TabKeyType = 'programming' | 'frontend' | 'backend' | 'tools';

export type SkillsType = Record<TabKeyType, string[]>;

export type TabType = {
  label: string;
  key: TabKeyType;
};

export type SkillIconsType = Record<string, string>;
