import axios from 'axios';

const API_BASE = "http://127.0.0.1:5000/api";

export const predictHeartDisease = (data) => axios.post(`${API_BASE}/predict-heart`, data);
export const predictDiabetes = (data) => axios.post(`${API_BASE}/predict-diabetes`, data);
export const getIotTemperature = () => axios.get(`${API_BASE}/iot-temperature`);
