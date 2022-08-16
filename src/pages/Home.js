import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/Navbar'
import Socials from '../components/Socials'
import About from '../components/About'
import Experience from '../components/Experience'
import ScrollDown from '../components/ScrollDown'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import '../App.css'

export default function Home () {
    return (
        <>
            <NavBar />
            <div className='px-20 lg:pl-72 lg:pr-72 body-font'>
                <Header />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <ScrollDown />
            </div>
            <Socials />
        </>
        
    )
}