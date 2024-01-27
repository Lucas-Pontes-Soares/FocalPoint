import React, { ChangeEvent, FormEvent, useState } from "react";

import styles from '../styles/newTask.module.css';

interface ModalProps {
  onClose: () => void;
  onCreateTask: (title: string) => void;
}

export const NewTaskModal: React.FC<ModalProps> = ({ onClose, onCreateTask }) => {
  const [title, setTitle] = useState<string>('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(title){
      onCreateTask(title);
      onClose();
    } else {
      alert("Informe o titulo da tarefa!")
    }
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.modalTitle}>Nova Tarefa</h1>

        <form onSubmit={handleSubmit}>
          <label className={styles.labelTitulo}>Titulo</label>
          <input
            type="text"
            name="title"
            placeholder="Digite"
            className={styles.InputTitle}
            value={title} 
            onChange={handleTitleChange}
            required
          />

        <div className={styles.divButtons}>
          <button className={styles.closeButton} onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className={styles.openButton} >
            Adicionar
          </button>
        </div>
        </form>
      </div>
  );
};
