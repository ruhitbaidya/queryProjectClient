import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom"
import router from './Components/Router/Router'
import AuthContext from './AuthContext/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
