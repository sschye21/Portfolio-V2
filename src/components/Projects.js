import React from 'react'
import website from '../assets/portfolio-website-v2.png'
import unit from '../assets/unit.png'
import cselectives from '../assets/cselectives.png'
import movieFinder from '../assets/movie-finder.png'

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

    return (
        <div id="projects" className='text-white'>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<projects>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60 md:visible md:border-t md:border-gray-500 md:w-60' />
            </div>
            <div className='min-h-min mt-16 px-12'>
                {/* change lg:grid-cols-3 when more projects are added */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-y-10 gap-x-40'>
                    {projects.map((item, key) => {
                        return (
                            <div class="overflow-hidden aspect-video cursor-pointer rounded-xl relative group border" key={key}>
                                <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                    <div class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                        <div class="font-bold">{item.name}</div>
                                    </div>
                                </div>
                                <img
                                    alt={"project-" + {key}}
                                    class="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                    src={item.img}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}