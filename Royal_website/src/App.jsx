// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InquiryPage from "./component/InquiryPage";
import Products from "./component/Products"; // Add this import
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ProductPage from "./pages/ProductPage";

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
            <Route path="/products" element={<Products />} /> {/* Add this route */}
            <Route path="/product/:category" element={<ProductPage />} />
            <Route path="/contact" element={<InquiryPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </main>
        <Footer/>
      </div> 
    </Router>
  );
}

export default App;