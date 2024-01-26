"use client"
import { useEffect, useState } from "react";

import styles from '../styles/tarefas.module.css';

import  { Task } from "./task";

import TaskInterface from '../../app/interfaces/task';

import { getTasks } from '../../app/services/taskService';

interface TarefasProps {
    tasksPage: TaskInterface[];
}

export default function Tarefas({ tasksPage }: TarefasProps) {
    const [tasks, setTasks] = useState<TaskInterface[] | never[]>([]);

    //toda vez que adicionar o tasks, reenderiza o componente
    useEffect(() => {
        setTasks(tasksPage);
    }, [tasksPage]) 

    //quando alterar o progresso da task vai atualizar as tarefas
    const handleChangeTask = (taskId: number, newProgress: boolean) => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, progress: newProgress } : task
        );
        setTasks(updatedTasks);
    };

     //quando deletar a task vai atualizar as tarefas
    const handleUpdateTasks = () => {
        const storedTasks = getTasks();
        setTasks(storedTasks);
    };

    return(
        <div className={styles.container}>
            
            <h3 className={styles.TitleText} >Suas tarefas de hoje</h3>
            {tasks.length > 0 ? <div className={styles.tasksSpace}>
                {tasks.map((task) => (
                <div key={'divMap' + task.id}>
                    {task.progress === false ? 
                            <Task 
                                key={task.id} 
                                taskId={task.id} 
                                taskTitle={task.title} 
                                taskProgress={task.progress}
                                taskDate={task.createdAt}
                                onChange={handleChangeTask}
                                onUpdateTasks={handleUpdateTasks}
                            />
                    : 
                        null
                    }
                </div>
            ))}  
            </div> 
            :
            <div className={styles.semTarefas}>
                <p className={styles.textoSemTarefas}>Não há tarefas para mostrar.</p>
            </div>
            }

            <h3 className={styles.TitleTextFinished} >Tarefas finalizadas</h3>
            {tasks.length > 0 ? <div className={styles.tasksSpace}>
                {tasks.map((task) => (
                <div key={'divMap' + task.id}>
                    {task.progress === true ? 
                            <Task 
                                key={task.id} 
                                taskId={task.id} 
                                taskTitle={task.title} 
                                taskProgress={task.progress}
                                taskDate={task.createdAt}
                                onChange={handleChangeTask}
                                onUpdateTasks={handleUpdateTasks}
                            />
                    : 
                        null
                    }
                </div>
            ))}  
            </div> 
            :
            <div className={styles.semTarefas}>
                <p className={styles.textoSemTarefas}>Não há tarefas para mostrar.</p>
            </div>
            }

        </div>
    )

}
