import { Link } from 'react-router';
import homeIcon from './images/home-icon.png';
import addIcon from './images/add-icon.png';
import recordsIcon from './images/records-icon.png';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__links">
        <Link className="navBar__link" to="/" aria-label="Domů">
          <img className="navBar__icon" src={homeIcon} alt="Domů" aria-hidden />
        </Link>
        <Link className="navBar__link" to="/add" aria-label="Přidat záznam">
          <img className="navBar__icon" src={addIcon} alt="Přidat záznam" aria-hidden />
        </Link>
        <Link className="navBar__link" to="/records" aria-label="Zobrazit záznamy">
          <img className="navBar__icon" src={recordsIcon} alt="Zobrazit záznamy" aria-hidden />
        </Link>
      </div>
    </nav>
  );
};
