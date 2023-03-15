import styles from './Task.module.css'

// images
import Trash from '../assets/trash.svg'
import Check from '../assets/checkbox.svg'
import Checked from '../assets/checkbox-checked.svg'

interface taskInterface {
  taskId: number
  task: string
  completed: boolean
  completedTasks: Function
  deleteTask: Function
}

export function Task({
  taskId,
  task,
  completed,
  completedTasks,
  deleteTask,
}: taskInterface) {
  return (
    <div className={styles.taskContainer} key={taskId}>
      <img
        src={completed ? Checked : Check}
        className={styles.taskCheck}
        onClick={(e) => completedTasks(taskId)}
      />

      {completed ? (
        <span className={styles.taskTextCompleted}>{task}</span>
      ) : (
        <span className={styles.taskText}>{task}</span>
      )}

      <img
        src={Trash}
        alt="Deletar tareda"
        className={styles.deleteTask}
        onClick={() => deleteTask(taskId)}
      />
    </div>
  )
}
