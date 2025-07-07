import './App.css'
import React, { useState } from "react";
import "./Bulb.css";


function App() {
  const [isOn, setIsOn] = useState(false);
  const [isPulled, setIsPulled] = useState(false);
  console.log("hello")

 
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
