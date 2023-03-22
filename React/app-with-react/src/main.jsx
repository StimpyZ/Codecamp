import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
// import ContactList from './components/container/contact_list'
import MiComponenteConContexto from './components/hooks/Example1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex'>
      <MiComponenteConContexto />
    </div>
  </React.StrictMode>
)
