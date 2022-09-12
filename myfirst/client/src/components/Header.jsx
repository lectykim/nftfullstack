import { useState } from "react";

const Header =()=>{
    return(
        <nav className="bg-[#A2F5E6]/50 w-full flex md:justify-center justify-between items-center h-30 p-4 ">
            <div className="text-black justify-start py-3">
                Search
            </div>
            <div className="text-black justify-center py-3 px-5 border-solid border-1.5 border-slate-500" >
                <input className="" type="text" placeholder="Enter the article's title" />
                <button>submit</button>
            </div>
        </nav>
    );


}

export default Header;