import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,createRoutesFromElements ,Route ,RouterProvider } from 'react-router-dom'
import Hero from './Hero.jsx'
import { Plan } from './Plan.jsx'
import { Team } from './Team.jsx'
import Root from './Root.jsx'
import Features from './Features.jsx'
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Hero/>}/>
      <Route path="features" element={<Features />}/>
      <Route path="plan" element={<Plan />}/>
      <Route path="team" element={<Team  name1="Kartik Mehta"  name2="Aditya Joshi" name3="Sahaj Jain"/>}/>
    </Route>
  )
)

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider  router={router}/>
    </React.StrictMode>,
  )

