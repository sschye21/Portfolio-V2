import React from 'react'
import navLogo from '../assets/SC.png'
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons";

export default function Contact () {
    return (
        <div id="contact" className='mt-24 body-font text-white'>
            <div className='text-white  flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<contact>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60 md:visible md:border-t md:border-gray-500 md:w-60' />
            </div>
            <div className="flex flex-col items-center pt-12 text-center pb-24" id="contact">
                <img className="w-28 h-28 mb-4" src={navLogo} alt="footer-logo"/>
                <h2 className='text-5xl mb-8 font-black'>Get In Touch</h2>
                <a href="mailto:sschye@gmail.com" className='w-28 flex flex-row justify-center gap-2 items-center border p-3 rounded-md border-emerald-300 text-emerald-300'>
                <IconContext.Provider value={{ className: "text-emerald-300"}}>
                    <AiOutlineMail />
                </IconContext.Provider>
                say hi!
                </a>
            </div>
            <p className='text-center text-xs text-gray-400 pb-4 hidden md:block lg:block'>Bulit by Steven Chye ©</p>
        </div>
    )
}