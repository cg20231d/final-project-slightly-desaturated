"use client";

import React, { useState, useEffect, useRef } from "react";

import Timer from "../components/Timer";
import Loader from "../components/Loader";
import EnvirontmentBar from "../components/EnvirontmentBar";
import TodoWrapper from "../components/todo/TodoWrapper";
import Lake from "../components/environment/Lake";
import Classroom from "../components/environment/Classroom";

const Page = () => {
  const [selectedEnv, setSelectedEnv] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnvChange = (envNumber: number) => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setSelectedEnv(envNumber);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  };

  return (
    <main className="h-screen w-screen relative">
      <div className="fixed top-0 right-0 transform  z-50">
        <Timer />
        <TodoWrapper />
        <EnvirontmentBar handleEnvChange={handleEnvChange} />
      </div>

      <div className="relative w-full h-full z-10">
        <Loader visibility={isLoading ? "opacity-100" : "opacity-0 h-1 w-1"} />

        {selectedEnv === 1 && <Lake />}
        {selectedEnv === 2 && <Classroom />}
      </div>
    </main>
  );
};

export default Page;
