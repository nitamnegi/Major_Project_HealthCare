import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeartForm from "./components/HeartForm";
import DiabetesForm from "./components/DiabetesForm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound"; // 404 Page
import "./styles/App.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/heart" element={<HeartForm />} />
                    <Route path="/diabetes" element={<DiabetesForm />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
