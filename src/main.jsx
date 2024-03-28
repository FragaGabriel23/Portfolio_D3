import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './views/Home/Home'
import { projects } from './mocks/projects.mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home Projects={projects} />
  </React.StrictMode>,
)
