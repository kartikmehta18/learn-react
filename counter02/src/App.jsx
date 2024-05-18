import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(7)  // it is a hooks so if apan hooks use kar te he to passed value jaha bhi place
  // kare ge to vo direct ui me update ho ga so isse DOM use nahi kar na pade ga

//let counter=15;

const addValue =()=>{
  // counter=counter +1;
  setCounter(counter +1);
  if(counter ==20){
    setCounter(counter =20);
   }
  console.log("value added" ,counter);
}
const removeValue =()=>{
 
 setCounter(counter -1);
 if(counter ==0){
  setCounter(counter =0);
 }
  console.log("value added" ,counter);
}

  return (
    <>
    <h1>kartik</h1>
    <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}
     >Add value{counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
    </>
  )
}

export default App
