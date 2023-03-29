import React, { useState } from 'react'
import '../css/taskForm.css'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = ({ send }) => {
  const [input, setInput] = useState('')

  const driveChange = (e) => {
    setInput(e.target.value)
  }

  const driveSend = (e) => {
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    send(newTask)
  }
  return (
    <form
      className='task-form'
      onSubmit={driveSend}
    >
      <input
        className='task-input'
        type='text'
        placeholder='Enter your task'
        name='task'
        onChange={driveChange}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
