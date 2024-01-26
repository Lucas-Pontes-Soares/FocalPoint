import styles from '../styles/botao.module.css';

export default function Botao(props:{onClick:()=>void}) {
    return(
        <div className={styles.divButton}>
            <button 
                className={styles.button} 
                onClick={props.onClick}
            >
                Adicionar nova tarefa
            </button>
        </div>
    )

}
