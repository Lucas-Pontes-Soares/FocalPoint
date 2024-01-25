import Header from './components/header'
import Botao from './components/botao'
import Tarefas from './components/tarefas'

import styles from '../app/styles/page.module.css';

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.divContainerTaferas}>
        <Tarefas />
      </div>

      <div className={styles.divContainerBotao}>
        <Botao />
      </div>
    </div>
  );
}
