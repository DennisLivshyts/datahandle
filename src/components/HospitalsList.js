import React, { useContext, useEffect, useState } from 'react';

import HospitalContext from '../context/HospitalContext';
import { getHospitals, getHospitalDetails } from '../services/api'; // Import the getHospitalDetails API method

const HospitalsList = () => {
  const { onSelectHospital } = useContext(HospitalContext);
 
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data = await getHospitals();
        console.log('Fetched hospitals:', data);
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  const handleHospitalClick = async (e) => {
    const selectedHospitalId = e.target.value;
    try {
      const hospital = await getHospitalDetails(selectedHospitalId);
      onSelectHospital(hospital);
      
    } catch (error) {
      console.error('Error fetching hospital details:', error);
    }
  };

  return (
    <div>
      <h1 >Select Hospital</h1>
      <select
        onChange={handleHospitalClick}
      >
        <option value="">Select a hospital...</option>
        {hospitals.map((hospital) => (
          <option key={hospital.HospitalID} value={hospital.HospitalID}>
            {hospital.HospitalName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HospitalsList;
