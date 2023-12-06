"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loading } from "../components/loading/Loading";
import YoungKorrigan from "../components/loading/YoungKorrigan";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Page = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas style={{ background: "#EEF5FF" }}>
        <ambientLight intensity={1} />
        <Loading />
      </Canvas>
    </div>
  );
};

export default Page;
