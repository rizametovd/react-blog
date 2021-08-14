import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>©{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
