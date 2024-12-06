import React from 'react'
import styles from "./Maxi.module.css"
import Image from 'next/image'

const MaxiSideBar = () => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.gen}>
      <Image src='/home.png'width={35} height={35} alt='image'/>
      <h1>Home</h1>
    </div>

   <div className={styles.home}>
      <Image src='/shorts.png'width={30} height={30}alt='image'/>
      <h1>Shorts</h1>
    </div>

    <div className={styles.homs}>
     <Image src='/playlist.png'width={35} height={35}alt='image'/>
     <h1>Subscription</h1>
    </div>

    <div className={styles.min}>
      <h1>You</h1>
      <Image src='/see all.png'width={1} height={1}alt='image'/>
    </div>
    <div className={styles.like}>
      <Image src='/history.png'width={1} height={1}alt='image'/>
      <h1>History</h1>
    </div>
    <div className={styles.like}>
      <Image src='/playlisty.png'width={1} height={1}alt='image'/>
      <h1>playlist</h1>
    </div>
    <div className={styles.like}>
      <Image src='/time.png'width={1} height={1}alt='image'/>
      <h1>Watch Later</h1>
    </div>
    <div className={styles.like}>
      <Image src='/like1.png'width={1} height={1}alt='image'/>
      <h1>Liked videos</h1>
    </div>
    <div className={styles.sub}>
      <h1>Subscriptions</h1>
    </div>
    </div>
  )
}

export default MaxiSideBar
