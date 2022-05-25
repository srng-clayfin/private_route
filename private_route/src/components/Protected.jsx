import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Protected = (p) =>
{
    const {Component} = p
    const navigate = useNavigate();

    useEffect(() =>
    {
        if(!localStorage.getItem('protected-user'))
        {
            navigate('/');
        }
    })

    return(
        <div>
            <Component />
        </div>
    )
}
