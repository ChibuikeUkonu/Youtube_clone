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
        <div className='ham'>
      <RxHamburgerMenu onClick={handleChange}/>
        </div>
   <YoutubeImage/>
   </div>
<div className='image_page'>
<div>
<SearchBar/>
</div>
<div className='image_page1'>
<img src="./microphone.png" width={20} alt="" />
</div>
</div>
<div className='video'>
<img src="./VD.jpg" width={20} alt=""/>
</div>
<div className='note'>
<img src="./notification.png" width={20} alt="" />
</div>
</div>
    
  )
}

export default Navbar
