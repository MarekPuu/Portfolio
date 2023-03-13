import './Footer.css';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const Footer = () => {
  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  const openModal = () => {
    console.log('OpenModal');
  };

  return (
    <div className='footer_container'>
      <div className='footer_container_logo_container'>
        <div className='logo'>
          <a
            target='_blank'
            href='https://github.com/MarekPuu?tab=repositories'
          >
            <img src={github} alt='github' />
          </a>
        </div>
        <div className='logo'>
          <a target='_blank' href='https://www.instagram.com/marek_puurunen/'>
            <img src={instagram} alt='instagram' />
          </a>
        </div>
        <div className='logo'>
          <a target='_blank' href='https://twitter.com/marek_puurunen'>
            <img src={twitter} alt='twitter' />
          </a>
        </div>
      </div>
      <div className='footer_container_links'>
        <ul>
          <li>
            <a href='mailto:marek.puurunen@gmail.com'>
              <button onClick={openModal}>Ota yhteyttä</button>
            </a>
          </li>
          <li>
            <a target='_blank' href={`${import.meta.env.VITE_APP_URL}`}>
              Siirry sovellukseen
            </a>
          </li>
          <li>
            <button onClick={backToTop}>Takaisin ylös</button>
          </li>
        </ul>
      </div>
      <div className='footer_container_copyright'>
        <p>© 2023 Marek Puurunen</p>
      </div>
    </div>
  );
};

export default Footer;
