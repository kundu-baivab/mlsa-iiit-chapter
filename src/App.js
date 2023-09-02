import "./App.css";
import Zero from "./components/Zero";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Application from "./pages/Application";
import Milestones from "./pages/Milestones";
import Chapter from "./pages/Chapter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Zero />} />
            <Route path="/home" element={<Title />} />
            <Route path="/application" element={<Application />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/chapter" element={<Chapter />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
