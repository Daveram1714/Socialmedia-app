import React, { useEffect, useState } from 'react'

const useWindowsize = () => {

const[windowSize,setWindowSize] = useState({
    widht :undefined,
    height :undefined
});

useEffect(() =>{
    const handelResize =() =>{
        setWindowSize({
            widht: window.innerWidth,
            height:window.innerHeight
        })
    }
    handelResize()
    window.addEventListener("resize" ,handelResize)
    return () =>window.removeEventListener("resize",handelResize)
},[])

return  windowSize
}

export default useWindowsize