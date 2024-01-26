import React, { useState } from "react";

import styles from '../styles/task.module.css';

import { updateTaskProgress } from '../../app/services/taskService';
import { DeleteTaskModal } from "../modals/deleteTaskModal";

interface TaskProps {
    taskId: number;
    taskTitle: string;
    taskProgress: boolean;
    taskDate: Date;
    onChange: (taskId: number, newProgress: boolean) => void;
    onUpdateTasks: () => void;
}

export const Task: React.FC<TaskProps> = ({ taskId, taskTitle, taskProgress, taskDate, onChange, onUpdateTasks  }) => {
    const [isChecked, setIsChecked] = useState(taskProgress);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
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
                <img 
                    className={styles.lixeira}
                    src="/images/iconLixeira.png" 
                    alt="Icone para Excluir" 
                    onClick={() => openModal()} 
                />
            </div>  

            {isModalOpen && (
                <div className={styles.modalBackground}>
                    <DeleteTaskModal 
                        onClose={closeModal}
                        idTask={taskId} 
                        onUpdateTasks={onUpdateTasks}
                    />
                </div>
            )}
        </div>
    )

}
