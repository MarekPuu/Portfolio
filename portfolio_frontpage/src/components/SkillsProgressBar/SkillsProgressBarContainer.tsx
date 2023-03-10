import React, { useRef } from 'react';
import './SkillProgressBarContainer.css';
import useOnScreen from '../../Hooks/useOnScreen';
import SkillsProgressBar from './SkillsProgressBar';
import SkillsProgressBars from '../../utils/SkillsProgressBars';

const SkillsProgressBarContainer = () => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  return (
    <div className="skills_progressbar_container_container">
      <div ref={elementRef} className="skills_progressbar_container_elements">
        {/* <div className="elementRef" ref={elementRef}></div> */}
        {SkillsProgressBars.map((skill, index) => {
          return (
            <div key={index} className="skills_progressbar_container_element">
              <SkillsProgressBar
                isOnScreen={isOnScreen}
                percentage={skill.percentage}
                color={skill.color}
                text={skill.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsProgressBarContainer;
