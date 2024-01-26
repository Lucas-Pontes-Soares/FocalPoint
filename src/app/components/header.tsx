import styles from '../styles/header.module.css';

//pegando data atual
const currentDate = new Date();

// ex: "Segunda, 22 de dezembro de 2024"
const formattedDate = currentDate.toLocaleDateString('pt-BR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});


export default function Header() {
  return (
    <div className={styles.divHeader}>
        <div className={styles.column1}>
            <img src="/images/logo.png" alt="" />
        </div>
        <div className={styles.column2}>
            <h1 className={styles.welcome}>Bem-vindo de volta, Lucas</h1>
        </div>
        <div className={styles.column3}>
            <p className={styles.dateText}>{formattedDate}</p>
        </div>
    </div>
  );
}
