import React, { useState } from "react";
import "./bulb.css";

const SwitchBulb = () => {
  const [isOn, setIsOn] = useState(false);
  const [stretch, setStretch] = useState(0);
  const [startY, setStartY] = useState(null);
  const [swing, setSwing] = useState(false);

  const handleStart = (y) => {
    setStartY(y);
  };

  const handleMove = (y) => {
    if (startY !== null) {
      const diff = y - startY;
      const limited = Math.min(Math.max(diff, 0), 60);
      setStretch(limited);
    }
  };

  const handleEnd = () => {
    if (stretch > 30) {
      setIsOn((prev) => !prev);
    }
    setStartY(null);
    setStretch(0);

    // Trigger swing
    setSwing(true);
    setTimeout(() => setSwing(false), 600); // match animation duration
  };

  return (
    <div
      className={`scene ${isOn ? "light" : "dark"}`}
      onMouseMove={(e) => handleMove(e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
    >
      <div className="bulb-container">
        {/* Bulb SVG */}
        <svg width="100" height="150" viewBox="0 0 100 150">
          {/* Bulb Glass */}
          <circle
            cx="50"
            cy="50"
            r="30"
            fill={isOn ? "#ffff66" : "#555"}
            style={{
              filter: isOn ? "drop-shadow(0 0 20px #ffff66)" : "none",
              transition: "all 0.3s ease",
            }}
          />
          {/* Bulb Base */}
          <rect x="40" y="80" width="20" height="20" fill="black" />
        </svg>

        {/* Wire with swing animation */}
        <div
          className={`wire ${swing ? "swing" : ""}`}
          style={{ height: `${100 + stretch}px` }}
          onMouseDown={(e) => handleStart(e.clientY)}
          onTouchStart={(e) => handleStart(e.touches[0].clientY)}
        >
          <div className="knob" />
        </div>
      </div>
    </div>
  );
};

export default SwitchBulb;
