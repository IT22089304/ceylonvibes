import React from 'react';

const ReportDisplay = ({ reportData }) => {
  return (
    <div className="report-display">
      <h2 className="text-2xl font-bold mb-4">Report</h2>
      {/* Display the report data */}
      <pre>{JSON.stringify(reportData, null, 2)}</pre>
    </div>
  );
};

export default ReportDisplay;
