import styles from '../styles/tarefas.module.css';
import Task from './task';

export default function Tarefas() {
    return(
        <div className={styles.container}>
            <h3 className={styles.TitleText} >Suas tarefas de hoje</h3>

            {/* Adiconar Tarefas */}
            <Task />
            <Task />

            <h3 className={styles.TitleTextFinished} >Tarefas finalizadas</h3>
            
            {/* Adicionar Tarefas */}
            <Task />
            <Task />
        </div>
    )

}
