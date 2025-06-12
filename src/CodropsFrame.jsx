const CodropsFrame = () => {
  return (
    <div className="frame">
      <header className="frame__header">
        <div className="brand">
          <div className="brand__logo">🍷</div>
          <h2 className="brand__name">FERRA</h2>
        </div>
        <nav className="frame__nav">
          <a href="#wines">Wines</a>
          <a href="#vibe">Vibe</a>
          <a href="#squad">Squad</a>
        </nav>
      </header>
      
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title--accent">Unbottle</span> your chaos.
            <span className="hero__title--accent">Pour</span> your poetry.
            <span className="hero__title--main">Ferra's got you.</span>
          </h1>
          <p className="hero__tagline">
            Life's messy. Wine makes it poetry. We're here for the real moments, 
            the late-night conversations, and the stories that matter.
          </p>
          <button className="hero__cta">
            Find Your Vibe
            <span className="hero__cta-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="wine__info">
        <p className="wine__current">Click to switch your mood</p>
      </div>
    </div>
  );
};

export default CodropsFrame;