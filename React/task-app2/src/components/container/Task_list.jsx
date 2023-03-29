import React, { useState } from 'react'
import Task from '../pure/task'
import TaskForm from '../pure/taskForm'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim()

      const taskUpdate = [task, ...tasks]
      setTasks(taskUpdate)
    }
  }

  const deleteTask = (id) => {
    const updateTask = tasks.filter(task => task.id !== id)
    setTasks(updateTask)
  }

  const completeTask = (id) => {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updateTask)
  }
  return (
    <div className='task-list-main'>
      <h1>Mis Tareas</h1>
      <TaskForm send={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completeTask}
            />
          )
        }
      </div>
    </div>
  )
}

export default TaskList
