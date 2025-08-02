import { useState } from 'react';

type TabKey = 'programming' | 'frontend' | 'backend' | 'tools';

const skills: Record<TabKey, string[]> = {
  programming: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  frontend: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Material UI'],
  backend: ['Node.js', 'MongoDB', 'Firebase'],
  tools: ['Git', 'VS Code', 'Postman'],
};

const tabs: { label: string; key: TabKey }[] = [
  { label: 'Programming', key: 'programming' },
  { label: 'Frontend', key: 'frontend' },
  { label: 'Backend', key: 'backend' },
  { label: 'Tools', key: 'tools' },
];

const skillIcons: Record<string, string> = {
  Java: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  JavaScript:
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  TypeScript: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
  Python: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  HTML: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  CSS: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  React: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  'Tailwind CSS': 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
  'Material UI': 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  'Node.js': 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  MongoDB: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
  Firebase:
    'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
  Git: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png',
  'VS Code': 'https://cdn-icons-png.flaticon.com/512/906/906324.png',
  Postman: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
};

export const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('programming');

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-6">
        <div className="border border-blue-500 rounded-xl p-1 inline-flex flex-wrap items-center justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-200
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
              key={skill}
              className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-base hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
            >
              <img
                src={skillIcons[skill]}
                alt={skill}
                className="w-5 h-5 object-contain"
              />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
