
import './styles/app.scss';
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    <Footer />
  </Router>
}

export default App;
