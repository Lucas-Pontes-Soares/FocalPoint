import styles from '../styles/header.module.css';

//pegando data atual
const currentDate = new Date();

const nomesDosMeses = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

// ex: "Segunda, 22 de dezembro de 2024"

const formattedDate = currentDate.toLocaleDateString('pt-BR', {
  weekday: 'long',
});

const dia = currentDate.getDate();
const ano = currentDate.getFullYear();
const mesNumero = currentDate.getMonth();
const mesNome = nomesDosMeses[mesNumero];

// ex: segunda-feira para Segunda
const weekday = formattedDate.split(',')[0].trim();
const diaSemana = weekday.replace(/-/g, '').replace('feira', '');
const diaSemanaMaisuculo = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

// criando texto correto
const dataAtual = `${diaSemanaMaisuculo}, ${dia} de ${mesNome} de ${ano}`

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
            <p className={styles.dateText}>{dataAtual}</p>
        </div>
    </div>
  );
}
