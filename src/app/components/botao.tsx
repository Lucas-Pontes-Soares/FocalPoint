import styles from '../styles/botao.module.css';

export default function Botao() {
    return(
        <div className={styles.divButton}>
            <button className={styles.button}>Adicionar nova tarefa</button>
        </div>
    )

}
