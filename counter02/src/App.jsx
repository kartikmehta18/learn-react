import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

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
