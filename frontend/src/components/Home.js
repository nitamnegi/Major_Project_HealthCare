import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <h1>AI-Based Smart Healthcare System</h1>
                <p>Predict diseases with AI and IoT integration for better healthcare.</p>
                <Link to="/heart">
                    <button className="cta-button">Start Diagnosis</button>
                </Link>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Our Features</h2>
                <div className="feature-list">
                    <div className="feature-item">
                        <img src={`${process.env.PUBLIC_URL}/images/heart-icon.png`} alt="Heart Disease" />
                        <h3><Link to="/heart">Heart Disease Prediction</Link></h3>
                        <p>Accurate predictions using AI and ML models.</p>
                    </div>
                    <div className="feature-item">
                        <img src={`${process.env.PUBLIC_URL}/images/diabetes-icon.png`} alt="Diabetes" />
                        <h3><Link to="/diabetes">Diabetes Prediction</Link></h3>
                        <p>Check your risk for diabetes with a quick test.</p>
                    </div>
                    <div className="feature-item">
                        <img src={`${process.env.PUBLIC_URL}/images/iot-icon.png`} alt="IoT Integration" />
                        <h3><Link to="*">IoT-Based Monitoring</Link></h3>
                        <p>Fetch live health data like temperature & heart rate.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>About Our System</h2>
                <p>
                    Our AI-based healthcare system leverages machine learning models 
                    to predict heart diseases and diabetes. With IoT integration, 
                    real-time health monitoring is also possible.
                </p>
            </section>
        </div>
    );
};

export default Home;
