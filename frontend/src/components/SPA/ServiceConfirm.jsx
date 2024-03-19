import React from 'react';
import { Link } from "react-router-dom";

const ServiceConfirm = ({ appointment, onCancel }) => {
  return (
    <div className="bg-[#D1FAE5] p-6 rounded-lg shadow-md mb-8 flex flex-col items-center">
      <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight: 700 line-height: 2rem">
      CeylonVibes Payments
      </h4>
      <br></br>
      <br></br>
      <p className="text-center">
        If your appointment has been confirmed, please proceed to make the payment by clicking the button below.
      </p>
      <br></br>
      <button className="bg-[#34D399] hover:bg-[#064E3B] text-white font-bold py-2 px-4 rounded transition duration-200">
        Payment</button>
        <br></br>
        <br></br>
      <p className="text-center">
        To cancel your appointment, please do so before making the payment, as it is non-refundable.
      </p>
      <br></br>
      <Link to="/"> {/* Link to the SPA homepage */}
      <button onClick={onCancel}  className="bg-[#F87171] hover:bg-[#B91C1C] text-white font-bold py-2 px-4 rounded transition duration-200">
        Cancel Appointment</button> </Link>
    </div>
  );
};

export default ServiceConfirm;