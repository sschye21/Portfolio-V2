import React from 'react'
import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedin, FaTiktok } from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Socials () {

    const socials = [
        {
            "social": <FiGithub />,
            "link": "https://github.com/sschye21"
        },
        {
            "social": <FiMail />,
            "link": "mailto:sschye@gmail.com"
        },
        {
            "social": <FaLinkedin />,
            "link": "https://www.linkedin.com/in/steven-chye/"
        },
        {
            "social": <FaTiktok />,
            "link": "https://www.tiktok.com/@stevechye"
        },
    ]

    return (
        <div 
            className='lg:flex lg:flex-col gap-6 z-10 lg:right-0 lg:bottom-0 lg:pr-10 lg:pb-10 
                md:flex md:flex-col md:gap-6 lg:fixed md:fixed z-10 md:right-0 md:bottom-0 md:pr-10 md:pb-10
                flex flex-row justify-center pb-10'
        >
            <IconContext.Provider value={{ className: "text-white"}}>
                {socials.map((item, key) => {
                    return (
                        <a href={item.link} target="_blank" rel="noreferrer" key={key}>
                            {item.social}
                        </a>
                    )
                })}
            </IconContext.Provider>
        </div>
    )
}