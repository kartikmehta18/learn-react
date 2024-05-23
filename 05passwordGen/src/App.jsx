import { useState ,useCallback, useEffect, useRef} from 'react'
import './App.css'



function App() {
  const [length, setLength] = useState(8);
  const [number , setNumber]= useState(false);
  const [char, setChar] =useState(false);
  const [password ,setPassword]=useState("");

  //ref hook
  const passwordRef =useRef(null); //useRef hook only for showing id the password is copied or not

  const passwordGenerator =useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str +="0123456789";

    if(char) str+="!@#$%^&*()_+*/?><";

    for(let i=1;i<=length;i++){
     let char =Math.floor(Math.random()*str.length+1);
     pass +=str.charAt(char);
    }
    setPassword(pass);


  },[length ,number ,char, setPassword]) ;  //set pass optimization

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);  only for selecting the first 4 characters

    window.navigator.clipboard.writeText(password);
  },[password]
)

useEffect(()=>{  passwordGenerator();
},[ length, number, char, passwordGenerator])





  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
    <h1 className='text-center text-white my-3'>password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-black'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
           type='range'
           min={8}
           max={100}
           value={length}
           className=' cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gapp-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{setNumber((prev)=>!prev);}}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gapp-x-1'>
          <input
          type='checkbox'
          defaultChecked={number}
          id="charInput"
          onChange={()=>{setChar((prev)=>!prev);}}
          />
          <label>Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
