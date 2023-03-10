import './MySkillsContainer.css';
import SingleSkill from './SingleSkill';
import gridLayout from '../../utils/GridLayout';

const MySkillsContainer = ({ osaaminenRef }: any) => {
  return (
    <div ref={osaaminenRef} className="my_skills_container">
      <div className="my_skills_container_text">
        <h1>Oma osaaminen</h1>
      </div>
      <div className="my_skills_container_grid">
        {gridLayout.map((element, index) => {
          if (element.isEmpty) return <div key={index}></div>;

          return (
            <div key={index} className={element.className}>
              <a target="_blank" href={`${import.meta.env.VITE_APP_URL}`}>
                <SingleSkill imageName={element.imageName} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkillsContainer;
