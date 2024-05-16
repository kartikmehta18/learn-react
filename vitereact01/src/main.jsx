import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>custom app</h1>
//     </div>
//   )
// }
const anotherUser ="chai panni";
const reactElement = React.createElement(
  'a',
  {href:'https:/google.com',target:'_blank'},
  'click me ti visit google',
  anotherUser
)

const anotherElement = (
  <a href="https:/google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement
  // <App />
    // anotherElement
 
)
