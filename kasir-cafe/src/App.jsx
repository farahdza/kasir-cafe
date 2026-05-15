import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Kita gunakan path string langsung atau link placeholder agar tidak eror
  const reactLogo = "https://raw.githubusercontent.com/vitejs/vite/main/packages/create-vite/template-react/src/assets/react.svg"
  const viteLogo = "https://vitejs.dev/logo.svg"
  const heroImg = "https://via.placeholder.com/170x179?text=Hero+Image"

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Hero" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> dan simpan untuk mencoba <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li><a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">Discord</a></li>
            <li><a href="https://x.com/vite_js" target="_blank" rel="noreferrer">X.com</a></li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App