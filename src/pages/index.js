import React, { useState } from 'react'
import SideBar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/AboutMe'
import { homeObjOne, homeObjTwo } from '../components/AboutMe/Data'

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
    </>
  )
}

export default Home