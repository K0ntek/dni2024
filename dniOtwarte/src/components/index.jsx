import React from "react";
import About from "./index/about";
import Banner from "./index/banner";
import Offer from "./index/offer";

import gsap from "gsap";
import { useEffect } from "react";
import IndexNavigator from "./index/indexNavigator";

const Index =()=>{
    useEffect(()=>{
        gsap.fromTo('.bgW', {top:0, zIndex:60}, {top:'-100%', duration:1, delay:1})
        gsap.fromTo('.bgB', {top:'100%', zIndex:70}, {top:'-100%', duration:1.5, delay:.2})
        gsap.fromTo('.bgR', {top:'100%', zIndex:80}, {top:'-100%', duration:1.5, delay:.4})
    })
    return(
        <>
        <div className="bgs">
        <div className="bgW bg-gray-950 w-[100%] h-screen absolute left-0"></div>
        <div className="bgB bg-black w-[120%] h-screen absolute left-0"></div>
        <div className="bgR bg-[#966a43] w-[100%] h-screen absolute left-0"></div>
        </div>
            <IndexNavigator />
            <Banner />
            <About/>
            <div className="w-full h-[10px] bg-gradient-to-r from-fuchsia-700 to-red-700"></div>
            <Offer/>
        </>
    )
}

export default Index;