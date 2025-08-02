import { useState } from 'react';
import type {
  SkillPropTypes,
  SkillsType,
  TabKeyType,
  TabType,
} from '../types/SkillsTab.types';

export const SkillsTabs: React.FC<SkillPropTypes> = ({ skillData }) => {
  const [activeTab, setActiveTab] = useState<TabKeyType>('programming');

  const tabs: TabType[] = [
    { label: 'Programming', key: 'programming' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend', key: 'backend' },
    { label: 'Tools', key: 'tools' },
  ];
  const skills: SkillsType = skillData[0];

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-6">
        <div className="border border-blue-500 rounded-xl p-1 inline-flex flex-wrap items-center justify-center gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-[120px] py-2 text-sm md:text-base text-center rounded-lg font-semibold transition-all duration-200
                ${
                  activeTab === tab.key
                    ? 'bg-blue-500 text-white shadow'
                    : 'text-blue-500 hover:bg-blue-500/10'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="bg-gray-500/10 rounded-xl p-6 transition-all">
        <div className="flex flex-wrap gap-2">
          {skills[activeTab].map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-5 h-5 object-contain"
              />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
