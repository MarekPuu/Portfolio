import './LandinpageSection.css';
import image from '../../assets/oma_kuva.svg';

const LandingpageSection = ({ osaaminenRef }: any) => {
  const scrollToOsaamisetRef = () => {
    if (!osaaminenRef) return console.log('ref not found');
    const element =
      osaaminenRef.current.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: element,
      behavior: 'smooth',
    });
  };

  return (
    <div className="landingpage_section">
      <div className="landingpage_section_container">
        <div className="landingpage_section_left_container">
          <div className="landingpage_section_left_container_text">
            <p>Insinööriopiskelija</p>
            <h1>Terve, minä olen Marek</h1>
            <p>
              Olen kolmannen vuoden insinööriopiskelija ja olen kiinnostunut C#
              ja javascript ohjelmoinnista. Osaan mm. Reactia, asp.net ja nodea
            </p>
          </div>
          <div className="landingpage_section_left_container_buttons">
            <div className="landingpage_section_left_container_button">
              <button onClick={scrollToOsaamisetRef}>Osaaminen</button>
            </div>
            <div className="landingpage_section_left_container_button">
              <a target="_blank" href={`${import.meta.env.VITE_APP_URL}`}>
                <button>Siirry sovellukseen</button>
              </a>
            </div>
          </div>
        </div>
        <div className="landingpage_section_image_container">
          <div className="landingpage_section_image">
            <img src={image} alt="Marek" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingpageSection;
