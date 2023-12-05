import React, { useState, useEffect } from "react";

function Timer() {
	const [time, setTime] = useState(1500); // 25 minutes in seconds
	const [isActive, setIsActive] = useState(false);
	const [isBreak, setIsBreak] = useState(false);

	useEffect(() => {
		let interval;

		if (isActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(interval);

			if (time === 0) {
				// Switch to break or work
				setIsBreak((prevIsBreak) => !prevIsBreak);
				setIsActive(true);
				setTime(isBreak ? 1500 : 300);
			}

			setIsActive(false);
		}

		return () => clearInterval(interval);
	}, [isActive, time, isBreak]);

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
		<div className="mx-auto max-w-md bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
			<h1 className="text-4xl font-bold mb-4">{isBreak ? "Break" : "Pomodoro Timer"}</h1>
			<div className="flex items-center justify-center bg-white bg-opacity-90 rounded-md p-4 shadow-md mb-4">
				<p className="text-4xl font-bold">{formatTime(time)}</p>
			</div>
			<div className="flex space-x-4">
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
			</div>
		</div>
	);
}

export default Timer;
