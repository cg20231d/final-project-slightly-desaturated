"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loading } from "./components/loading/Loading";

export default function Home() {
  return (
    <main className="h-screen w-screen relative">
      <div className="fixed flex justify-center items-center flex-col top-3/4 left-1/2  transform -translate-y-1/2  -translate-x-1/2   z-50">
        <h1 className="font-bold text-2xl my-3">
          Welcome to our Computer Graphics Final Project
        </h1>
        <Link href="/playground" className="p-4 bg-blue-300 rounded-md">
          Press Here to play
        </Link>
      </div>

      <div
        hidden
        className={`fixed flex justify-center items-center top-1/2 left-1/2 transition-all ease-in  duration-500 rounded-lg bg-[#EEF5FF] w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-0 `}
      >
        <Canvas>
          <ambientLight intensity={1} />
          <Loading />
        </Canvas>
      </div>
    </main>
  );
}
