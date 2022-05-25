import { useState } from "react";

export const User = () =>
{
    const [msg,setMsg] = useState('');

    const loginUser = () =>
    {
        localStorage.setItem('protected-user',true);      
        setMsg("just refresh...:) ")          ;        
    }

    const LogoutUser = () =>
    {                
       localStorage.removeItem('protected-user');
       
       setMsg("just refresh...:) ")
       
    }


    return(
        <>
            <h1>
                User Page... :)                           
            </h1>
            <br />
            <br />               
                {
                    localStorage.getItem('protected-user')?
                    <button onClick={LogoutUser}>                        
                        LogOut
                    </button>
                    :
                    <button onClick={loginUser}>                        
                        Login
                    </button>
                }      
        </>
    )
}