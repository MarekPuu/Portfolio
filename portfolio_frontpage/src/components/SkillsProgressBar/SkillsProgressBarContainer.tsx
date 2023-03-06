import React, { useRef } from 'react';
import './SkillProgressBarContainer.css';
import useOnScreen from '../../Hooks/useOnScreen';
import SkillsProgressBar from './SkillsProgressBar';

const SkillsProgressBarContainer = () => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  return (
    <div className='skills_progressbar_container_container'>
      <div className='skills_progressbar_container_elements'>
        <SkillsProgressBar
          text='Ryhmätyötaidot'
          percentage={95}
          color='red'
          isOnScreen={isOnScreen}
        />
      </div>
      <div className='elementRef' ref={elementRef}></div>
      <div className='skills_progressbar_container_elements'>
        <SkillsProgressBar
          text='Uuden oppiminen ja tiedonhaku'
          percentage={90}
          color='blue'
          isOnScreen={isOnScreen}
        />
      </div>
      <div className='skills_progressbar_container_elements'>
        <SkillsProgressBar
          text='Kiinnostus alaan ja motivaatio'
          percentage={100}
          color='green'
          isOnScreen={isOnScreen}
        />
      </div>
    </div>
  );
};

export default SkillsProgressBarContainer;
