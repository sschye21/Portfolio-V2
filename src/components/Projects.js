import React from 'react'
import website from '../assets/portfolio-website-v2.png'
import unit from '../assets/unit.png'
import cselectives from '../assets/cselectives.png'
import movieFinder from '../assets/movie-finder.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects () {

    const projects = [
        {
            "name": "Portfolio Website v2",
            "link":"https://github.com/sschye21/steve",
            "img": website
        },
        {
            "name": "UNIT Website",
            "link": "http://unit.org.au/",
            "img": unit
        },
        {
            "name": "cselectives Website",
            "link": "https://cselectives.csesoc.app/",
            "img": cselectives
        },
        {
            "name": "Movie Finder",
            "link": "https://github.com/sschye21/Movie-Finder",
            "img": movieFinder
        }
    ]

    AOS.init({
        offset: 100,
        duration: 300,
        easing: 'ease-in-out',
        delay: 200,
        mirror: true,
        once: "true", 
        disable: window.innerWidth < 768
    });

    return (
        <div id="projects" className='text-white' data-aos="fade-up">
            <div className='flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<projects>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60 md:visible md:border-t md:border-gray-500 md:w-60' />
            </div>
            <div className='min-h-min mt-16 px-12'>
                {/* change lg:grid-cols-3 when more projects are added */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-y-10 gap-x-40'>
                    {projects.map((item, key) => {
                        return (
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group border" key={key}>
                                    <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                        <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                    <img
                                        alt={"project-" + {key}}
                                        className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                        src={item.img}
                                    />
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}