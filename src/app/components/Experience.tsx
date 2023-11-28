"use client";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Classroom } from "./Classroom";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <OrbitControls />
      <Classroom />
    </>
  );
};
