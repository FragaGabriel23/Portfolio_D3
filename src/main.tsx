import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './views/Home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
