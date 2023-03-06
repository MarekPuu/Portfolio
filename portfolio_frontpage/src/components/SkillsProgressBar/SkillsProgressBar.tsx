import React, { useEffect, useId, useRef } from 'react';
import './SkillProgressBar.css';

interface IProps {
  text: string;
  percentage: number;
  color: string;
  isOnScreen: boolean;
}

const SkillsProgressBar = ({ text, percentage, color, isOnScreen }: IProps) => {
  const id = useId();
  const show = useRef(false);

  useEffect(() => {
    if (!isOnScreen) return;
    const element = document.getElementById(id);
    element?.classList.add('progressbar_animation');
    show.current = true;
  }, [isOnScreen]);

  return (
    <div className='skills_progressbar_container'>
      <div className='progressbar_title_container'>
        <p>{text}</p>
        <p>{percentage}%</p>
      </div>
      <div className='progressbar_container'>
        <div
          id={id}
          style={{
            background: isOnScreen || show.current ? `${color}` : '#d9d9d9',
            width: `${percentage}%`,
          }}
          className='progressbar'
        ></div>
      </div>
    </div>
  );
};

export default SkillsProgressBar;
