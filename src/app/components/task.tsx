import styles from '../styles/task.module.css';

export default function Task() {
    return(
        <div className={styles.container}>
            <div className={styles.column1}>
                <div className={styles.teste}>
                <input type="checkbox" id="progress" name="progress" className={styles.checkbox} />
                </div>
            </div>
            <div className={styles.column2}>
                <p className={styles.taskTitle} >Titulo da task</p>
            </div>
            <div className={styles.column3}>
                <img src="/images/iconLixeira.png" alt="" />
            </div>  
        </div>
    )

}
