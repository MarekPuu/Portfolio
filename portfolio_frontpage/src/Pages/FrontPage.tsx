import { useRef } from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';
import LandingpageSection from '../components/LandingpageSection/LandingpageSection';
import MySkillsContainer from '../components/MySkills/MySkillsContainer';

const FrontPage = () => {
  const osaaminenRef = useRef(null);
  return (
    <div className="FrontpageContainer">
      <LandingpageSection osaaminenRef={osaaminenRef} />
      <AboutSection />
      <MySkillsContainer osaaminenRef={osaaminenRef} />
    </div>
  );
};

export default FrontPage;
