"use client";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { OrbitControls, PerspectiveCamera, SpotLight, useHelper } from "@react-three/drei";

import { Audio, DirectionalLight, DirectionalLightHelper, PointLight } from "three";
import Rain from "../Rain";
import { Kos } from "../Kos";

type cameraAngle = {
	x: number;
	y: number;
	z: number;
};

interface Data {
	alpha: number;
	beta: number;
	delta: number;
	theta: number;
	gamma: number;
	mellow: number;
	concentration: number;
}

export const Dorm = () => {
	console.log("Kos component rendered");
	const [rainSound, setRainSound] = useState("/lowRain.mp3");
	const [Focus, setFocus] = useState(0.5);
	const [rainKey, setRainKey] = useState(0);
	const [cameraLookAt, setCameraLookAt] = useState<cameraAngle>({
		x: 0,
		y: 0.75,
		z: 0,
	});

	const audioRef = useRef<HTMLAudioElement>(null);

	const handleIntensityChange = (newIntensity: number) => {
		setFocus(newIntensity);
		if (newIntensity > 0.5) {
			if (rainSound != "heavyRain.mp3") {
				setRainSound("heavyRain.mp3");
				audioRef.current!.src = rainSound;
				// audioRef.current!.loop = true; // Set loop to true
				audioRef.current!.play();
			}
		} else {
			if (rainSound != "lowRain.mp3") {
				setRainSound("lowRain.mp3");
				audioRef.current!.src = rainSound;
				// audioRef.current!.loop = true; // Set loop to true
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
		const fetchData = async () => {
			try {
				const response = await axios.get<Data>("http://localhost:8080/api/data");
				const concentration = response.data.beta + response.data.alpha - (response.data.theta + response.data.delta + 0.1);
				response.data.concentration = concentration;
				setFocus(concentration);
				handleIntensityChange(concentration);
				console.log(concentration);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		const fetchDataInterval = setInterval(fetchData, 1000);
		if (Focus <= 0.5) {
			if (Focus == 0.5) {
				audioRef.current!.src = rainSound;
				audioRef.current!.play();
			} else {
			}
		} else {
			if (Focus <= 0.5) {
				audioRef.current!.src = rainSound;
				audioRef.current!.play();
			} else {
			}
		}
		window.addEventListener("keydown", handleArrowKeyPress);
		return () => {
			clearInterval(fetchDataInterval);
			window.removeEventListener("keydown", handleArrowKeyPress);
		};
	}, [rainSound, Focus]);

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
		<>
			<label hidden>
				Focus:
				<input hidden type="range" min="0" max="1" step="0.01" value={Focus} onChange={(e) => handleIntensityChange(parseFloat(e.target.value))} />
				{Focus}
			</label>
			<audio hidden ref={audioRef} controls onLoad={audioRef.current?.play}>
				<source src={rainSound} type="audio/mp3" />
			</audio>
			<Canvas
				style={{
					background: `rgba(${Math.floor(135 * Focus)}, ${Math.floor(206 * Focus)}, ${Math.floor(250 * Focus)}, 1)`,
				}}
			>
				<directionalLight ref={directionalLightRef} position={[0, 20, 20]} intensity={Focus + 0.1} color={"white"} castShadow />
				<pointLight ref={pointLightRef} position={[9.7, 5, -14]} intensity={150} distance={100} decay={2} color={"red"} />
				<pointLight ref={pointLightRef} position={[9.7, 5, -14]} intensity={30} distance={100} decay={2} color={"white"} />
				<pointLight ref={pointLightRef} position={[9.7, 4, -14]} intensity={100} distance={100} decay={2} color={"blue"} />
				<pointLight ref={pointLightRef} position={[0, 4.5, 0]} intensity={20 * Focus} color={"white"} castShadow />
				<ambientLight intensity={Focus + 0.15} />
				<PerspectiveCamera makeDefault position={[2, 0.75, 5]} fov={65} near={0.1} far={100} />
				<CameraLookAt {...cameraLookAt} />
				<OrbitControls />
				<Kos />

				<Rain key={rainKey} position={[0, 0, 0]} intensity={1 - Focus} />
			</Canvas>
		</>
	);
};

export default Dorm;
