import React from "react";
import {Outlet, Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/Employee">Employee</Link></li>
                    <li><Link to="/List">List</Link></li>
                    <li><Link to="/HR">HR</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Home;