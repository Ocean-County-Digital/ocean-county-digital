import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <nav className="sticky-navbar">
        <div className="container">
          <a href="#" className="logo">
            <Image
              src="/assets/logo_placeholder.svg"
              alt="Logo"
              width={194}
              height={46}
            />
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="cta-btn-primary">Get Started</button>
        </div>
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
          <a className="cta-btn-primary" href="#contact">
            Contact Us
          </a>
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
            <a href="#" className="cta-btn-primary">
              Learn More
            </a>
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
            <a href="#" className="cta-btn-primary">
              Learn More
            </a>
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
            <a href="#" className="cta-btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <Image
                src="/assets/team1.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
              />
              <h3>John Smith</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team2.jpg"
                alt="Team Member 2"
                width={200}
                height={200}
              />
              <h3>Sarah Johnson</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team3.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
              />
              <h3>Mike Davis</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team4.jpg"
                alt="Team Member 4"
                width={200}
                height={200}
              />
              <h3>Emily Wilson</h3>
              <p>Project Manager</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team5.jpg"
                alt="Team Member 5"
                width={200}
                height={200}
              />
              <h3>David Brown</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team6.jpg"
                alt="Team Member 6"
                width={200}
                height={200}
              />
              <h3>Lisa Martinez</h3>
              <p>Marketing Specialist</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team7.jpg"
                alt="Team Member 7"
                width={200}
                height={200}
              />
              <h3>Chris Anderson</h3>
              <p>DevOps Engineer</p>
            </div>
            <div className="team-member">
              <Image
                src="/assets/team8.jpg"
                alt="Team Member 8"
                width={200}
                height={200}
              />
              <h3>Anna Taylor</h3>
              <p>Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <Image
                  src="/assets/logo_placeholder.svg"
                  alt="Ocean County Digital"
                  width={48}
                  height={48}
                />
                <span>Ocean County Digital</span>
              </div>
              <p>
                Your digital transformation partner. We build modern, scalable
                web solutions that drive business growth and innovation.
              </p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <p>
                  <strong>Phone:</strong> (732) 555-0123
                </p>
                <p>
                  <strong>Email:</strong> info@oceancountydigital.com
                </p>
              </div>
            </div>
            <div className="footer-column">
              <h4>Get in Touch</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
