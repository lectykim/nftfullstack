import React from "react";
import {Link} from 'react-router-dom';
import {FaTwitterSquare,FaFacebookSquare,FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

const Footer = ()=>{
    return(
        <div className="bg-[#242424] pl-4 pr-2 flex flex-col justify-center items-center">
            <section className="display flex flex-col justify-center items-center text-center mb-[24px] bg-white">
                <p>
                Join the blockchain newsletter to providing your value
                </p>
                <p>
                    You can unsubcribe at any time.
                </p>
                <div>
                    <form>
                        <input className="pl-4 pt-10 rounded-full mr-5 mb-8 text-lg" type="email" name="email" placeholder="Your Email"/>
                        <button>subscribe</button>
                    </form>
                </div>
            </section>
            <div className="w-full max-w-full flex justify-center">
                <div className="flex  flex-wrap">
                    <div className="flex flex-col items-start m-8 text-left w-[160px] ">
                        <h2 className="mb-8">About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="flex flex-col items-start m-8 text-left w-[160px] ">
                        <h2 className="mb-8">Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                    <div className="flex flex-col items-start m-8 text-left w-[160px] ">
                        <h2 className="mb-8">Futures</h2>
                        <Link to="/">Loadmap</Link>
                        <Link to="/">How to Run</Link>
                        <Link to="/">Github</Link>
                    </div>
                    <div className="flex flex-col items-start m-8 text-left w-[160px] ">
                        <h2 className="mb-8">Social media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Facebook</Link>
                    </div>
                </div>
            </div>
            <section className="w-full">
                <div className="flex justify-center flex-col items-center w-9/10 mt-[40px]">
                    <div >
                        <Link className="text-xl" to="/">MFP</Link>
                    </div>
                    <small className="mt-10 text-lg">MFP @2020</small>
                    <div className="flex justify-between items-center w-2/3">
                        <Link  to="/"><FaInstagramSquare/></Link>
                        <Link  to="/"><FaYoutubeSquare/></Link>
                        <Link  to="/"><FaTwitterSquare/></Link>
                        <Link  to="/"><FaFacebookSquare/></Link>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Footer;