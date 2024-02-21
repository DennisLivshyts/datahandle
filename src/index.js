// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HospitalProvider } from './context/HospitalContext'; // Import the HospitalProvider
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <HospitalProvider> {/* Wrap your App component with HospitalProvider */}
      <App />
    </HospitalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
