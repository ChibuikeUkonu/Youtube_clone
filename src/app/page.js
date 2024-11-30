"use client"

import React, {useState} from "react";
import Navbar from "@/components/Navbar_component/Navbar";
import Feeds from "@/components/Navbar_component/MainContent/Feeds";
import SideBar from "@/components/SideContents/SideBar";
export default function Home() {

 const [count, setCount] =useState("data")

  return (
  <div className="page_container">
  <Navbar/>

  <div className="con">
    <SideBar/>
    <Feeds cou={count}/>
  </div>


  </div>

  );
}
