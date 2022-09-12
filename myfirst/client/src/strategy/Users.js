import axios from 'axios';
import { getCookieToken, removeCookieToken, setRefreshToken } from '../storage/Cookie';
const TIME_OUT = 300 * 1000;
const JWT_EXPIRRY_TIME = 24*3600*1000;

const statusError = {
    status:false,
    json:{
        error:['not connected fastly, please try it later.']
    }
};

const requestPromise = (url,body)=>{
    return axios.post(url,body);
};

const timeoutPromise =()=>{
    return new Promise((_,reject)=> setTimeout(()=>reject(new Error('timeout')),TIME_OUT));
};

const getPromise = async(url,body) =>{
    return await Promise.race([
        requestPromise(url,body),
        timeoutPromise()
    ]);
};

export const loginUser = async(credentials) =>{
    const data = await getPromise('http://localhost:5000/api/login',credentials,{
        withCredentials:true
    }).catch(()=>{
        return statusError;
    });

    console.log(data.status);

    if(parseInt(Number(data.status)/100)===2){
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.data.access_token}`;
        const status = data.status;
        const json = data;

        return {
            status,
            json
        };
    }else{
        return statusError;
    }
};

export const silentLogin = async ()=>{
    const refresh_token = getCookieToken('refresh_token');
    const data = await getPromise('http://localhost:5000/api/silent-login',{
        refresh_token:refresh_token,
    },{
        withCredentials:true
    }).catch(()=>{
        return statusError;
    });

    if(parseInt(Number(data.status)/100)===2){
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.data.access_token}`;
        setRefreshToken(data.data.refresh_token);


        setTimeout(silentLogin, JWT_EXPIRRY_TIME-60000);
    }else{
        return statusError;
    }


}


export const logoutUser = async () => {
    const data = await getPromise('http://localhost:5000/api/logout',{hi:"hi"},{
        withCredentials:true
    }).catch(()=>{
        return statusError;
    });

    if (parseInt(Number(data.status)/100)===2) {
        removeCookieToken('refresh_token');
        removeCookieToken('nick');
        axios.defaults.headers.common["Authorization"] = `undefinded`;
    } else {
        return statusError;
    }
};


