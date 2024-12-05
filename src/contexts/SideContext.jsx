"use client"

import { createContext, useState } from "react";



export const SideContext = createContext(); // initializing a context called
//"                                                          SearchContext"
export const Sideprovider = ({children}) => {
    const [toggle, setToggle] = useState(false)
    
    return(
        <SideContext.Provider value={{toggle, setToggle}}>
            {children}
        </SideContext.Provider>
    )
}

export default SideContext
