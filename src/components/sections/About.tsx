import { useEffect } from 'react';
import { useAboutStore } from '../../store/About.store';
import { SkillsTabs } from '../SkillsTab';
import type {
  AboutStoreTypes,
  EducationTypes,
  WorkExperienceTypes,
} from '../../types/About.types';
import { query, collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import type { SkillsType } from '../../types/SkillsTab.types';

/**
 * initializes the About section data by fetching skills, education, and work experience.
 * @param {AboutStoreTypes} store
 */
const loadData = (store: AboutStoreTypes) => {
  fetchSkills(store);
  fetchEducation(store);
  fetchWorkExperience(store);
};

/**
 * Fetches skills data from the Firestore database and updates the store.
 * @param {AboutStoreTypes} store
 */
const fetchSkills = async (store: AboutStoreTypes) => {
  try {
    const q = query(collection(db, 'skills'));
    const querySnapshot = await getDocs(q);
    const result: SkillsType[] = querySnapshot.docs.map(
      (doc) => doc.data() as SkillsType,
    );
    store.setSkillData(result);
  } catch (error) {
    console.error('Failed to fetch skills:', error);
  } finally {
    store.setSkillLoading(false);
  }
};

/**
 * Fetches education data from the Firestore database and updates the store.
 * @param {AboutStoreTypes} store
 */
const fetchEducation = async (store: AboutStoreTypes) => {
  try {
    const q = query(collection(db, 'education'), orderBy('yearFrom', 'desc'));
    const querySnapshot = await getDocs(q);
    const result: EducationTypes[] = querySnapshot.docs.map(
      (doc) => doc.data() as EducationTypes,
    );
    store.setEducationData(result);
  } catch (error) {
    console.error('Failed to fetch education:', error);
  } finally {
    store.setEducationLoading(false);
  }
};

/**
 * Fetches work experience data from the Firestore database and updates the store.
 * @param {AboutStoreTypes} store
 */
const fetchWorkExperience = async (store: AboutStoreTypes) => {
  try {
    const q = query(
      collection(db, 'workExperience'),
      orderBy('yearFrom', 'desc'),
    );
    const querySnapshot = await getDocs(q);
    const result: WorkExperienceTypes[] = querySnapshot.docs.map(
      (doc) => doc.data() as WorkExperienceTypes,
    );
    store.setWorkData(result);
  } catch (error) {
    console.error('Failed to fetch work experience:', error);
  } finally {
    store.setWorkLoading(false);
  }
};

export const About: React.FC = () => {
  const store = useAboutStore();

  useEffect(() => {}, []);
  loadData(store);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        {store.workLoading || store.educLoading || store.skillLoading ? (
          <div className="flex justify-center">
            <span className="text-gray-400 text-center">Loading data...</span>
          </div>
        ) : (
          <>
            <p className="text-gray-300 mb-8 text-center">
              Tools and frameworks I have experience working with.
            </p>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <SkillsTabs skillData={store.skillData} />
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                🎓 Education
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 items-stretch">
                {store.educationData.map((edu, index) => (
                  <div className="flex" key={index}>
                    <div className="bg-white/5 p-4 rounded-lg w-full">
                      <div className="text-center">
                        <strong className="text-blue-500">{edu.title}</strong>
                      </div>
                      <div className="text-sm text-gray-400 text-center">
                        {edu.school} ({edu.yearFrom} - {edu.yearTo})
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
                    {store.workData.map((exp, index) => {
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
                                  {exp.yearFrom} - {exp.yearTo}
                                  <span className="text-blue-500">
                                    {' '}
                                    ({exp.company})
                                  </span>
                                </p>

                                <ul className="text-right list-disc list-inside text-gray-300 mt-2 space-y-1">
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
                                  {exp.yearFrom} - {exp.yearTo}
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
          </>
        )}
      </div>
    </section>
  );
};
