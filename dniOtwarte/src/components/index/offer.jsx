import React from "react";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

const Offer =()=>{
    const kierunki =[
        {
            img:'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8&w=1000&q=80',
            title:'Technik Programista',
            desc:'Nauka programowania różnych języków odpowiednich dla aplikacji desktopowych i projektowania interfejsu użytkowanika',
            link: 'https://strona.zstiojar.edu.pl/technik-programista/'
        },
        {
            img:'https://img.redro.pl/obrazy/technology-robot-sci-fi-woman-cyborg-android-background-humanoid-artificial-intelligence-wallpaper-3d-render-400-167856899.jpg',
            title:'Technik Informatyk',
            desc:'Tworzy, przekształca i przekazuje dane za pomocą programów komputerowych.',
            link:'https://strona.zstiojar.edu.pl/technik-informatyk/'
        },
        {
            img:'https://eu.crucial.com/content/dam/crucial/articles/about-graphic-design/graphic-design-hardware-whats-right-for-you/desk-with-computer-for-graphic-design.jpg.transform/small-jpg/img.jpg',
            title:'Technik Grafiki i Poligrafii Cyfrowej',
            desc:'Obsługuje różnego rodzaju programy graficzne oraz typowe programy do składu komputerowego.',
            link:'https://strona.zstiojar.edu.pl/technik-grafiki-i-poligrafii-cyfrowej/'
        },
        {
            img:'https://www.magazyn-motoryzacyjny.pl/wp-content/uploads/2022/04/20220407183040_pexels-photo-4489749.jpeg-780x470.jpg',
            title:'Technik Mechanik',
            desc:'Wykonywanie prac projektowych, produkcyjnych oraz remontowo–instalacyjnych maszyn i urządzeń technicznych.',
            link:'https://strona.zstiojar.edu.pl/technik-mechanik/'
        },
        {
            img:'https://kkz.edu.pl/aktualnosci/wp-content/uploads/2019/02/cylinders-569151_1280.jpg',
            title:'Technik Pojazdów Samochodowych',
            desc:'Specjalistyczne wiadomości i umiejętności w zakresie budowy, obsługi i naprawy pojazdów samochodowych.',
            link:'https://strona.zstiojar.edu.pl/technik-pojazdow-samochodowych/'
        },
        {
            img:'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/5/61/zawod-Monter-elektronik-obrazek_duzy_107561.jpg',
            title:'Technik Elektronik',
            desc:'Zajmuje się montażem, instalacją, konserwacją i naprawą sprzętu komputerowego oraz innych urządzeń elektronicznych.',
            link:'https://strona.zstiojar.edu.pl/technik-elektronik/'
        },
        {
            img:'https://zawody.kwalifikacjezawodowe.info/img/exp_wo3/6/76/zawod-Technik-teleinformatyk-obrazek_duzy_107676.jpg',
            title:'Technik Teleinformatyk',
            desc:'Bezpieczeństwo w działaniu sieci komputerowych firm, instytucji rządowych, banków oraz wojska.',
            link:'https://strona.zstiojar.edu.pl/technik-teleinformatyk/'
        },
        {
            img:'https://emt-systems.pl/layout/xautomatyka-mechatronika-szkolenie-01.jpg.pagespeed.ic.lU-j_NEZP6.jpg',
            title:'Technik Automatyk',
            desc:'Dziedzina techniki zajmująca się zagadnieniami sterowania różnymi procesami zwykle odbywającymi się bez udziału człowieka.',
            link:'https://strona.zstiojar.edu.pl/technik-automatyk/'
        },
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.offers .offer', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2,
            scrollTrigger:{trigger:'.offers',
                            start:'top 80%',
                            toggleActions: "restart",
    }})
    },[])

    return(
        <div id="offer" className="offers bg-[#000002] sm:p-[100px] py-[50px]">
            <div className="w-[90%] mx-auto bg-[#030303] p-6 rounded-3xl">
                <div className=" w-[90%] mx-auto sm:w-[100%] grid md:grid-cols-2 xl:grid-cols-3 gap-[8px]">
                    <div className="offer items-center text-center my-auto">
                        <h2 className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#3f3f3f] to-gray-500">OFERTA SZKOŁY</h2>
                        <p className="text-[20px] text-justify w-full sm:w-[80%] mx-auto my-[20px] text-[#f3f3f3]">ZSTiO znajduje się w samym centrum Jarosławia, dzięki temu uczniowie dojeżdżający spoza miasta nie maja kłopotów z dotarciem do szkoły.</p>
                        <Link to="https://zstiojar.edu.pl/technikum-nr-2-im-stefana-banacha/"><button className=" border-[2px] border-gray-900 text-gray-900 px-[20px] py-[10px] text-[20px] rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">Dowiedz się więcej</button></Link>
                    </div>
                    {kierunki.map((kierunek, key)=>{
                        return(
                        //   <Link to={kierunek.link}>
                              <div className=" offer group relative overflow-hidden rounded-3xl">
                                    <div className=" group-hover:scale-125 transition-all duration-500">
                                        <div index={key}  style={{background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${kierunek.img})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize:'cover',
                                            backgroundPosition:'50%',
                                            aspectRatio:'16/9'}}>
                                            <div className="group-hover:bg-gradient-to-r from-black/90 to-gray-950/60 w-full h-full z-40 transition-all">
                                        <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[35%] transition-all duration-500 delay-100">
                                            <h2 className=" text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-[#585858]">{kierunek.title}</h2>
                                            <p className="text-white">{kierunek.desc}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        //   </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Offer;