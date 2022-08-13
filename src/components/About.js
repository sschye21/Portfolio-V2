import React from 'react'
import '../App.css';
import steve from '../assets/steven-chye.JPG'
import { BiRightArrow } from 'react-icons/bi'
import { IconContext } from "react-icons";

export default function About () {

    const tech = [
        "React.js",
        "Python",
        "JavaScript ES6+",
    ]

    const tech_two = [
        "SQL",
        "HTML & CSS",
        "Node.js"
    ]

    return (
        <div id="about" className='body-font text-white'>
            <div className='text-white mt-20 lg:mt-80 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>/ about</p>
                <div className='lg:border-t lg:border-gray-500 lg:w-72' />
            </div>
            <div className='flex lg:flex-row lg:justify-between flex-col gap-10'>
                <div className='pt-12 flex flex-col gap-10'>
                    <p className='max-w-xl text-justify leading-loose'>
                        I am currently a 4th year 
                        <span className="text-emerald-300"> Computer Science </span> 
                        student at UNSW. I am currently interning at 
                        <span className="text-emerald-300"> Adobe Australia </span>
                        as a 
                        <span className="text-emerald-300"> Global Web Developer </span>
                        for the <b>APAC Region</b>. I'm curious yet confident, and perpetually 
                        work on constantly improving and upskilling myself one step at a time.
                        
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <div className='flex flex-row justify-start lg:gap-20'>
                        <ul>
                            {tech.map(item => {
                                return (
                                    <li className='flex flex-row items-center gap-2 pb-2'>
                                        <IconContext.Provider value={{ className: "text-emerald-300"}}>
                                            <BiRightArrow />
                                        </IconContext.Provider>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            {tech_two.map(item => {
                                return (
                                    <li className='flex flex-row items-center gap-2 pb-2'>
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
                <img src={steve} alt="steven" className='invisible lg:visible md:visible lg:w-1/2 rounded-md' />
            </div>
        </div>
    )
}