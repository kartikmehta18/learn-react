import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  createRoutesFromElements,  Route,  RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
 import Github  from './components/Github/Github'
// import Github ,{githubInfoLoader} from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About />
//       },
//       {
//         path: "contact",
//         element:<Contact />
//       },
//     ]
//   }
// ])
// another method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="user/:userid" element={<User />}/>
      <Route 
      // loader={githubInfoLoader}
      path="github"
      element={<Github />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
