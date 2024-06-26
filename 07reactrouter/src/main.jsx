import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, router, RouterProvider } from 'react-router-dom'
import Root from './components/root'
import Home from './components/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
