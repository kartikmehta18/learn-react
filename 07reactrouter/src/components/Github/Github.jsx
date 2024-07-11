import React, { useEffect ,useState } from 'react'

function Github() {
    const [data , setData] =useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/kartikmehta18')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setData(data)
     })
    },[])
  return (
    <div className='flex items-center justify-center  text-center text-3xl '>
      Github Follwers:{data.followers}<br></br>
      Github Name:{data.name}<br></br>
    
      <img className=' flex items-center justify-center w-40 h-40 rounded-full' src={data.avatar_url} alt="Git" width={300 }/>
    </div>
  )
}

export default Github ;
