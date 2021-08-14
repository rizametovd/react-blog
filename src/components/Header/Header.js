import styles from './styles.module.css';
import Logo from '../../images/2.svg';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, MAIN_PAGE } from '../../utils/constants';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={`${MAIN_PAGE}`}>
        <img src={Logo} alt='Логотип' className={styles.logo} />
      </Link>

      <Link className={styles.link} to={`/${ABOUT_PAGE}`}>
        О проекте
      </Link>
    </header>
  );
}

export default Header;
