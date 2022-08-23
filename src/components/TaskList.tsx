import plus from '../assets/plus.svg'

import styles from './TaskList.module.css'

export function TaskList(){
  return(
    <main>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input 
            placeholder='Adicione uma nova tarefa'
          />

          <button>
            Criar
            <img src={plus}/>
          </button>
        </div>

        <div className={styles.containerTasks}>
          <div className={styles.containerTaskTracker}>
              <div className={styles.containerTasksCreated}>
                <strong>Tarefas criadas</strong>
                <div className={styles.containerTaskCount}>
                  0
                </div>
              </div>

              <div className={styles.containerTasksConcluded}>
                <strong>Concluídas</strong>
                <div className={styles.containerTaskCount}>
                  0
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}