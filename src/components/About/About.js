import styles from './styles.module.css';

function About() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>О проекте</h1>
      <h2 className={styles.subtitle}>Задача:</h2>
      <ul className={styles.list}>
        <li>Получить данные по API</li>
        <li>Вывести список статей на главную страницу</li>
        <li>Реализовать пагинацию</li>
        <li>Реализовать переход на страницу статьи</li>
        <li>Использовать Redux</li>
      </ul>

      <h2 className={styles.subtitle}>Стек:</h2>
      <ul>
        <li>React, Redux, React-Redux, JavaScript, API, HTML, CSS</li>
      </ul>
    </section>
  );
}

export default About;
