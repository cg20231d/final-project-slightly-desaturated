"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Experience } from "../components/Experience";

const page = () => {
  return (
    <main className="h-screen w-screen">
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
};

export default page;
