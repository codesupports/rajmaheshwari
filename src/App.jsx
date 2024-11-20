import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './Home'
import AboutUs from './AboutUs/AboutUs'
import './app.scss'
import ContactUs from './ContactUs/ContactUs'
import Header from './Header/Header'
function App() {


  return (
    <>
      <Router>
        <main>
          <Header />
          <section className="profile">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  )
}

export default App
