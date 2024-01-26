"use client"
import { useEffect, useState } from "react";

import Header from './components/header'
import Botao from './components/botao'
import Tarefas from './components/tarefas'

import styles from '../app/styles/page.module.css';

import TaskInterface from '../app/interfaces/task';
import { getTasks, createTask } from '../app/services/taskService';

export default function Home() {
  const [tasks, setTasks] = useState<TaskInterface[] | never[]>([]);

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, [])

  function addTask(){
    createTask()
    const updatedTasks = getTasks();
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />

      <div className={styles.divContainerTaferas}>
        <Tarefas tasksPage={tasks}/>
      </div>

      <div className={styles.divContainerBotao}>
        <Botao onClick={() => addTask()}/>
      </div>
    </div>
  );
}
