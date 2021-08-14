import styles from './styles.module.css';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { paginationAction, showLoaderAction } from '../../store/actionCreators';
import { POSTS_PER_PAGE } from '../../utils/constants';
import Loader from '../Loader/Loader';

function PostsList() {
  const posts = useSelector((state) => state.posts.posts);
  const { currentPage, isLoading } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    dispatch(paginationAction(pageNumber));

    setTimeout(() => {
      dispatch(showLoaderAction());
    }, 300);
  }

  return (
    <section className={styles.section}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {currentPosts.map(({ id, title, image, preview }) => (
            <li key={id} className={styles.listItem}>
              <Card title={title} image={image} preview={preview} id={id} />
            </li>
          ))}
        </ul>
      )}
      <Pagination totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
    </section>
  );
}

export default PostsList;
