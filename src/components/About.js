import React from 'react'
import '../App.css';
import steve from '../assets/steven-chye.jpeg'
import { BiRightArrow } from 'react-icons/bi'
import { IconContext } from "react-icons";
import { tech, tech_two } from '../config'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About () {

    AOS.init({
        offset: 200,
        duration: 350,
        easing: 'ease-in-out',
        delay: 200,
        mirror: true,
        once: "true", 
        disable: window.innerWidth < 768
    });

    return (
        <div id="about" className='body-font text-white' data-aos="fade-up">
            <div className='text-white mt-16 lg:mt-80 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<about>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 md:w-72 md:visible md:border-t md:border-gray-500 md:w-72' />
            </div>
            <div className='flex flex-col-reverse md:flex-row lg:flex-row lg:justify-start gap-10'>
                <div className='pt-4 lg:pt-12 md:pt-12 flex flex-col gap-10'>
                    <p className='max-w-xl text-justify leading-loose'>
                        I am currently a 4th year 
                        <span className="text-emerald-300"> Computer Science </span>
                        and
                        <span className="text-emerald-300"> Finance </span> 
                        student at UNSW. I am currently interning at 
                        <span className="text-emerald-300"> MuleSoft </span>
                        as a 
                        <span className="text-emerald-300"> Professional Services Consultant </span>.
                        I'm curious, confident, and perpetually 
                        work on improving and upskilling myself one step at a time.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <div className='flex flex-row justify-start gap-12'>
                        <ul>
                            {tech.map((item, key) => {
                                return (
                                    <li className='flex flex-row items-center gap-2 pb-2' key={key}>
                                        <IconContext.Provider value={{ className: "text-emerald-300"}}>
                                            <BiRightArrow />
                                        </IconContext.Provider>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            {tech_two.map((item, key) => {
                                return (
                                    <li className='flex flex-row items-center gap-2 pb-2' key={key}>
                                        <IconContext.Provider value={{ className: "text-emerald-300"}}>
                                            <BiRightArrow />
                                        </IconContext.Provider>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                </div>
                <img src={steve} alt="steven" className='mt-8 md:pt-0 lg:pt-0 block w-80 h-80 object-cover rounded-md' />
            </div>
        </div>
    )
}