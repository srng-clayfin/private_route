import React from "react";
import { Link } from "react-router-dom";

export const Main = () =>
{
    return(
        <>       
            <div className="Nav">

                <Link to="/about"><h3>About</h3></Link>
                <Link to="/finance"><h3>Finance</h3></Link>
                <Link to="/contact"><h3>Contact</h3></Link>
                <Link to="/"><h3>User</h3></Link>        
    
            </div>
        </>
    )
}