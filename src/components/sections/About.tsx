import { SkillsTabs } from '../SkillsTab';
import { RevealOnScroll } from './RevealOnScroll';

export const About = () => {
  const educationData = [
    {
      title: 'B.S. in Computer Science',
      school: 'New Era University',
      year: '2019 - 2023',
      details: [
        'Magna Cum Laude',
        'Thesis: “Developing a Multi-Class Soil Image Classification Using Convolutional Neural Network”',
      ],
    },
    {
      title: 'Information and Communications Technology Strand',
      school: 'New Era University',
      year: '2017 - 2019',
      details: [
        'Golden Harvest Awardee',
        'Developed an interactive game using Adobe Flash',
      ],
    },
  ];

  const workExperienceData = [
    {
      date: '2025 - Present',
      title: 'Asst. R&D Engineer',
      company: 'Advanced World Solutions, Inc.',
      details: [
        'Led the migration of a Property Management System from desktop to a responsive web-based platform.',
        'Optimized system performance and supported deployment strategies.',
      ],
    },
    {
      date: '2023 - 2025',
      title: 'Jr. R&D Engineer',
      company: 'Advanced World Solutions, Inc.',
      details: [
        'Helped develop modules for the Property Management System.',
        'Created a Deals Web App using modern frameworks.',
        'Completed training in communication and Japanese language.',
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            Tools and frameworks I have experience working with.
          </p>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <SkillsTabs />
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-6 text-center">🎓 Education</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 items-stretch">
              {educationData.map((edu, index) => (
                <div className="flex" key={index}>
                  <div className="bg-white/5 p-4 rounded-lg w-full">
                    <div>
                      <strong>{edu.title}</strong>
                    </div>
                    <div>
                      {edu.school} ({edu.year})
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      {edu.details.map((item, i) => (
                        <li key={i}>
                          <em>{item}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-6 text-center">
                💼 Work Experience
              </h3>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2" />

                <div className="space-y-12">
                  {workExperienceData.map((exp, index) => {
                    const isRight = index % 2 === 0;
                    return (
                      <div
                        key={index}
                        className={`flex items-start relative ${isRight ? 'justify-start' : 'justify-end'}`}
                      >
                        {/* Left/Right spacing */}
                        {isRight ? (
                          <>
                            <div className="w-1/2 pr-8 text-right">
                              <h4 className="font-semibold text-white">
                                {exp.title}
                              </h4>
                              <p className="text-sm text-white font-medium">
                                {exp.date}
                                <span className="text-blue-500">
                                  {' '}
                                  ({exp.company})
                                </span>
                              </p>

                              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                {exp.details.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            {/* Dot */}
                            <div className="w-0">
                              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2" />
                            </div>
                            <div className="w-1/2" />
                          </>
                        ) : (
                          <>
                            <div className="w-1/2" />
                            <div className="w-0">
                              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2" />
                            </div>
                            <div className="w-1/2 pl-8 text-left">
                              <h4 className="font-semibold text-white">
                                {exp.title}
                              </h4>
                              <p className="text-sm text-white font-medium">
                                {exp.date}
                                <span className="text-blue-500">
                                  {' '}
                                  ({exp.company})
                                </span>
                              </p>

                              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                                {exp.details.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
