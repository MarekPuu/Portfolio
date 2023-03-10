import './Layout.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const DefaultLayout = () => {
  return (
    <div className="default_layout_container">
      <div className="default_layout_outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
