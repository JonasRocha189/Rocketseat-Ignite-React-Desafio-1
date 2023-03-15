import styles from './Header.module.css'
import Rocket from '../assets/rocket.svg'

import { FormEvent } from 'react'

export function Header(props: any) {
  function handleCreateTask(e: any) {
    e.preventDefault()

    var newTask = e.target.newTask.value

    props.addNewTask(newTask)

    e.target.newTask.value = ''
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Rocket} alt="Rocket" height={32} width={32} />
        <div className={styles.name}>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </div>
      </div>

      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="newTask"
        />
        <button>Criar +</button>
      </form>
    </header>
  )
}
