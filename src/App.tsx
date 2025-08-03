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
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { useHome } from './hooks/useHome';

function MainPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { workData, workLoading } = useWorkExperience();
  const { educData, educLoading } = useEducation();
  const { skillData, skillLoading } = useSkills();
  const { homeData, homeLoading } = useHome();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Home data={homeData[0]} loading={homeLoading} />
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Router basename="/juna-portfolio">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
