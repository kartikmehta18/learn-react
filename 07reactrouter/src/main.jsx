import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path: "about",
        element:<About />
      },
      {
        path: "contact",
        element:<Contact />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)