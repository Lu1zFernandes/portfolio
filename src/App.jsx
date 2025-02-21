import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';

//Components
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
