import {Cookies} from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) =>{
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 1);

    return cookies.set('refresh_token',refreshToken,{
        sameSite:'strict',
        path:"/",
        expires:new Date(expireDate),
        
    });
};
export const setUserNick = (nick) =>{
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 1);

    return cookies.set('nick',nick,{
        sameSite:'strict',
        path:"/",
        expires:new Date(expireDate),
        
    });
}

export const getCookieToken = (name)=>{
    return cookies.get(`${name}`);
};

export const removeCookieToken = (name)=>{
    return cookies.remove(`${name}`,{sameSite:'strict',path:"/"})
};

export const extendCookieToken = ()=>{
    const refreshToken = getCookieToken('refrsh_token');
    return setRefreshToken(refreshToken);
}