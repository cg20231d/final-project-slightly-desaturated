// EnvirontmentBar.tsx
import React from "react";

interface EnvirontmentBarProps {
  handleEnvChange: (envNumber: number) => void;
}

const EnvirontmentBar: React.FC<EnvirontmentBarProps> = ({
  handleEnvChange,
}) => {
  return (
    <>
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
    </>
  );
};

export default EnvirontmentBar;
