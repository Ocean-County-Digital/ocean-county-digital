import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <nav className="sticky-navbar container">
        <a href="#" className="logo">
          <Image
            src="/assets/logo_placeholder.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="cta-btn">Get Started</button>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner">
        <Image
          src="/assets/hero-placeholder.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="hero-content">
          <h1>Welcome to Ocean County Digital</h1>
          <p>
            Your digital transformation partner. We build modern, scalable web
            solutions for your business.
          </p>
          <a href="#contact">Contact Us</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="about-title">About Us</div>
        <div className="about-cards container">
          <div className="about-card">
            <Image
              src="/assets/about1.jpg"
              alt="Expert Team"
              width={80}
              height={80}
            />
            <h3>Expert Team</h3>
            <p>
              Our team consists of experienced professionals dedicated to
              delivering top-notch solutions.
            </p>
            <button>Learn More</button>
          </div>
          <div className="about-card">
            <Image
              src="/assets/about2.jpg"
              alt="Modern Solutions"
              width={80}
              height={80}
            />
            <h3>Modern Solutions</h3>
            <p>
              We use the latest technologies to ensure your business stays ahead
              of the curve.
            </p>
            <button>Learn More</button>
          </div>
          <div className="about-card">
            <Image
              src="/assets/about3.jpg"
              alt="Customer Focus"
              width={80}
              height={80}
            />
            <h3>Customer Focus</h3>
            <p>
              Your satisfaction is our priority. We work closely with you to
              achieve your goals.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}
