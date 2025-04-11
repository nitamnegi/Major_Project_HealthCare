from flask import Flask, request, jsonify
import joblib
import numpy as np
import random
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)

heart_model = joblib.load("models/heart_disease_model.pkl")
diabetes_model = joblib.load("models/diabetes_model.pkl")
disease_model = joblib.load("models/disease_prediction_model.pkl")
disease_encoder = joblib.load("models/label_encoder.pkl") 

scaler = StandardScaler()
scaler = joblib.load("models/scaler_diabetes.pkl")

gender_mapping = {"male": 1, "female": 0, "other": 2}

@app.route("/api/predict-heart", methods=["POST"])
def predict_heart():
    try:
        age = int(request.form['age'])
        sex = 1 if request.form['sex'] == 'Male' else 0
        chest_pain = int(request.form['chest_pain'])
        exercise_angina = 1 if request.form['exercise_angina'] == 'Yes' else 0
        rest_ecg = int(request.form['rest_ecg'])
        max_heart_rate = int(request.form['max_heart_rate'])
        smoking_history = 1 if request.form['smoking_history'] == 'Yes' else 0

        input_features = np.array([[age, sex, chest_pain, exercise_angina, rest_ecg, max_heart_rate, smoking_history]])
        prediction = heart_model.predict(input_features)[0]
        result = "High Risk of Heart Disease" if prediction == 1 else "Low Risk of Heart Disease"

        return jsonify({"prediction": result})
    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/api/predict-diabetes", methods=["POST"])
def predict_diabetes():
    try:
        data = request.json

        input_data = [
            gender_mapping.get(data["gender"], 2), 
            int(data["age"]),
            int(data["hypertension"]),
            int(data["heart_disease"]),
            int(data["smoking_history"]),
            float(data["bmi"]),
            float(data["HbA1c_level"]),
            float(data["blood_glucose_level"])
        ]

        input_data = np.array(input_data).reshape(1, -1)
        input_data_scaled = scaler.transform(input_data)

        prediction = diabetes_model.predict(input_data_scaled)[0]

        return jsonify({"prediction": int(prediction)})
    
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/api/iot-temperature", methods=["GET"])
def get_temperature_and_predict_disease():
    body_temp = 101.5
    room_temp = 72.0
    pulse = 95
    spo2 = 96

    input_data = np.array([[body_temp, room_temp, pulse, spo2]])
    predicted_label = disease_model.predict(input_data)[0]
    predicted_disease = disease_encoder.inverse_transform([predicted_label])[0]

    return jsonify({
        "body_temperature": body_temp,
        "room_temperature": room_temp,
        "pulse": pulse,
        "spo2": spo2,
        "predicted_disease": predicted_disease
    })

if __name__ == "__main__":
    app.run(debug=True)
