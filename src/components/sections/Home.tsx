import juna from '../../assets/Juna.png';
import type { HomeDataTypes, HomeStoreTypes } from '../../types/Home.types';
import { query, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from '../../firebase';
import { useHomeStore } from '../../store/Home.store';

/**
 * Load Introduction data from Firestore and update the store.
 * @param store  HomeStoreTypes
 */
const loadData = async (store: HomeStoreTypes) => {
  try {
    const q = query(collection(db, 'intro'));
    const querySnapshot = await getDocs(q);
    const result: HomeDataTypes[] = querySnapshot.docs.map(
      (doc) => doc.data() as HomeDataTypes,
    );
    store.setHomeData(result);
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  } finally {
    store.setHomeLoading(false);
  }
};

export const Home: React.FC = () => {
  const store = useHomeStore();

  useEffect(() => {
    loadData(store);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      {store.homeLoading ? (
        <span className="text-gray-400">Loading profile...</span>
      ) : (
        <>
          <div className="text-center z-10 px-4">
            <img
              src={juna}
              alt="Profile"
              className="border border-blue-500/50 mx-auto w-60 h-60 rounded-full mb-6 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm {store.homeData[0].name}
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              {store.homeData[0].description}
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://docs.google.com/document/d/1-pz_YzoSsHztJAx3VBhtR955AykBnQxF/edit?usp=sharing&ouid=111632847173830128702&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/jbpayawal"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
