import { Header } from './components/Header'
import { Task } from './components/Task'

import { useState } from 'react'

/** Styles */
import './global.css'
import styles from './App.module.css'

import Clipboard from './assets/Clipboard.svg'

function App() {
  const initialTasks = [
    {
      id: 1,
      task: 'Finalizar estilização do header do projeto',
      completed: false,
    },
    {
      id: 2,
      task: 'Desenvolver o menu sidebar',
      completed: false,
    },
    {
      id: 3,
      task: 'Desenvolver o novo protótipo no figma',
      completed: true,
    },
  ]

  // State
  const [tasks, setTasks] = useState(initialTasks)

  function orderTasks(orderTasks: any) {
    const notFinishedTasks = orderTasks.filter(
      (items: any) => items.completed != true
    )

    const finishedTasks = orderTasks.filter(
      (items: any) => items.completed == true
    )

    const ordenedTasks = [...notFinishedTasks, ...finishedTasks]

    setTasks(ordenedTasks)
  }

  // Data
  const counTasks = tasks.length

  const tasksFinished =
    tasks.length > 0 ? tasks.filter((task) => task.completed == true).length : 0

  // Add New Task
  function handleUpdateTasks(newTask: string) {
    // check if exists an array of tasks to get the id

    let i = 1
    tasks.map((item) => {
      i += i * Math.random()
    })

    const id = i.toFixed(2)

    const newTaskObject = {
      id: id,
      task: newTask,
      completed: false,
    }

    const newTasks = [...tasks, newTaskObject]

    orderTasks(newTasks)
  }

  // Toggle Completed
  function toggleCompletedTasks(toggleTaskId: number) {
    const updatedTasks = tasks

    updatedTasks.map((item) => {
      if (item.id == toggleTaskId) {
        item.completed = !item.completed
      }
    })

    orderTasks(updatedTasks)
  }

  // Delete Task
  function handleDeleteTask(deleteTaskId: number) {
    const tasksFiltered = tasks.filter((task) => task.id != deleteTaskId)

    orderTasks(tasksFiltered)
  }

  return (
    <>
      <Header addNewTask={handleUpdateTasks} />

      <main>
        <header>
          <div>
            <span className={styles.created}>Tarefas Criadas </span>
            <span className={styles.badge}>{counTasks}</span>
          </div>

          <div>
            <span className={styles.finished}>Concluidas </span>
            <span className={styles.badge}>
              {tasksFinished} de {counTasks}
            </span>
          </div>
        </header>

        {counTasks > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              taskId={task.id}
              task={task.task}
              completed={task.completed}
              completedTasks={toggleCompletedTasks}
              deleteTask={handleDeleteTask}
            />
          ))
        ) : (
          <div className={styles.noTasks}>
            <img src={Clipboard} alt="Sem atividades" />
            <p className={styles.noTasksStrong}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
