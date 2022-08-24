import unchecked from '../assets/unchecked.svg'
import checked from '../assets/checked.svg'
import trash from '../assets/trash.svg'

import styles from './Task.module.css'


interface TaskProps{
  task: {
    id: string,
    isChecked: boolean,
    content: string
  }

  handleCheckButton: (id:string) => void;
  handleRemoveTask: (id:string) => void;
}

export function Task({task, handleCheckButton,handleRemoveTask}: TaskProps){
  return(
    <li>
      <div className={styles.containerTask}>
        <div>
          <button >
            <img 
              src={task.isChecked ? checked : unchecked}
              onClick={() => handleCheckButton(task.id)}
            />
          </button>

            <p className={task.isChecked ? styles.paragraphWithLineThrough : styles.paragraph}>{task.content}</p>
        </div>

          <button>
            <img 
              src={trash}
              onClick={() => handleRemoveTask(task.id)}

            />
          </button>
      </div>
    </li>
  )
}