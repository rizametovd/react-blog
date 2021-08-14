import styles from './styles.module.css';
import { Provider } from 'react-redux';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { store } from '../../store';
import { GH_PAGES_PATH, MAIN_PAGE } from '../../utils/constants';
import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const location = useLocation();
  return (
    <div className={styles.page}>
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>

      <Route>{location.pathname === GH_PAGES_PATH && <Redirect to={MAIN_PAGE} />}</Route>
    </div>
  );
}

export default App;
