import { useState } from 'react'

import './App.css'
// function Random(){
//  const n=Math.floor(Math.random()*1677215);
//  const rn= "#"+n;
//  console.log(rn);
//  navigator.clipboard.writeText(rn);
// }

function App() {
  const [color, setColor] = useState("olive")
  const n=Math.floor(Math.random()*1677215);
 const rn= "#"+n;
 const rrn=navigator.clipboard.writeText(rn);
//  alert("color copied to clipboard");

  return (
         <div className="w-full h-screen duration-200"
         
      style={{backgroundColor: color}}>
          <div className=' fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 text-white text-7xl'>{rn}
          </div>
          <div className=' fixed flex flex-wrap justify-center top-15 inset-x-0'><img src="https://readme-typing-svg.demolab.com?font=Poppins&duration=1000&pause=500&color=F7F7F7&random=false&width=370&lines=Hey+This+is+Random+Color+Generator" alt="Typing SVG" />
          </div>
          
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
          <div className="fixed flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-full">
            <button onClick={()=> setColor("orange")}
            className="mr-2 outline-none px-4 rounded-full bg-orange-600 text-white drop-shadow-lg">Orange</button>
            <button onClick={()=> setColor("red")}
            className="mr-2 outline-none px-4 rounded-full bg-red-600 text-white drop-shadow-lg">Red</button>
            <button onClick={()=> setColor("yellow")}
            className="mr-2 outline-none px-4 rounded-full bg-yellow-400 text-white drop-shadow-lg">Yellow</button>
            <button onClick={()=> setColor("black")}
            className="mr-2 outline-none px-4 rounded-full bg-black text-white drop-shadow-lg">Black</button>
            <button onClick={()=> setColor("green")}
            className="mr-2 outline-none px-4 rounded-full bg-green-600 text-white drop-shadow-lg">Green</button>
             <button onClick={()=> setColor(rn)}
            className="mr-2 outline-none px-4 rounded-full  text-white drop-shadow-lg"   style={{backgroundColor: color}}>Random-Color</button>
            </div>
            
        </div>
      </div>
  )
}

export default App
