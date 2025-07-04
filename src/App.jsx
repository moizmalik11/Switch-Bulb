import './App.css'
import React, { useState } from "react";
import "./Bulb.css";


function App() {
  const [isOn, setIsOn] = useState(false);
  const [isPulled, setIsPulled] = useState(false);

  const handlePull = () => {
    setIsPulled(true);
    setIsOn((prev) => !prev);

    setTimeout(() => setIsPulled(false), 300);
  };

  return (
    <div className={`scene ${isOn ? "light" : "dark"}`}>
      <div className={`bulb ${isOn ? "on" : ""}`}></div>
      <div className={`wire ${isPulled ? "pulled" : ""}`} onClick={handlePull}>
        <div className="knob" />
      </div>
    </div>
  );
};

export default App
