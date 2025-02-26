import React, { useState } from "react";
import { predictHeartDisease } from "../services/api";
import "../styles/HeartForm.css";

const HeartForm = () => {
    const [formData, setFormData] = useState({
        age: "",
        sex: "",
        chest_pain: "",
        exercise_angina: "",
        rest_ecg: "",
        max_heart_rate: "",
        smoking_history: ""
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await predictHeartDisease(formData);
        setResult(response.data.prediction);
    };

    return (
        <div className="form-container">
            <h2>Heart Disease Prediction</h2>
            <form onSubmit={handleSubmit} className="form">
                {/* Age Input */}
                <label>Age</label>
                <input type="number" name="age" placeholder="Enter Age" onChange={handleChange} required />

                {/* Sex Dropdown */}
                <label>Sex</label>
                <select name="sex" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                </select>

                {/* Chest Pain Dropdown */}
                <label>Chest Pain Type</label>
                <select name="chest_pain" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">Typical Angina</option>
                    <option value="1">Atypical Angina</option>
                    <option value="2">Non-Anginal Pain</option>
                    <option value="3">Asymptomatic</option>
                </select>

                {/* Exercise Induced Angina */}
                <label>Exercise Induced Angina</label>
                <select name="exercise_angina" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>

                {/* Rest ECG Dropdown */}
                <label>Rest ECG</label>
                <select name="rest_ecg" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="0">Normal</option>
                    <option value="1">ST-T Wave Abnormality</option>
                    <option value="2">Left Ventricular Hypertrophy</option>
                </select>

                {/* Maximum Heart Rate Input */}
                <label>Maximum Heart Rate</label>
                <input type="number" name="max_heart_rate" placeholder="Enter Max Heart Rate" onChange={handleChange} required />

                {/* Smoking History Dropdown */}
                <label>Smoking History</label>
                <select name="smoking_history" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="not current">Not Current</option>
                    <option value="former">Former</option>
                    <option value="No Info">No Info</option>
                    <option value="current">Current</option>
                    <option value="never">Never</option>
                    <option value="ever">Ever</option>
                </select>

                <button type="submit" className="btn">Predict</button>
            </form>

            {result !== null && (
                <h3 className={result ? "result-danger" : "result-safe"}>
                    Prediction: {result ? "Heart Disease Detected" : "No Heart Disease"}
                </h3>
            )}
        </div>
    );
};

export default HeartForm;
