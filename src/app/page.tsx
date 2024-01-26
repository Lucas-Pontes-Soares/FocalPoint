"use client"
import { useEffect, useState } from "react";

import Header from './components/header'
import Botao from './components/botao'
import Tarefas from './components/tarefas'

import styles from '../app/styles/page.module.css';

import TaskInterface from '../app/interfaces/task';
import { getTasks, createTask } from '../app/services/taskService';
import { NewTaskModal } from "./modals/newTaskModal";

export default function Home() {
  const [tasks, setTasks] = useState<TaskInterface[] | never[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateTasks = () => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  };

  //quando o usuario adicionar uma task na modal
  const handleCreateTask = (title: string) => {
    createTask(title);
    updateTasks(); 
    closeModal(); 
  };

  return (
    <div>
      <Header />

      <div className={styles.divContainerTaferas}>
        <Tarefas tasksPage={tasks} />
      </div>

      <div className={styles.divContainerBotao}>
        <Botao onClick={() => openModal()}/>
      </div>

      {isModalOpen && (
        <div className={styles.modalBackground}>
          <NewTaskModal 
            onClose={closeModal} 
            onCreateTask={handleCreateTask} 
          />
        </div>
      )}
    </div>
  );
}
