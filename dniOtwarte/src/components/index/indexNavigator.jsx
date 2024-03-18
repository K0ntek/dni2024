import React from "react";
import { Link } from "react-scroll";

import { IoPersonSharp, IoHome  } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { VscGraph } from "react-icons/vsc";

const IndexNavigator =()=>{

 const navElements = [
        {
            icon: <IoHome />,
            link: 'home'
        },
        {
            icon: <IoPersonSharp />,
            link: 'about'
        },
        {
            icon: <VscGraph />,
            link: 'offer'
        },
        // {
        //     icon: <AiOutlineFundProjectionScreen  />,
        //     link: 'projects'
        // },
    ]

    return(
    <ul className="flex fixed bottom-7 left-[50%] translate-x-[-50%] bg-black/70 rounded-full z-[99] py-2 px-8 h-[65px]">
        {navElements.map((element, i)=>{
            return(
                <li className="navElement text-white cursor-pointer bg-black/20 mx-3 md:mx-5 rounded-full text-[25px] md:text-[30px] group hover:text-[#794e29] hover:bg-black/60 transition-all duration-200">
                    <Link key={i} to={element.link} spy={true} smooth={true} className=" font-gruppo font-bold">
                        <p className="p-[10px]">{element.icon}</p>
                    </Link>
                </li>
            )
        })}
    </ul>
    )
}

export default IndexNavigator