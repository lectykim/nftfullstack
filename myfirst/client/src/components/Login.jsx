import React from "react";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, silentLogin } from "../strategy/Users";
import {getCookieToken, setRefreshToken,setUserNick} from '../storage/Cookie';

const Login =()=>{

    const JWT_EXPIRRY_TIME = 24*3600*1000;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputEmail,setInputEmail] = useState('');
    const [inputPw,setInputPw] = useState('');

    const handleInputEmail = (e)=>{
        setInputEmail(e.target.value);
    }

    
    const handleInputPw = (e)=>{
        setInputPw(e.target.value);
    }

    const submitHandler = async (e) => {
        
        e.preventDefault();

        const response = await loginUser({
            "email" : inputEmail,
            "password" : inputPw
        });

        if(response.json.status==200){

            setRefreshToken(response.json.data.refresh_token);
            setUserNick(response.json.data.nick);


            
            console.log('cookie maked');
            console.log(response.json);
            console.log(getCookieToken('refresh_token'));
            console.log(getCookieToken('nick'))
            setTimeout(silentLogin, JWT_EXPIRRY_TIME-60000);
            window.location.replace("/");
            return navigate("/");
            
        }else{
            alert('not equal password or not registed');
            console.log(response.json);
        }
      };


    return(
        <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 flex flex-col justify-center w-full items-center mt-20 space-y-4 px-25">
        <form className=" flex flex-col mt-50 mb-50 justify-center items-center w-full space-y-4 " onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
                <label htmlFor="input_Email">Email : </label>
                <input type='text' name='input_Email' value={inputEmail} onChange={handleInputEmail}/>
            </div>
            <div>
                <label htmlFor="input_pw">PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw}/>
            </div>
            <button className="rounded-none bg-[#228B22] cursor-pointer hover:bg-[#9EF048]" type="submit">Login</button>

            </form>
            
            <div className="flex flex-col justify-center w-full items-center mt-20 space-y-4">
                <button className="bg-[#FF607F] rounded-full cursor-pointer hover:bg-[#FFC0CB]"><Link to='/signin'>Sign In</Link></button>
                <button className="bg-[#FF607F] rounded-full cursor-pointer hover:bg-[#FFC0CB]"><Link to='findpw'>Find Password</Link></button>
            </div>
            
        </div>
    );
}

export default Login;