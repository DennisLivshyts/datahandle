// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Change this if your Node.js server is running on a different port or domain

export const getPractitioners = async () => {
  try {
    const response = await axios.get(`${API_URL}/practitioners`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPractitionersByHospitalId = async (hospitalId) => {
    try {
      const response = await axios.get(`${API_URL}/hospitals/${hospitalId}/practitioners`); // Using the new endpoint to fetch practitioners by hospital ID
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const getHospitals = async () => {
  try {
    const response = await axios.get(`${API_URL}/hospitals`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
  export const getHospitalDetails = async (HospitalId) => {
    try {
      const response = await axios.get(`${API_URL}/hospitals/${HospitalId}`); // Assuming your backend has an endpoint to fetch hospital details by ID
      return response.data;
    } catch (error) {
      throw error;
    }
};
