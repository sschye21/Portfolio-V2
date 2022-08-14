import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { work } from '../config'

export default function Experience () {
    return (
        <div id="experience" className='text-white'>
            <div className='text-white mt-12 lg:mt-24 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>/ experience</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60 md:visible md:border-t md:border-gray-500 md:w-60' />
            </div>
            <div className='pt-8'>
                <Tabs className="flex flex-col lg:flex lg:flex-row list-none cursor-pointer">
                    <TabList className="flex flex-col m-0 p-0 w-44">
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
                                    <p className='text-lg'>{item.role} @ <span className='text-emerald-500'>{item.company}</span></p>
                                    <p className='text-xs text-gray-500'>{item.length}</p>
                                    <ul className='list-outside text-justify marker:text-emerald-500 max-w-3xl'>
                                        {item.desc.map((desc, i) => {
                                            return (
                                                <li className='pb-3 list-disc' key={i}>
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