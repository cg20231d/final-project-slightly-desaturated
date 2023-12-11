import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function Timer() {
	const [time, setTime] = useState(1500); // 25 minutes in seconds
	const [isActive, setIsActive] = useState(false);
	const [isBreak, setIsBreak] = useState(false);
	const audioRef = useRef(); // Use useRef instead of createRef

	// Memoize the function with useCallback
	const playAudio = useCallback(() => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	}, [audioRef]);

	useEffect(() => {
		let interval;

		if (isActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(interval);

			if (isActive && time === 0) {
				// Check if isActive is true before updating state
				// Switch to break or work
				setIsBreak((prevIsBreak) => !prevIsBreak);
				playAudio();
				if (!isBreak) {
					setTime((prevTime) => 300);
				} else {
					setTime((prevTime) => 1500);

				}
				// Play the MP3 after the timer reaches zero
			}
		}

		return () => clearInterval(interval);
	}, [isActive, time, isBreak, playAudio]);

	const handleStart = () => {
		setIsActive(true);
	};

	const handlePause = () => {
		setIsActive(false);
	};

	const handleReset = () => {
		setTime(isBreak ? 300 : 1500);
		setIsActive(false);
	};

	const handleSkipToBreak = () => {
		setTime(300);
		setIsBreak(true);
		setIsActive(true);
	};

	const handleSkipToWork = () => {
		setTime(1500);
		setIsBreak(false);
		setIsActive(true);
	};

	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	};

	return (
		<motion.div
			drag
			dragConstraints={{
				right: 50,
			}}
			className="mx-auto w-64 bg-[#265073] text-white bg-opacity-75 px-28 py-5 flex flex-col justify-start items-center  rounded-lg shadow-md"
		>
			<div className="w-52 py-1 flex text-center mb-3  text-sm justify-evenly items-center font-normal">
				<button className="px-2  text-center   py-1 rounded-lg hover:bg-gray-600/60" onClick={handleReset}>
					Pomodoro
				</button>
				<button className="px-2  text-center  py-1 rounded-lg hover:bg-gray-600/60" onClick={isBreak ? handleSkipToWork : handleSkipToBreak}>
					{isBreak ? "Skip to Work" : "Skip to Break"}
				</button>
			</div>

			<div className="w-full flex items-center justify-center ">
				<p className="text-6xl font-bold">{formatTime(time)}</p>
			</div>

			<div className="flex w-full justify-center items-center">
				{!isActive && (
					<button onClick={handleStart} className="px-10 rounded-lg mb-2 mt-3 py-2 bg-white text-[#26507390] text-2xl font-bold">
						START
					</button>
				)}
				{isActive && (
					<button onClick={handlePause} className="px-10 rounded-lg mb-2 mt-3 py-2 bg-white text-[#26507390] text-2xl font-bold">
						PAUSE
					</button>
				)}
			</div>

			{/* <div className="flex space-x-4">
				<button
					className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
					onClick={handleStart}
					disabled={isActive}
				>
					Start
				</button>
				<button
					className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
					onClick={handlePause}
					disabled={!isActive}
				>
					Pause
				</button>
				<button className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded focus:outline-none" onClick={handleReset}>
					Reset
				</button>
				{!isBreak && (
					<button
						className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
						onClick={handleSkipToBreak}
					>
						Skip to Break
					</button>
				)}
				{isBreak && (
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none" onClick={handleSkipToWork}>
						Skip to Work
					</button>
				)}
			</div> */}
			<audio ref={audioRef} src="/gong.mp3" />
		</motion.div>
	);
}

export default Timer;
