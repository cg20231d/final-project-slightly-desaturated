"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import Rain from "../components/Rain";
import Timer from "../components/Timer";
import TodoWrapper from "../components/todo/TodoWrapper";
import { motion } from "framer-motion";

import {
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { Kelas } from "../components/Kelas";
import { Danau } from "../components/Danau";

import {
  Audio,
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
} from "three";

type cameraAngle = {
  x: number;
  y: number;
  z: number;
};

const Page = () => {
  const [rainSound, setRainSound] = useState("/lowRain.mp3");
  const [Focus, setFocus] = useState(0.5);
  const [rainKey, setRainKey] = useState(0);
  const [cameraLookAt, setCameraLookAt] = useState<cameraAngle>({
    x: 20,
    y: 0,
    z: -7,
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const handleIntensityChange = (newIntensity: number) => {
    setFocus(newIntensity);
    if (newIntensity > 0.5) {
      if (rainSound != "heavyRain.mp3") {
        setRainSound("heavyRain.mp3");
        audioRef.current!.src = rainSound;
        audioRef.current!.play();
      }
    } else {
      if (rainSound != "lowRain.mp3") {
        setRainSound("lowRain.mp3");
        audioRef.current!.src = rainSound;
        audioRef.current!.play();
      }
    }
    console.log(newIntensity);
    console.log(rainSound);
    setRainKey((prevKey) => prevKey + 1);
  };

  const handleArrowKeyPress = (event: KeyboardEvent) => {
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
    audioRef.current!.src = rainSound;
    audioRef.current!.play();
    window.addEventListener("keydown", handleArrowKeyPress);
    return () => {
      window.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, [rainSound]);

  const CameraLookAt = ({ x, y, z }: cameraAngle) => {
    const { camera } = useThree();
    useEffect(() => {
      camera.lookAt(x, y, z);
    }, [camera, x, y, z]);
    return null;
  };

  const directionalLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);

  const [selectedEnv, setSelectedEnv] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnvChange = (envNumber: number) => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setSelectedEnv(envNumber);
      setIsLoading(false);
    }, 3000); // Adjust the time based on your actual loading time

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  };

  return (
    <main className="h-screen w-screen relative">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <Timer />
        <TodoWrapper />
        <button
          className="p-5 bg-gray-200 mx-5"
          onClick={() => handleEnvChange(1)}
        >
          1
        </button>
        <button
          className="p-5 bg-gray-200 mx-5"
          onClick={() => handleEnvChange(2)}
        >
          2
        </button>
      </div>

      <div className="relative w-full h-full z-10">
        <div
          className={`fixed top-1/2 left-1/2 transition-all ease-in  duration-500  bg-black w-screen h-screen transform -translate-x-1/2 -translate-y-1/2 z-40 ${
            isLoading ? "opacity-100" : "opacity-0 h-1 w-1"
          }`}
        ></div>

        <label>
          Focus:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={Focus}
            onChange={(e) => handleIntensityChange(parseFloat(e.target.value))}
          />
          {Focus}
        </label>
        <audio ref={audioRef} controls onLoad={audioRef.current?.play}>
          <source src={rainSound} type="audio/mp3" />
        </audio>
        <Canvas>
          <directionalLight
            ref={directionalLightRef}
            position={[0, 20, -30]}
            intensity={Focus + 0.1}
            color={"white"}
            castShadow
          />
          <pointLight
            ref={pointLightRef}
            position={[9.7, 5, -14]}
            intensity={150}
            distance={100}
            decay={2}
            color={"red"}
          />
          <pointLight
            ref={pointLightRef}
            position={[9.7, 5, -14]}
            intensity={30}
            distance={100}
            decay={2}
            color={"white"}
          />
          <pointLight
            ref={pointLightRef}
            position={[9.7, 4, -14]}
            intensity={100}
            distance={100}
            decay={2}
            color={"blue"}
          />
          <pointLight
            ref={pointLightRef}
            position={[0, 4.5, 0]}
            intensity={20 * Focus}
            color={"white"}
            castShadow
          />
          <ambientLight intensity={Focus + 0.15} />
          <PerspectiveCamera
            makeDefault
            position={[-7, 4, 2]}
            fov={65}
            near={0.1}
            far={100}
          />
          <CameraLookAt {...cameraLookAt} />
          {/* <OrbitControls /> */}
          {selectedEnv === 1 && <Kelas />}
          {selectedEnv === 2 && <Danau />}

          <Rain key={rainKey} position={[2, 0, -12]} intensity={1 - Focus} />
        </Canvas>
      </div>
    </main>
  );
};

export default Page;
