import React, {useState, useContext} from "react";

function Login(){
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {}

    const handleSubmit = () =>{

    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'/>
            <input type="text" 
            onChange={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;