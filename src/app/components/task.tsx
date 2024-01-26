import React, { useState } from "react";

import styles from '../styles/task.module.css';

import { updateTaskProgress } from '../../app/services/taskService';

interface TaskProps {
    taskId: number;
    taskTitle: string;
    taskProgress: boolean;
    taskDate: Date;
    onChange: (taskId: number, newProgress: boolean) => void;
}

export const Task: React.FC<TaskProps> = ({ taskId, taskTitle, taskProgress, taskDate, onChange }) => {
    const [isChecked, setIsChecked] = useState(taskProgress);

    //vai inverter na tarefa finalizada
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);

      if(!isChecked){
        updateTaskProgress(taskTitle, taskId, taskDate, !isChecked)

      } else if(isChecked){
        updateTaskProgress(taskTitle, taskId, taskDate, !isChecked)
      }
      
      //avisar que mudou
      onChange(taskId, !isChecked);
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.column1}>
                <div className={styles.teste}>
                    <input
                        type="checkbox"
                        id={`progress-${taskId}`}
                        name="progress"
                        className={styles.checkbox}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
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
