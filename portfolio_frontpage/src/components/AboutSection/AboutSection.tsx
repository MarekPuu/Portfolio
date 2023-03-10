import React from 'react';
import SkillsProgressBarContainer from '../SkillsProgressBar/SkillsProgressBarContainer';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about_section_container">
      <div className="about_section_container_content">
        <div className="about_section">
          <div className="about_section_title">
            <h1>Motivoitunut oppimaan, sekä luomaan uutta</h1>
          </div>
          <div className="about_section_text">
            <p>
              Minua kiehtoo oppia uusia asioita ja samalla kehittää omaa
              osaamista ja haastaa itseäni. Tämän takia olen opiskellut
              vapaa-ajalla paljon web-ohjelmointia ja tämä kiinnostaa tällä
              hetkellä eniten. Omaan hyvät ryhmätyötaidot ja tykkään oppia
              ihmisiltä, jotka ovat kokeneempia.
            </p>
          </div>
        </div>
        <div className="skills_section_container">
          <SkillsProgressBarContainer />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
