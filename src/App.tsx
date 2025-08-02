import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/NavBar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { useEducation } from './hooks/useEducation';
import { useWorkExperience } from './hooks/useWorkExperience';
import { useSkills } from './hooks/useSkills';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { workData, workLoading } = useWorkExperience();
  const { educData, educLoading } = useEducation();
  const { skillData, skillLoading } = useSkills();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {''}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About
          workData={workData}
          workLoading={workLoading}
          educData={educData}
          educLoading={educLoading}
          skillData={skillData}
          skillLoading={skillLoading}
        />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
