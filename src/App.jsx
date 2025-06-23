import Scene from "./Scene";
import divider from "./assets/divider.png";
import ferraLogo from "./assets/logo 2.png";

export default function App() {
  return (
    <>
      {/* Navigation bar at the top, over the canvas */}
      <div className="nav-over-canvas">
        <nav className="frame__nav">
          <a href="https://www.rena-design-la.com/" className="active">home</a>
          <a href="#wine">wine</a>
          <a href="#vibe">vibe</a>
          <a href="#squad">squad</a>
        </nav>
      </div>
      {/* Logo under the bottle */}
      <div className="logo-under-canvas">
        {/* Image logo */}
        <img src={ferraLogo} alt="Ferra" className="ferra-logo-image" />
      </div>
      {/* 3D bottle and animation */}
      <Scene />
      {/* Footer (divider, tagline) over the bottle */}
      <div className="footer-over-canvas">
        <div className="ferra-divider">
          <img src={divider} alt="divider" className="divider-img" />
        </div>
        <div className="ferra-tagline">
          Unbottle your chaos. Pour your poetry.<br/>Ferra's got you.
        </div>
      </div>
    </>
  );
}
