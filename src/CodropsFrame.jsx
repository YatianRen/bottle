const CodropsFrame = () => {
  return (
    <div className="frame">
      <header className="frame__header">
        <div className="brand">
          <div className="brand__logo">🍷</div>
          <h2 className="brand__name">Vinterra</h2>
        </div>
        <nav className="frame__nav">
          <a href="#wines">Wines</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Discover the World's
            <span className="hero__title--accent">Finest Wines</span>
          </h1>
          <p className="hero__tagline">
            From prestigious vineyards to your table. Experience exceptional wines 
            crafted with passion and tradition, delivered to your doorstep.
          </p>
          <button className="hero__cta">
            Explore Our Collection
            <span className="hero__cta-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="wine__info">
        <p className="wine__current">Click to explore different wines</p>
      </div>
    </div>
  );
};

export default CodropsFrame;