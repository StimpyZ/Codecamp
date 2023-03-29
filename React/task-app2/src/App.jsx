import './App.css'
import freecodecampIMG from './assets/freecodecamp-img-logo.svg'
import TaskList from './components/container/Task_list'
function App () {
  return (
    <div className='App'>
      <div className='freecodecamp-img-container'>
        <img
          className='freecodecamp-img'
          src={freecodecampIMG}
          alt='logo de freecodecamp'
        />
      </div>
      <TaskList />
    </div>
  )
}

export default App
