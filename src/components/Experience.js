import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Experience () {

    const work = [
        {
            "company": "Adobe",
            "role": "Global Web Developer Intern",
            "length": "APR 2022 - OCT 2022",
            "desc": [
                "g"
            ]
        },
        {
            "company": "KPMG",
            "role": "Audit, Assurance & Risk Consulting Intern",
            "length": "DEC 2021 - FEB 2022",
            "desc": [
                "g"
            ]
        },
        {
            "company": "MathsReady",
            "role": "Developer",
            "length": "SEP 2020 - AUG 2021",
            "desc": [
                "g"
            ]
        },
    ]

    return (
        <div id="experience" className='text-white'>
            <div className='text-white lg:mt-24 flex flex-row items-center gap-4'>
                <p className='text-3xl lg:text-4xl'>/ experience</p>
                <div className='invisible lg:visible lg:border-t lg:border-gray-500 lg:w-60' />
            </div>
            <div className='pt-8'>
                <Tabs>
                    <TabList>
                        {work.map(item => {
                            return (
                                <Tab>
                                    <p>{item.company.toUpperCase()}</p>
                                </Tab>
                            )
                        })}
                    </TabList>
                    {work.map(item => {
                        return (
                            <TabPanel>
                                <div className='flex flex-col align-center pl-12 gap-y-2'>
                                    <p className='text-lg'>{item.role} @ <span className='text-emerald-500'>{item.company}</span></p>
                                    <p className='text-xs text-gray-500'>{item.length}</p>
                                </div>
                            </TabPanel>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
}