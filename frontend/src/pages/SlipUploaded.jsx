import React from 'react';
import { Link } from 'react-router-dom';

const SlipUploaded = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h2 className="text-teal-500 text-2xl font-bold mb-4">Upload Successful</h2>
        <p className="text-gray-700">Your Payment was Submitted. Thank you and Please kindly wait for the Response!</p>
        <Link to="/homee">
          <button
            id="returnHomeButton"
            className="mt-4 bg-[#4CCD99] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SlipUploaded;
