import Button from '../Button/Button';
import styles from './styles.module.css';

function Card({ title, image, preview, id }) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt='Превью' />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{preview}</p>
        <Button text={'Подробнее'} id={id} />
      </div>
    </div>
  );
}

export default Card;
