"use client";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Kelas } from "./Kelas";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0} />
      <OrbitControls />
      <Kelas />
    </>
  );
};
