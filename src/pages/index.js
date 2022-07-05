import React, { useState } from 'react'
import SideBar from '../components/sidebar'
import NavBar from '../components/navbar'

const Home = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }




  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
        <NavBar toggle={toggle}></NavBar>
    </>
  )
}

export default Home