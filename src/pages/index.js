import React, { useState } from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/AboutMe'
import { homeObjOne, homeObjTwo } from '../components/AboutMe/Data'
import Tools from '../components/Tools'
import Footer from '../components/Footer'
import ProjectSection from '../components/ProjectSection'

const Home = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }




  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
        <NavBar toggle={toggle}></NavBar>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Tools></Tools> 
        <ProjectSection></ProjectSection>
        <Footer></Footer>
    </>
  )
}

export default Home