const heroImage = "/welcome-background.png";

export function Welcome() {
  return (
    <main className="netcom-page">
      <section className="netcom-hero">
        <div className="hero-visual">
          <img src={heroImage} alt="Assistance Netcom 24/7" className="hero-image" />

          <div className="orange-sphere sphere-outer" />
          <div className="orange-sphere sphere-inner" />
          <div className="orange-sphere sphere-glow" />
          <div className="orange-sphere sphere-particle particle-1" />
          <div className="orange-sphere sphere-particle particle-2" />
        </div>
      </section>
    </main>
  );
}