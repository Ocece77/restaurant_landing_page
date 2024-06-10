import { Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation/Navigation';
import Homepage from './pages/homepage/Homepage';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Products from "./pages/products/Products";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/homepage" index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
