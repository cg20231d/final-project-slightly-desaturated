"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import Rain from "../components/Rain";
import {
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { Kelas } from "../components/Kelas";
import { DirectionalLight, DirectionalLightHelper, PointLight } from "three";

type cameraAngle = {
  x: number;
  y: number;
  z: number;
};

const Page = () => {
  const [rainIntensity, setRainIntensity] = useState(0.4);
  const [rainKey, setRainKey] = useState(0);
  const [cameraLookAt, setCameraLookAt] = useState<cameraAngle>({
    x: 20,
    y: 4,
    z: -7,
  });

  const handleIntensityChange = (newIntensity: number) => {
    setRainIntensity(newIntensity);
    console.log(newIntensity);
    // Increment the key to trigger a re-mount of the Rain component
    setRainKey((prevKey) => prevKey + 1);
  };

  const handleArrowKeyPress = (event: KeyboardEvent) => {
    // Update the camera lookAt based on arrow key presses
    switch (event.key) {
      case "w":
        setCameraLookAt((prev) => ({ ...prev, y: prev.y + 1 }));
        break;
      case "s":
        setCameraLookAt((prev) => ({ ...prev, y: prev.y - 1 }));
        break;
      case "d":
        setCameraLookAt((prev) => ({ ...prev, x: prev.x + 1 }));
        break;
      case "a":
        setCameraLookAt((prev) => ({ ...prev, x: prev.x - 1 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeyPress);

    return () => {
      window.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, []);

  const CameraLookAt = ({ x, y, z }: cameraAngle) => {
    const { camera } = useThree();
    useEffect(() => {
      camera.lookAt(x, y, z);
    }, [camera, x, y, z]);
    return null;
  };

  const directionalLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  return (
    <main className="h-screen w-screen">
      <button onClick={() => handleIntensityChange(Math.random())}>
        Change Rain Intensity
      </button>
      <Canvas>
        <directionalLight
          ref={directionalLightRef}
          position={[0, 20, -30]}
          intensity={1}
          color={"white"}
          castShadow
        />
        {/* <pointLight
          ref={pointLightRef}
          position={[0, 20, -30]}
          intensity={200}
          color={"white"}
          castShadow
        /> */}
        <pointLight
          ref={pointLightRef}
          position={[0, 5, 0]}
          intensity={20}
          color={"white"}
          castShadow
        />
        <ambientLight intensity={0.2} />
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault // Make this camera the default camera
          position={[-7, 3.5, 2]} // Set the initial position of the camera
          fov={60} // Set the field of view
          near={0.1} // Set near clipping plane
          far={100} // Set far clipping plane
        />
        <CameraLookAt {...cameraLookAt} />
        <Kelas />
        <Rain key={rainKey} position={[2, 0, -12]} intensity={rainIntensity} />
      </Canvas>
    </main>
  );
};

export default Page;
