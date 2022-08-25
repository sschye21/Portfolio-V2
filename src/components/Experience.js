import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { work } from '../config'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Experience () {

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
        <div id="experience" className='text-white mb-[430px] lg:mb-0 md:mb-56' data-aos="fade-up">
            <div className='text-white mt-12 lg:mt-24 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>{"<experience>"}</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60 md:visible md:border-t md:border-gray-500 md:w-60' />
            </div>
            <div className='pt-8 h-80'>
                <Tabs className="flex flex-col lg:flex lg:flex-row list-none">
                    <TabList className="flex flex-col m-0 md:pb-8 p-0 w-44 cursor-pointer">
                        {work.map((item, key) => {
                            return (
                                <Tab key={key}>
                                    <p>{ item.company.toUpperCase() }</p>
                                </Tab>
                            )
                        })}
                    </TabList>
                    {work.map((item, key) => {
                        return (
                            <TabPanel key={key} className="pt-4 lg:pt-0 md:pt-0">
                                <div className='flex flex-col align-start pl-2 lg:pl-12 gap-y-2'>
                                    <p className='text-xl'>{item.role} @ <span className='text-emerald-500'>{item.company}</span></p>
                                    <p className='text-m text-gray-500'>{item.length}</p>
                                    <ul className='list-outside text-justify marker:text-emerald-500 max-w-3xl text-sm'>
                                        {item.desc.map((desc, i) => {
                                            return (
                                                <li className='list-disc mb-3' key={i}>
                                                    {desc}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}