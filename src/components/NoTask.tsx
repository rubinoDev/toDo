import clipBoard from '../assets/Clipboard.svg'
import styles from './NoTask.module.css'

export function NoTask(){
  return(
    <div className={styles.containerNoTask}>
      <img src={clipBoard}/>
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}