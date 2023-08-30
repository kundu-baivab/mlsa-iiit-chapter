import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
