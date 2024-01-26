"use client"
import { useEffect, useState } from "react";

import styles from '../styles/tarefas.module.css';

import  { Task } from "./task";

import TaskInterface from '../../app/interfaces/task';

interface TarefasProps {
    tasksPage: TaskInterface[];
}

export default function Tarefas({ tasksPage }: TarefasProps) {
    const [tasks, setTasks] = useState<TaskInterface[] | never[]>([]);

    useEffect(() => {
        setTasks(tasksPage);
    }, [tasksPage]) //toda vez que adicionar o tasks, reenderiza o componente

    //quando alterar o progresso da task vai atualizar a task
    const handleChangeTask = (taskId: number, newProgress: boolean) => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, progress: newProgress } : task
        );
        setTasks(updatedTasks);
    };

    return(
        <div className={styles.container}>
            
            <h3 className={styles.TitleText} >Suas tarefas de hoje</h3>
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
                            />
                    : 
                        null
                    }
                </div>
            ))}

            <h3 className={styles.TitleTextFinished} >Tarefas finalizadas</h3>
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
                            />
                    : 
                        null
                    }
                </div>
            ))}

        </div>
    )

}
