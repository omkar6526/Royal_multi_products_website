import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Navbar from "./component/Navbar";



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

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;