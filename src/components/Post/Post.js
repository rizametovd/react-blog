import styles from './styles.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePost } from '../../utils/api';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction } from '../../store/actionCreators';

function Post() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const isLoading = useSelector((state) => state.posts.isLoading);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostsAction());

    setTimeout(() => {
      dispatch(getSinglePost(id));
    }, 150);
  }, [id, dispatch]);

  return (
    <section className={styles.section}>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <Button text={'Назад'} />
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={post.image} alt='Картинка' />
          </div>

          <p className={styles.text}>{post.description}</p>
        </>
      )}
    </section>
  );
}

export default Post;
