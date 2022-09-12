import React from "react";
import { useState ,useEffect} from "react";
import axios from 'axios';

const SingIn = ()=>{


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nick,setNick] = useState("");

    const onNickHandler = (event) =>{
      setNick(event.target.value);
    }

      const onEmailHandler = (event) => {
          setEmail(event.target.value);
      }
    
      const onPasswordHandler = (event) => {
          setPassword(event.target.value);
      }
    
      const onConfirmPasswordHandler = (event) => {
          setConfirmPassword(event.target.value);
      }

      const submitHandler = async (e) => {

        e.preventDefault();
        
        // state에 저장한 값을 가져옵니다.
        console.log(email);
        console.log(nick);
        console.log(password);
        console.log(password!==confirmPassword);
    
    
        if(password!==confirmPassword){
          e.preventDefault();
          alert('not equal pass');
        }else{

          await axios
          .post("http://localhost:5000/api/signin", {
            email: email,
            nick: nick,
            password: password,
          })
          .then((res) => console.log(res.data.code));  
        }

        
      };


    return(
        <div className="bg-gradient-to-r from-[#FFEFBF] via-[#65CBFF] to-[#C4E693]  flex flex-col justify-center w-full items-center mt-20 space-y-4 px-25">
          

        <form className=" flex flex-col mt-50 mb-50 justify-center items-center w-full space-y-4 " onSubmit={submitHandler}>
            <div className="px-2 mt-5"><input name="nick" type="text" placeholder="nick" value={nick} onChange={onNickHandler}/></div>
            <div><input name="email" type="email" placeholder="email" value={email} onChange={onEmailHandler} /></div>
            <div><input name="password" type="password" placeholder="password" value={password} onChange={onPasswordHandler} /></div>
            <div><input name="confirmPassword" type="password" placeholder="confirm password" value={confirmPassword} onChange={onConfirmPasswordHandler} /></div>
            <div><button type="submit">Create Account</button></div>
        </form>
      </div>
    );
}

export default SingIn;