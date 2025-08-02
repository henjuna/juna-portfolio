import { SkillsTabs } from '../SkillsTab';
import { RevealOnScroll } from './RevealOnScroll';

export const About = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <span>
                    <strong>B.S. in Computer Science</strong>
                  </span>
                  <span className="block">
                    New Era University (2019 - 2023)
                  </span>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <em>Magna Cum Laude</em>
                    </li>
                    <li>
                      <em>
                        Thesis: “Developing a Multi-Class Soil Image
                        Classification Using Convolutional Neural Network”
                      </em>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>
                    <strong>
                      Information and Communications Technology (ICT) Strand
                    </strong>
                  </span>
                  <span className="block">
                    New Era University (2017 - 2019)
                  </span>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <em>Golden Harvest Awardee</em>
                    </li>
                    <li>
                      <em>Developed an interactive game using Adobe Flash</em>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Asst. R&D Engineer (2025 - Present)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Led the migration of a Property Management System from
                      desktop to a responsive web-based platform, enhancing user
                      accessibility.
                    </li>
                    <li>
                      Optimized system performance and contributed to production
                      deployment strategies.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Jr. R&D Engineer (2023 - 2025)
                  </h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Assisted in designing and developing modules for the
                      Property Management System.
                    </li>
                    <li>
                      Developed a Deals Web Application using modern web
                      frameworks.
                    </li>
                    <li>
                      Completed training in technical & business communication
                      and Japanese language to support international
                      collaboration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
