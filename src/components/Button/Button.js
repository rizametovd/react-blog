import { Link, useLocation } from 'react-router-dom';
import { MAIN_PAGE } from '../../utils/constants';
import styles from './styles.module.css';

function Button({ text, id }) {
  const location = useLocation();

  return (
    <Link to={location.pathname === MAIN_PAGE ? `post/${id}` : MAIN_PAGE} className={styles.link}>
      <span className={styles.text}>{text}</span>
    </Link>
  );
}

export default Button;
