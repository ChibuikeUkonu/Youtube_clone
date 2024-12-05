import React from 'react'
import Image from 'next/image'
import YoutubeImage from './YoutubeImage'
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';
import SideContext from '@/contexts/SideContext';
import { useContext } from 'react';


const Navbar = () => {

  const {toggle, setToggle} = useContext(SideContext)

  const handleChange = () =>{
    setToggle((prev) => !prev)
  }
  return (
    <div className='flex gap-10 mt-3' >

      <div className='flex items-center gap-3 ml-3'>
   <RxHamburgerMenu onClick={handleChange}/>
   <YoutubeImage/>
   </div>
<div className='flex'>
<SearchBar/>
<img src="./recorder.png" height={10} alt="" />
</div>

    </div>
  )
}

export default Navbar
