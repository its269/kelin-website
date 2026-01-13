import Header from "./components/Header";
import BranchSection from "./components/BranchSection";
import MarqueeLogo from "./components/MarqueeLogo";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import "./home.css";

// 🔧 SSG CODE PATTERN: Default export function component
// This is the basic pattern for SSG in Next.js App Router
export default function Home() {
  // 🔧 SSG CODE PATTERN: No async function, no data fetching
  // - No "async" keyword = no server-side data fetching
  // - No fetch() calls = no dynamic data at build time
  // - This tells Next.js to pre-render this as static HTML
  return (
    <div className="main">
      {/* 🔧 SSG CODE PATTERN: Static component imports */}
      {/* These components have no props = no dynamic data = SSG friendly */}
      <Header />
      <main className="home-container">
        <div className="marquee-container">
          <section className="hero-section">
            {/* 🔧 SSG CODE PATTERN: Hardcoded static content */}
            {/* These strings are known at build time = perfect for SSG */}
            <div className="home-tagline-text">
              <div className="tagline">
                <p className="kgs">KGS</p>
                <h1 className="hero-title">YOUR TRUSTED<br></br>LONG-TERM PRINTING SOLUTIONS PROVIDER</h1>
              </div>
              <p className="hero-description">
                <b>Powering high-quality output at any scale.</b><br></br>From your vision to powerful,
                large-scale prints.
              </p>
            </div>

            {/* 🔧 SSG CODE PATTERN: Static navigation links */}
            {/* href values are hardcoded = pre-rendered in static HTML */}
            <div className="hero-buttons">
              <div className="btn">
                <p className="number">#1</p>
                <a href="/explore" className="btn-primary">Cutting Machine</a>
              </div>
              <div className="btn">
                <p className="number">#2</p>
                <a href="/services" className="btn-secondary">Eco-Solvent<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <p className="number">#3</p>
                <a href="/support" className="btn-tertiary">Solvent<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <p className="number">#4</p>
                <a href="/resources" className="btn-quaternary">Sublimation<br></br>Printer Machine</a>
              </div>
              <div className="btn">
                <p className="number">#5</p>
                <a href="/blog" className="btn-quinary">DTF<br></br>Printer Machine</a>
              </div>
            </div>
          </section>

          <div className="marquee-logo">
            <MarqueeLogo />
          </div>
        </div>
        <div className="horizontally-scroll">
          <HorizontalScrollSection />
        </div>

        <section className="features-section">
          {/* 🔧 SSG CODE PATTERN: Static array rendering */}
          {/* This grid is hardcoded, not from API = SSG compatible */}
          <div className="features-grid">
            <div className="feature-card">
              <h3>Quality Products</h3>
              <p>Premium printing materials and equipment from trusted manufacturers.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Support</h3>
              <p>Professional technical support and training for all your printing needs.</p>
            </div>
            <div className="feature-card">
              <h3>Custom Solutions</h3>
              <p>Tailored printing solutions to meet your specific business requirements.</p>
            </div>
          </div>
        </section>

        {/* 🔧 SSG CODE PATTERN: Component with no props */}
        {/* No props passed = no dynamic data = SSG will pre-render this */}
        <BranchSection />
      </main>
    </div>
  );
}

// 🔧 SSG RESULT: This entire component becomes a static .html file at build time
// Next.js detects: no async, no fetch(), no dynamic data = perfect for SSG
