import { useState } from "react";
import { getCookieToken } from "../storage/Cookie";
import { logoutUser } from "../strategy/Users";



const Main = ()=>{


    const [category,setCategory] = useState(true);
    const rankArray_article =['rank1','rank2','rank3','rank4 ','rank5','rank6','rank7','rank8','rank9','rank10'];
    const rankArray_artist = ['artist1','artist2','artist3','artist4','artist5','artist6','artist7','artist8','artist9','artist10'];

    const RankLi = ({title})=>{
        return(
            <li className="my-2 text-lg ">
                {title}
            </li>
        );
    }
    const nick = getCookieToken('nick');
    const logoutAndReload = ()=>{
        logoutUser();
        window.location.replace("/");
    }

    return(
        
    <div className="w-full">

        {
            nick&&<div className="w-full flex md:justify-center justify-between items-center  p-4">
                <h2 className="pt-5 px-10 text-black md:justify-center justify-between text-2xl">{nick}님 접속을 환영합니다</h2>
                <button className="border-solid bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-black" onClick={logoutAndReload}>Logout</button>
            </div>
        }

        <div className="w-full flex md:justify-center justify-between items-center  p-4">
            <h2 className="pt-5 px-10 text-black md:justify-center justify-between text-2xl">Create your nft and support<br/>
            other disable artist</h2>            
        </div>

        <div className="w-full flex md:justify-center justify-between items-center p-4">

                    <ul className="w-full flex flex-row flex-wrap md:justify-center justify-between pt-15 px-4 space-x-4 space-y-4 text-center">
                        <li className=" text-black rounded-full bg-[#A2F5E6]"><h5 className="text-xl">sell your nft</h5>
                            <div>
                                We can sell your nft 
                                <br/>
                                if you are disable.
                                <br/>
                                If you set a ehterium wallet, 
                                <br/>
                                you can sell and buy all the crypto.
                            </div>
                        </li>
                        <li className=" text-black rounded-full bg-[#A2F5E6]"><h5 className="text-xl">support disable artist</h5>
                            <div>
                                We are sell only artist have disable.
                                <br/>
                                If you are buy one article, 
                                <br/>
                                you are support disable artist ecology.
                            </div>
                        </li>
                        <li className=" text-black rounded-full bg-[#A2F5E6]"><h5 className="text-xl">stable coin</h5>
                            <div>
                                If you use our stable coin,
                                <br/>
                                your transaction has low cost
                                <br/>
                                and this fee can help disables,
                                <br/>
                                also you can earn the money
                            </div>
                        </li>
                        <li className=" text-black rounded-full bg-[#A2F5E6]"><h5 className="text-xl">we make social value</h5>
                            <div>
                                We support all disable artist
                                <br/>
                                in this ecology
                                <br/>
                                Welcome to all disables and supporters
                            </div>
                        </li>
                    </ul>

            </div>

        <div className="w-full flex md:justify-center justify-between items-center  p-4">
            <h2 className="pt-5 px-10 text-2xl">Top {category} 10</h2>            
        </div>
        <div className="w-full flex flex-row flex-wrap justify-center pt-15 px-4 space-x-4 space-y-4 text-center">
            <button className="rounded-full bg-[#A2F5E6] text-xl"onClick={()=>(setCategory(true))}>article</button>
            <button className="rounded-full bg-[#A2F5E6] text-xl" onClick={()=>(setCategory(false))}>artist</button>
        </div>
        <div className="pt-15 px-4 space-x-4 space-y-4 text-center">
                    {
                        category && (
                            <ul className="w-full flex md:justify-center justify-between items-center  p-4 flex-col flex-wrap">
                                {
                                    rankArray_article.map(
                                        (item,index)=><RankLi key={item+index} title={item}></RankLi>
                                    )
                                }
                            </ul>
                            
                        )
                    }
                    {
                        !category && (
                            <ul className="w-full flex md:justify-center justify-between items-center  p-4 flex-col flex-wrap">
                                {
                                    rankArray_artist.map(
                                        (item,index)=><RankLi key={item+index} title={item}></RankLi>
                                    )
                                }
                            </ul>
                            
                        )
                    }
                
            </div>

    </div>
    

    );
    
}

export default Main;