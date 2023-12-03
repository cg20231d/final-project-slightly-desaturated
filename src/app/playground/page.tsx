"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import Rain from "../components/Rain";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Classroom } from "../components/Classroom";

type cameraAngle = {
  x: number;
  y: number;
  z: number;
};
const Page = () => {
  const [rainIntensity, setRainIntensity] = useState(0.4);
  const [rainKey, setRainKey] = useState(0);
  const [isMouseClicked, setIsMouseClicked] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseClicked(true);
    };

    const handleMouseUp = () => {
      setIsMouseClicked(false);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleIntensityChange = (newIntensity: number) => {
    setRainIntensity(newIntensity);
    console.log(newIntensity);
    // Increment the key to trigger a re-mount of the Rain component
    setRainKey((prevKey) => prevKey + 1);
  };

  const CameraLookAt = ({ x, y, z }: cameraAngle) => {
    const { camera } = useThree();

    useEffect(() => {
      camera.lookAt(x, y, z);
    }, [camera, x, y, z]);

    return null;
  };
  
  return (
    <main className="h-screen w-screen">
      <button onClick={() => handleIntensityChange(Math.random())}>
        Change Rain Intensity
      </button>
      <Canvas>
        <ambientLight intensity={0.8} />
        <PerspectiveCamera
          makeDefault // Make this camera the default camera
          position={[-7, 3, -3.5]} // Set the initial position of the camera
          fov={60} // Set the field of view
          near={0.1} // Set near clipping plane
          far={100} // Set far clipping plane
        />
        <CameraLookAt x={25} y={4} z={4} />
        <Classroom />
        <Rain key={rainKey} position={[2, 0, -12]} intensity={rainIntensity} />
      </Canvas>
    </main>
  );
};

export default Page;
