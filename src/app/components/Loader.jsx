"use client";
import React from 'react'
import { Canvas, useThree } from "@react-three/fiber";
import { Loading } from "../components/loading/Loading";
import { ClockLoader } from "react-spinners";

const Loader = ({visibility}) => {
  return (
    // <div hidden className={` fixed flex justify-center items-center top-1/2 left-1/2 transition-all ease-in  duration-500 rounded-lg bg-[#EEF5FF] w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-40 ${visibility}`}>
    //   <Canvas >
    //     <ambientLight intensity={1} />
    //     <Loading />
    //   </Canvas>
    // </div>
    <div className={`fixed flex justify-center items-center top-1/2 left-1/2 transition-all ease-in  duration-500 rounded-lg  bg-black w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-40 ${visibility}`}>

    <ClockLoader
      color="#6680fa"
      cssOverride={{}}
      loading
      size={187}
    />
        </div>
  )
}

export default Loader