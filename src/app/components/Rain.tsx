import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type RainProps = {
  position: [number, number, number];
  intensity: number;
};

type Raindrop = {
  position: { x: number; y: number; z: number };
  // Other properties if needed
};

const Rain = ({ position, intensity }: RainProps) => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    if (raindrops.length === 0) {
      const newRaindrops = [];
      for (let i = 0; i < 100; i++) {
        const raindrop = new THREE.Mesh(
          new THREE.BoxGeometry(0.05, intensity - 0.1, 0.05),
          new THREE.MeshBasicMaterial({ color: 0x00aaff })
        );
        raindrop.position.set(
          position[0] + Math.random() * 10 - 5,
          position[1] + Math.random() * 10,
          position[2] + Math.random() * 10 - 5
        );
        newRaindrops.push(raindrop);
      }
      setRaindrops(newRaindrops);
    }
  }, [position, intensity, raindrops.length]);

  useFrame(() => {
    // Update raindrops positions based on intensity
    setRaindrops((prevRaindrops) => {
      return prevRaindrops.map((raindrop) => {
        raindrop.position.y -= 0.1 + intensity * 0.4;
        if (raindrop.position.y < position[1]) {
          raindrop.position.set(
            position[0] + Math.random() * 30 - 20,
            position[1] + Math.random() * 10,
            position[2] + Math.random() * 10 - 5
          );
        }
        return raindrop;
      });
    });
  });

  return (
    <group>
      {raindrops.map((raindrop, index) => (
        <primitive key={index} object={raindrop} />
      ))}
    </group>
  );
};

export default Rain;
