import React from 'react'
import Typist from 'react-typist'
import "react-typist/dist/Typist.css";
import { AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons";
import FadeIn from '../components/FadeIn'
import '../App.css';

export default function Header () {
    return (
        <div className='flex flex-col text-white pt-20 lg:pt-56 gap-5 body-font' id="home">
            <Typist avgTypingDelay={120} className="text-3xl lg:text-6xl">
                <span>
                    {"hi, i'm "}
                    <span className="text-emerald-300">
                        {"steve!"}
                    </span>
                </span>
            </Typist>
            <FadeIn>
                <div className="max-w-xl text-justify text-gray-400 lg:text-xl text-lg">
                    I'm an ambitious tech enthusiast and a keen software developer who loves building. 
                    I'm currently working as a Global Web Developer Intern at Adobe Australia for the APAC region. 
                </div>
                <button src="mailto:sschye@gmail.com" className='mt-8 flex flex-row gap-2 items-center border p-3 rounded-md border-emerald-300 text-emerald-300'>
                    <IconContext.Provider value={{ className: "text-emerald-300"}}>
                        <AiOutlineMail />
                    </IconContext.Provider>
                    say hi!
                </button>
            </FadeIn>
        </div>
    )
}