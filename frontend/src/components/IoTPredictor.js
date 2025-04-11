import React, { useState } from "react";
import axios from "axios";
import "../styles/IoTPredictor.css";

const IoTPredictor = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/iot-temperature");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setData({ error: "Unable to fetch data from server." });
    }
    setLoading(false);
  };

  return (
    <div className="iot-predictor">
      <h2>IoT-Based Disease Predictor</h2>
      <button onClick={fetchPrediction}>Get Sensor Data & Predict</button>

      {loading && <p>Loading...</p>}

      {data && !data.error && (
        <div className="results">
          <p><strong>Body Temperature:</strong> {data.body_temperature} °F</p>
          <p><strong>Room Temperature:</strong> {data.room_temperature} °F</p>
          <p><strong>Pulse:</strong> {data.pulse} bpm</p>
          <p><strong>SpO2:</strong> {data.spo2} %</p>
          <p><strong>Predicted Disease:</strong> <span className="highlight">{data.predicted_disease}</span></p>
        </div>
      )}

      {data?.error && <p className="error">{data.error}</p>}
    </div>
  );
};

export default IoTPredictor;
