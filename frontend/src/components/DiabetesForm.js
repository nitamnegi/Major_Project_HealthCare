import React, { useState } from "react";
import { predictDiabetes } from "../services/api";
import "../styles/DiabetesForm.css";

const DiabetesForm = () => {
    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "",
        heart_disease: "",
        smoking_history: "",
        bmi: "",
        HbA1c_level: "",
        blood_glucose_level: ""
    });

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await predictDiabetes(formData);
        setResult(response.data.prediction);
    };

    return (
        <div className="form-container">
            <h2>Diabetes Prediction</h2>
            <form onSubmit={handleSubmit} className="form">
                {/* Gender Dropdown */}
                <label>Gender</label>
                <select name="gender" onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                {/* Age Input */}
                <label>Age</label>
                <input type="number" name="age" placeholder="Enter Age" onChange={handleChange} required />

                {/* Hypertension Dropdown */}
                <label>Hypertension</label>
                <select name="hypertension" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>

                {/* Heart Disease Dropdown */}
                <label>Heart Disease</label>
                <select name="heart_disease" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>

                {/* Smoking History Dropdown */}
                <label>Smoking History</label>
                <select name="smoking_history" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="5">Not Current</option>
                    <option value="3">Former</option>
                    <option value="0">No Info</option>
                    <option value="1">Current</option>
                    <option value="4">Never</option>
                    <option value="2">Ever</option>
                </select>

                {/* BMI Input */}
                <label>BMI</label>
                <input type="number" step="0.1" name="bmi" placeholder="Enter BMI" onChange={handleChange} required />

                {/* Hemoglobin Level Input */}
                <label>HbA1c Level</label>
                <input type="number" step="0.1" name="HbA1c_level" placeholder="Enter Hemoglobin Level" onChange={handleChange} required />

                {/* Blood Glucose Level Input */}
                <label>Blood Glucose Level</label>
                <input type="number" name="blood_glucose_level" placeholder="Enter Blood Glucose Level" onChange={handleChange} required />

                <button type="submit" className="btn">Predict</button>
            </form>

            {result !== null && (
                <h3 className={result ? "result-danger" : "result-safe"}>
                    Prediction: {result ? "Diabetes Detected" : "No Diabetes"}
                </h3>
            )}
        </div>
    );
};

export default DiabetesForm;
