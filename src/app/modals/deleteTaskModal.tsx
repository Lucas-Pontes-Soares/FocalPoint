import styles from '../styles/deleteTask.module.css';

import { deleteTask } from '../../app/services/taskService';

interface ModalProps {
    idTask: number;
    onClose: () => void;
    onUpdateTasks: () => void;
  }

export const DeleteTaskModal: React.FC<ModalProps> = ({ onClose, idTask, onUpdateTasks }) => {

    function deleteTaskFunction(){
        deleteTask(idTask);
        onUpdateTasks();
        onClose();
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.modalTitle}>Deletar Tarefa</h1>

            <p className={styles.description}>Tem certeza que você deseja deletar essa tarefa?</p>

            <div className={styles.divButtons}>
            <button className={styles.closeButton} onClick={onClose}>
                Cancelar
            </button>
            <button className={styles.deleteButton} onClick={() => deleteTaskFunction()}>
                Deletar
            </button>
            </div>
      </div>
    )
}