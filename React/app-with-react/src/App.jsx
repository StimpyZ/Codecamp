import React from 'react'

import './App.css'
import Testimonio from './components/container/Testimonio'
import { objetoEmpleado } from './models/objeto'

function App () {
  return (
    <div className='App'>
      <div className='main'>
        <h1>
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp
        </h1>
        <Testimonio
          name={objetoEmpleado.employee1.name}
          cardImg={objetoEmpleado.employee1.cardImg}
          country={objetoEmpleado.employee1.country}
          job={objetoEmpleado.employee1.job}
          company={objetoEmpleado.employee1.company}
          testimonio={objetoEmpleado.employee1.testimonio}
        />
        <Testimonio
          name={objetoEmpleado.employee2.name}
          cardImg={objetoEmpleado.employee2.cardImg}
          country={objetoEmpleado.employee2.country}
          job={objetoEmpleado.employee2.job}
          company={objetoEmpleado.employee2.company}
          testimonio={objetoEmpleado.employee2.testimonio}
        />
        <Testimonio
          name={objetoEmpleado.employee3.name}
          cardImg={objetoEmpleado.employee3.cardImg}
          country={objetoEmpleado.employee3.country}
          job={objetoEmpleado.employee3.job}
          company={objetoEmpleado.employee3.company}
          testimonio={objetoEmpleado.employee3.testimonio}
        />
      </div>
    </div>
  )
}

export default App
