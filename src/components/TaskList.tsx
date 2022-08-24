import { useState } from 'react'
import { nanoid } from 'nanoid'

import { NoTask } from './NoTask'
import { Task } from './Task'

import plus from '../assets/plus.svg'

import styles from './TaskList.module.css'

interface TasksProps{
  id: string,
  isChecked: boolean,
  content: string
}

export function TaskList(){
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [counterTasksFinished, setCounterTasksFinished] = useState(0)

  function handleCreateNewTask(){
    if(newTaskText === ''){
      return
    }

    const task = {
      id: nanoid(),
      isChecked: false,
      content: newTaskText
    }

    setTasks([...tasks, task])
    setNewTaskText('')
  }

  function addCounterTasksFinished(){
    const tasksFinished = tasks.filter(task => task.isChecked === true)

    setCounterTasksFinished(tasksFinished.length)
  }

  function subtractCounterTasksFinished(){
    setCounterTasksFinished(prevState => prevState - 1)
  }

  function handleCheckButton(id:string){
    const sameIdTask = tasks.filter(task => task.id === id)
    
    if(sameIdTask[0].isChecked === false){
      sameIdTask[0].isChecked = true
    }else if(sameIdTask[0].isChecked === true){
      sameIdTask[0].isChecked = false
    }

    setTasks([...tasks])
    addCounterTasksFinished()
  }

  function handleRemoveTask(id:string){
    const tasksFiltered = tasks.filter(task => task.id !== id)

    setTasks(tasksFiltered)
    subtractCounterTasksFinished()

  }

  return(
    <main>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input 
            placeholder='Adicione uma nova tarefa'
            onChange={(e) => setNewTaskText(e.target.value)}
            value={newTaskText}
          />

          <button 
            className={styles.createButton}
            onClick={handleCreateNewTask}
            >
              Criar
            <img src={plus}/>
          </button>
        </div>

        <div className={styles.containerTasks}>
          <div className={styles.containerTaskTracker}>
              <div className={styles.containerTasksCreated}>
                <strong>Tarefas criadas</strong>
                <div className={styles.containerTaskCount}>
                  {tasks.length}
                </div>
              </div>

              <div className={styles.containerTasksConcluded}>
                <strong>Concluídas</strong>
                <div className={styles.containerTaskCount}>
                  {tasks.length === 0 ? 0 : counterTasksFinished + ' de ' + tasks.length}
                  
                </div>
              </div>

          </div>
              <div>
                {tasks.length === 0 ? <NoTask/> :
                  <ul>
                   {tasks.map(task => (
                    <Task 
                      task= {task}
                      handleCheckButton={handleCheckButton}
                      handleRemoveTask={handleRemoveTask}
                    />
                   ))}
                  </ul>
                }
                
              </div>
        </div>
      </div>
    </main>
  )
}