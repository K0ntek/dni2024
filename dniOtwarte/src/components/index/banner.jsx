import React from "react";
import { TypeAnimation } from "react-type-animation";
import {GrFacebookOption, GrInstagram, GrYoutube} from 'react-icons/gr'
import {FaTiktok} from 'react-icons/fa'

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

import BannerAnimation from "./boxes";

const Banner =()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.banner .title, .banner .animation, .banner .text', {x:"-200px", opacity:0}, {x:0, opacity:1, duration:.7, stagger:.2, delay:2, ease:'easeInOut'});
        gsap.fromTo('.socials a', {x:"100px", opacity:0}, {x:0, opacity:1, duration:.5, stagger:.1, delay:3})
    },[])

    const offers=()=>{
        const offer = document.querySelector('.offers');
        offer.scrollIntoView({behavior: "smooth"});
    }

    return(
    <div id="home" className=' header grid 2xl:grid-cols-2 2xl:container mx-auto 2xl:flex-row items-center my-[30px]font-mono w-[100%] min-h-screen'>
        <div className=' banner w-[70%] m-auto lg:w-full text-center'>
        <h1 className='title text-[25px] sm:text-[50px] w-[80%] mx-auto xl:w-full text-center font-inter font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#313131] to-black'>Zespół Szkół Technicznych i Ogólnokształcacych</h1>
            <TypeAnimation
                sequence={[
                    'Dni otwarte 2024',
                    2000,
                    '',
                    100
                ]}
                repeat={Infinity}
                className='text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 text-center w-full animation font-extralight h-[200px] font-poppins'
            />

            <p className=' text-[25px]'><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 font-orbitron font-[100]">"Sapere Aude"</span>- Odważ się być mądrym
            </p>
           <div className="w-fit mx-auto group my-3">
                <h1 onClick={offers} className=" text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-pink-600 cursor-pointer p-[10px] hover:bg-gradient-to hover:from-fuchsia-700 hover:bg-[crimson] hover:tracking-[3px] transition-all duration-300">Oferta na rok <span className=" font-bold text-red-500">2024/2025</span></h1>
                {/* <div className="group-hover:w-1/3 h-1 rounded-full bg-[#750d22] w-0 mx-auto transition-all duration-150 mt-[-10px]"></div> */}
           </div>
           <Link to='/QUIZ'> <button className=' text-[30px] border-[2px] border-[crimson] text-[crimson] px-[45px] py-[15px] mt-[10px] rounded-full mb-[20px] hover:bg-[crimson] hover:text-white transition-all duration-300'>Przejdź do quizu</button></Link>
            
           <div className='socials flex text-[30px] my-[20px] m-auto justify-center'>
                <a href="https://www.facebook.com/ZSTiOBANACH/?locale=pl_PL"><GrFacebookOption className='hover:text-[crimson] transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.instagram.com/zstio.fm/"><GrInstagram className='hover:text-[crimson] transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.youtube.com/@zstio_fm"><GrYoutube className='hover:text-[crimson] transition-all duration-300 mx-[10px]'/></a>
                <a href="https://www.tiktok.com/@zstio.fm"><FaTiktok className='hover:text-[crimson] transition-all duration-300 mx-[10px]'/></a>
            </div>

            </div>

        <div>
            <BannerAnimation />
        </div>

        {/* <img src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBzZXR1cHxlbnwwfHwwfHw%3D&w=1000&q=80" className='bannerImg w-[90%] max-w-[600px] rounded-full mx-auto'/> */}
    </div>    
    )
}

export default Banner;