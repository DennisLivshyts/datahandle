// HospitalContext.js
import React, { createContext, useState } from 'react';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const onSelectHospital = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <HospitalContext.Provider value={{ selectedHospital, onSelectHospital }}>
      {children}
    </HospitalContext.Provider>
  );
};

export default HospitalContext;
