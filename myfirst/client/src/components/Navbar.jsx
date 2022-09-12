import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import { useState} from "react";
import { Link } from "react-router-dom";



import logo from "../images/logo.jpg";
import { getCookieToken } from "../storage/Cookie";
const NavbarItem = ({title, classProps}) => {
    const nick = getCookieToken('nick');
    if(title=='Login'&&nick!=undefined)
        return(<li></li>);

    return (<li className={`mx-4 cursor-pointer ${classProps}`}>
        <Link to={`/${title}`}><li className="text-black justify-center">{title}</li></Link>
    </li>);

}

const Navbar = ()=>{

    const nick = getCookieToken('nick');
    const [toggleMenu,setToggleMenu] = useState(false);

    return(
        <nav className="bg-[#caa6fe]/50 w-full flex md:justify-center justify-between items-center h-36 p-4 ">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/">
                <img src={logo} alt="logo" className="w-32 cursor pointer"/>
                </Link>
            </div>
            <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["MyPage","Market","Transactions"].map((item,index)=>(
                    <NavbarItem key={item+index} title={item}/>
                ))}
                {
                    !nick&&<li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    <Link to="/login">Login and Sign in</Link>
                </li>
                }
            </ul>
            <div className="flex relative">
                    {!toggleMenu && (
                        <HiMenuAlt4 color="black" fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
                    )}
                    {toggleMenu && (
                        <AiOutlineClose color="black" fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    )}
                    {toggleMenu && (
                        <ul
                            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white amimate-slide-in"
                        >
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose color="black" onClick={()=>setToggleMenu(false)}
                                />
                            </li>
                            {["Search","Market","Transactions","Login"].map(
                                (item,index) => <NavbarItem key={item+index} title={item} classProps="my-2 text-lg"/>,
                            )}
                        </ul>
                    )}
            </div>
        </nav>

    );
}

export default Navbar;