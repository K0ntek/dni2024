import React from "react";
import CountUp from "react-countup";
import { useEffect } from "react";
import {useInView} from 'react-intersection-observer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const About =()=>{
    const [ref, inView] = useInView({threshold:0.65});

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.about .element', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,
            scrollTrigger:{trigger:'.about',
                            start:'top 90%',
                            toggleActions: "restart",
                        }})
     },[])

     const countElements =[
        {
            startVariable: 0,
            endVariable: 8,
            description: "Kierunków Technikum",
        },
        {
            startVariable: 0,
            endVariable: 54,
            description: 'Miejsce w Polsce',
        },
        {
            startVariable: 0,
            endVariable: 7,
            description: 'Kierunków Szkoły Branżowej',
        }
     ]

    return(
        <>
         <div id="about"  className="bg-black p-[100px] text-[20px] overflow-hidden h-screen" ref={ref}>
            <h1 className=" text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-[#5f3317] mb-[50px] font-inter font-[300]">O SZKOLE</h1>

            <div className="bg-[#020202] w-fit p-10 rounded-3xl mx-auto">
            <div className="about sm:flex justify-center space-y-[30px] sm:space-y-0 sm:space-x-[150px]">
                    {countElements.map((countElement, i)=>{
                        return(
                            <>
                                <div key={i} className="group element hover:bg-gradient-to-r from-[#222222] to-[#0a0a0a] rounded-[30px] w-[180px]">
                                    <div className="text-center rounded-3xl border-[2px] group-hover:border-0 border-[#331b0c] h-[220px]">
                                        <div className=" text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[#5f3317] relative top-[10%]">
                                            {inView ? <CountUp start={0} end={countElement.endVariable} duration={2} delay={.3}/> : 0}
                                        </div>
                                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[#5f3317] text-[25px]  relative top-[10%]">
                                        <p>{countElement.description}</p></div>

                                    </div>
                                </div>
                                </>
                        )
                    })}
            </div>
            </div>
        </div>
        <div className="bg-black">
            <div className="h-[5px] w-1/2 bg-gradient-to-r from-[#1a120d] to-gray-950 rounded-full mx-auto"></div>
        </div>
        </>


    )
}

export default About;