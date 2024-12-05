import React, {useState} from 'react'
// import Image from 'next/image'
// import styles from './SideBar.module.css'
import MiniSideBar from './MiniSideBar'
import MaxiSideBar from './MaxiSideBar'
import {SideContext} from '@/contexts/SideContext'
import { useContext } from 'react'

const SideBar = () => {

  const {toggle, setToggle}= useContext(SideContext)

  // const handleChange = () =>{
  //   setToggle((prev) => !prev) 
  // }

  return (
   <div>
    {
       toggle ? <MaxiSideBar/> : <MiniSideBar/>
    }
    {/* <button onClick={handleChange}>Changes</button> */}
   </div>
  )
}

export default SideBar
