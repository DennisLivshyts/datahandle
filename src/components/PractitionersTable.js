import React, { useState, useEffect, useContext } from 'react';
import { getPractitioners, getPractitionersByHospitalId } from '../services/api';
import HospitalContext from '../context/HospitalContext';
import * as XLSX from 'xlsx';

const PractitionersTable = () => {
  const [practitioners, setPractitioners] = useState([]);
  const { selectedHospital } = useContext(HospitalContext);

  useEffect(() => {
    const fetchPractitioners = async () => {
      try {
        let data;
        if (selectedHospital) {
          data = await getPractitionersByHospitalId(selectedHospital.HospitalID);
        } else {
          data = await getPractitioners();
        }
        setPractitioners(data);
      } catch (error) {
        console.error('Error fetching practitioners:', error);
      }
    };

    fetchPractitioners();

    return () => {
      setPractitioners([]);
    };
  }, [selectedHospital]);

  const exportToExcel = () => {
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'practitioners';

    const ws = XLSX.utils.json_to_sheet(practitioners);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    const href = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + fileExtension;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      {practitioners.length > 0 ? (
        <div className="mb-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Practitioner ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Years of Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {practitioners.map((practitioner) => (
                <tr key={practitioner.PractitionerID}>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.PractitionerID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.HospitalID}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.FirstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.LastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.YearsExperience}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{practitioner.Approved ? 'Yes' : 'No'}</td>
                  {/* Add more table data cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4 text-center text-gray-500">No practitioners available</p>
      )}
      <div>
        <button
          onClick={exportToExcel}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default PractitionersTable;
