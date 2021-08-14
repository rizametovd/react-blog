import { NavLink } from 'react-router-dom';
import { MAIN_PAGE, POSTS_PER_PAGE } from '../../utils/constants';
import styles from './styles.module.css';

function Pagination({ totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / POSTS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {pageNumbers.map((number) => (
          <li className={styles.item} key={number}>
            <NavLink
              to={MAIN_PAGE}
              className={` ${
                currentPage === number ? `${styles.link} ${styles.linkActive}` : styles.link
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
