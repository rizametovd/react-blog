import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPostsAction } from '../../store/actionCreators';
import { getPosts } from '../../utils/api';
import { ABOUT_PAGE, MAIN_PAGE, POST_PAGE } from '../../utils/constants';
import About from '../About/About';
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import PostsList from '../PostsList/PostsList';
import styles from './styles.module.css';

function Main() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchPostsAction());

    setTimeout(() => {
      dispatch(getPosts());
    }, 150);
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path={MAIN_PAGE}>
          {isLoading && <Loader />}
          {!isLoading && <PostsList />}
        </Route>
        <Route exact path={`/${POST_PAGE}/:id`}>
          <Post />
        </Route>

        <Route exact path={`/${ABOUT_PAGE}`}>
          <About />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
