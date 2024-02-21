import React, { useContext } from 'react';
import HospitalContext from '../context/HospitalContext';

const HospitalDetails = () => {
  const { selectedHospital } = useContext(HospitalContext);

  return (
    <div>
      <h2>Hospital Details:</h2>
      {selectedHospital ? (
        <div>
          <p>Name: {selectedHospital.HospitalName}</p>
          <p>Practitioner Count: {selectedHospital.PractitionerCount}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No hospital selected</p>
      )}
    </div>
  );
};

export default HospitalDetails;
