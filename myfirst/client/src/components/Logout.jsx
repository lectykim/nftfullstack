import React from "react";
import { logoutUser } from "../strategy/Users";
const Logout = ()=>{


    return(
        <>
            <button className="border-solid bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-black" onClick={logoutUser}></button>
        </>
    )
}

export default Logout;