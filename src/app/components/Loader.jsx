import React from 'react'

const Loader = ({visibility}) => {
  return (
    <div
          className={`fixed top-1/2 left-1/2 transition-all ease-in  duration-500 rounded-lg  bg-black w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-40 ${visibility}`}
        /> 
  )
}

export default Loader