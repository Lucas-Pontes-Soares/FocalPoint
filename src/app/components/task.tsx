import styles from '../styles/task.module.css';

interface TaskProps {
    taskId: number;
    taskTitle: string;
    taskProgress: boolean;
}

export const Task: React.FC<TaskProps> = ({ taskId, taskTitle, taskProgress }) => {
    return(
        <div className={styles.container}>
            <div className={styles.column1}>
                <div className={styles.teste}>
                {taskProgress === false ? 
                    <input type="checkbox" id={`progress-${taskId}`} name="progress" className={styles.checkbox} />
                :
                    <input type="checkbox" id={`progress-${taskId}`} name="progress" className={styles.checkbox} defaultChecked />
                }
                </div>
            </div>
            <div className={styles.column2}>
                {taskProgress === false ? 
                    <p className={styles.taskTitle}> {taskTitle} </p> 
                : 
                    <p className={styles.taskTitleChecked}> {taskTitle} </p>
                }
            </div>
            <div className={styles.column3}>
                <img src="/images/iconLixeira.png" alt="" />
            </div>  
        </div>
    )

}
