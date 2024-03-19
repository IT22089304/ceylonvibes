import React, { useState } from 'react';
import ReportDisplay from './ReportDisplay'; 


const ReportGeneration = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to handle errors
  const [reportData, setReportData] = useState(null); // State to store report data

  const handleGenerateReport = () => {
    setIsLoading(true); // Set loading state to true

    // Logic to generate report based on startDate and endDate
    console.log('Generating report for dates:', startDate, 'to', endDate);

    // Fetch report data from API
    fetchReportData(startDate, endDate)
      .then((data) => {
        // Handle successful data retrieval
        console.log('Report data:', data);
        setReportData(data); // Store report data in state
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching report data:', error);
        setError('Error fetching report data'); // Set error message
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      });
  };

  return (
    <div className="report-generation-page flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Generate Reports</h2>
      <div className="report-form">
        {/* Input fields for selecting start and end dates */}
        <label htmlFor="start-date" className="block mb-2">Start Date:</label>
        <input
          type="date"
          id="start-date"
          className="border rounded p-2 mb-4"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label htmlFor="end-date" className="block mb-5">End Date:</label>
        <input
          type="date"
          id="end-date"
          className="border rounded p-2 mb-4"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {/* Button to trigger report generation */}
        <button
          onClick={handleGenerateReport}
          disabled={isLoading}
          className={`bg-[#EF4444] hover:bg-[#B91C1C] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading && 'opacity-50 cursor-not-allowed'}`}
        >
          {isLoading ? 'Generating...' : 'Generate Report'}
        </button>

        {/* Display error message if an error occurs */}
        {error && <div className="text-red-500 mt-2">{error}</div>}

        {/* Display the report if available */}
        {reportData && <ReportDisplay reportData={reportData} />}
      </div>
    </div>
  );
};

export default ReportGeneration;
