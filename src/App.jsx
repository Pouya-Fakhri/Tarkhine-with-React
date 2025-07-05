import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Headere from "./components/Headere";
import Footer from "./components/footer";
import TestPage from "./components/pages/TestPage";

function App() {
  return (
    <div className=" overflow-x-hidden" >
      <Headere />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/TestPage" element={<TestPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
