import React from "react";
import divider from "./assets/divider.png";

const CodropsFrame = () => {
  return (
    <div className="frame">
      <nav className="frame__nav">
        <a href="https://www.rena-design-la.com/" className="active">home</a>
        <a href="#wine">wine</a>
        <a href="#vibe">vibe</a>
        <a href="#squad">squad</a>
      </nav>
      <div className="ferra-logo-wrapper">
        <h1 className="ferra-logo">Ferra</h1>
      </div>
      {/* The 3D bottle is rendered by <Scene /> in App.jsx, so nothing here */}
      <div className="ferra-footer">
        <div className="ferra-divider">
          <img src={divider} alt="divider" className="divider-img" />
        </div>
        <div className="ferra-tagline">Unbottle your chaos. Pour your poetry.<br/>Ferra's got you.</div>
      </div>
    </div>
  );
};

export default CodropsFrame;