import styles from '../styles/tarefas.module.css';

export default function Tarefas() {
    return(
        <div className={styles.container}>
            <h3 className={styles.TitleText} >Suas tarefas de hoje</h3>

            {/* Adiconar Tarefas */}

            <h3 className={styles.TitleText} >Tarefas finalizadas</h3>

            {/* Adicionar Tarefas */}
        </div>
    )

}
