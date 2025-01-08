import React from 'react'
import styles from './SideBar.module.css'
import Image from 'next/image'
const MiniSideBar = () => {
  return (

    <div className={styles.SideBar}>
  <div className={styles.items}>
      <div className={styles.hom}>
      <Image src='/home.png'width={35} height={35} alt='image'/>
      <h1>Home</h1>
    </div>

   <div className={styles.shrt}>
      <Image src='/shorts.png'width={30} height={30}alt='image'/>
      <h1>Shorts</h1>
    </div>

    <div className={styles.play}>
     <Image src='/playlist.png'width={35} height={35}alt='image'/>
     <h1>Subscription</h1>
    </div>

    <div className={styles.homes}>
      <Image src='/person-circle.png'width={50} height={50}alt='image'/>
      <h1>You</h1>
    </div>
    </div>
    </div>
  )
}

export default MiniSideBar
