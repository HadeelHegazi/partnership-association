import { useState } from 'react'
import './App.css'
import './styles/design-system.css' // Import the design system

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>🤝 Partnership Association</h1>
        <p>Building stronger connections through collaboration</p>
      </header>
      
      <main className="main">
        <section className="hero">
          <h2>Welcome to Our Community</h2>
          <p>Join us in fostering meaningful partnerships and creating lasting impact.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Connect</h3>
            <p>Find the right partners for your projects and initiatives.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovate</h3>
            <p>Collaborate on innovative solutions and breakthrough ideas.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Grow</h3>
            <p>Scale your impact through strategic partnerships.</p>
          </div>
        </section>

        {/* NEW: Figma Integration Example */}
        <section className="figma-example">
          <h3>🎨 Figma Design Integration</h3>
          <p>This section shows how to use the design system with your Figma designs</p>
          
          <div className="figma-components">
            {/* Example using design system classes */}
            <div className="card p-lg m-md">
              <h4 className="text-2xl font-semibold" style={{color: 'var(--primary-color)'}}>
                Figma Component Example
              </h4>
              <p className="text-base text-secondary m-sm">
                This uses the design system variables that you'll update with your Figma values
              </p>
              <button className="btn btn-primary m-sm">
                Figma Button
              </button>
            </div>
            
            {/* Another example */}
            <div className="card p-lg m-md" style={{
              background: 'var(--background-secondary)',
              border: '2px solid var(--accent-color)'
            }}>
              <h4 className="text-xl font-medium" style={{color: 'var(--secondary-color)'}}>
                Custom Styling
              </h4>
              <p className="text-sm text-light">
                Mix design system classes with inline styles for Figma-specific designs
              </p>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h3>Interactive Demo</h3>
          <div className="counter">
            <p>Partnership count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
              Add Partnership
            </button>
            <button onClick={() => setCount(Math.max(0, count - 1))}>
              Remove Partnership
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Partnership Association. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
