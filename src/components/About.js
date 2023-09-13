import React from 'react'
import '../App.css';
import steve from '../assets/steven-chye.jpeg'
import steve2 from '../assets/steven-chye-2.JPG'
import steve3 from '../assets/steven-chye-3.JPG'
import steve4 from '../assets/steven-chye-4.PNG'
import steve5 from '../assets/steven-chye-5.JPG'
import { BiRightArrow } from 'react-icons/bi'
import { IconContext } from "react-icons";
import { tech, tech_two } from '../config'

export default function About () {

    const images = [ steve, steve2, steve3, steve4, steve5 ]
    const randomValue = images[Math.floor(Math.random() * images.length)]

    return (
        <div id="about" className='body-font text-white'>
            <div className='text-white mt-16 lg:mt-80 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<about>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 md:w-72 md:visible md:border-t md:border-gray-500 md:w-72' />
            </div>
            <div className='flex flex-col-reverse md:flex-row lg:flex-row lg:justify-start gap-10'>
                <div className='pt-4 lg:pt-12 md:pt-12 flex flex-col gap-10'>
                    <p className='max-w-xl text-justify leading-loose'>
                        I've just graduated from a Bachelor of
                        <span className="text-emerald-300"> Computer Science </span>
                        and
                        <span className="text-emerald-300"> Finance </span> 
                        at UNSW! I have a strong passion for 
                        <span className="text-emerald-300"> fashion </span>  
                        and 
                        <span className="text-emerald-300"> coding </span>  
                        and have fell in love with
                        <span className="text-emerald-300"> frontend development! </span>
                    
                    I'm currently upskilling myself in a number of areas, exploring frontend frameworks and libraries!</p>
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
                <img src={randomValue} alt="steven" className='mt-8 md:pt-0 lg:pt-0 block w-80 h-80 object-cover rounded-md' />
                
            </div>
        </div>
    )
}