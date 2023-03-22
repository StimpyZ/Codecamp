import React, { useState, useContext } from 'react'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const miContexto = React.createContext(null)

const Componente1 = () => {
  const state = useContext(miContexto)

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2 />
    </div>
  )
}

const Componente2 = () => {
  const state = useContext(miContexto)

  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  )
}

export default function MiComponenteConContexto () {
  const estadoInicial = {
    token: '324324342',
    sesion: 1
  }

  const [sesionData, setSesionData] = useState(estadoInicial)

  const actualizarSesion = () => {
    setSesionData({
      token: randomToken(),
      sesion: sesionData.sesion + 1
    })
  }
  return (
    <miContexto.Provider value={sesionData}>
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}

const randomToken = () => {
  let token = ''

  for (let i = 0; i < 8; i++) {
    token += array[Math.floor(Math.random() * array.length)]
  }

  return token
}
