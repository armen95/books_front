import React from "react";
import "./switch.scss";
export default function Switch({ darkMode, setDarkMode }) {
  return (
    <div className="switch_container">
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: darkMode ? "black" : "#F9F9F9" }}
        onClick={() => setDarkMode(!darkMode)}
      >
        <span
          className={`react-switch-button`}
          style={{ background: darkMode ? "white" : "#C3C3C3" }}
        />
      </label>
    </div>
  );
}
