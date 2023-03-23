// eslint-disable-next-line import/no-absolute-path
import './App.css'
import CountApp from './components/container/countApp'

function App () {
  return (
    <div className='App'>
      <div className='freecodecamp-img-container'>
        <img
          className='freecodecamp-img'
          src='../src/assets/freecodecamp-img-logo.svg'
        />
      </div>
      <CountApp />
    </div>
  )
}

export default App
