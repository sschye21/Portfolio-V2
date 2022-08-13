import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import Socials from '../components/Socials'
import About from '../components/About'
import Experience from '../components/Experience'
import '../App.css'

export default function Home () {
    return (
        <>
            <NavBar />
            <div className='px-20 lg:pl-72 lg:pr-72 body-font'>
                <Header />
                <About />
                <Experience />
            </div>
            <Socials />
        </>
        
    )
}