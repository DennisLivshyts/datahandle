import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HospitalsList from './components/HospitalsList';
import HospitalDetails from './components/HospitalDetails';
import PractitionersTable from './components/PractitionersTable';
import { HospitalProvider } from './context/HospitalContext';
import Navbar from './components/NavBar'; // Import the Navbar component

const App = () => {
  return (
    <Router>
      <HospitalProvider>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<HospitalComponents />} />
        </Routes>
      </HospitalProvider>
    </Router>
  );
};

const HospitalComponents = () => {
  return (
    <div className="grid grid-cols-1 gap-4">

      <div className="grid grid-cols-2 gap-4 h-full">

        <div className="bg-white rounded-lg shadow p-6 overflow-auto"> 
          <HospitalsList />  
        </div>

        <div className="bg-white rounded-lg shadow p-6 overflow-auto">
          <HospitalDetails />
        </div>

      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <PractitionersTable />    
      </div>

    </div>
  );
};

export default App;
