// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InquiryPage from "./component/InquiryPage";
import Products from "./component/Products";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductPage from "./pages/ProductPage";
import About from './pages/About';
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} /> 
            <Route path="/product/:category" element={<ProductPage />} />
            <Route path="/product/details/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<InquiryPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;