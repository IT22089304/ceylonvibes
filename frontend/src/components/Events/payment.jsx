import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import music1 from "../../images/music1.jpg";
import EventHeader from './EventHeader';
import Footer from '../Footer/Footer';

const EventDetails = ({ event }) => {
  const [ticketType, setTicketType] = useState('standard');
  const [ticketCount, setTicketCount] = useState(1);
  const standardPrice = 50; // Price for standard ticket
  const seatedPrice = 70; // Price for seated ticket

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
  };

  const handleTicketCountChange = (e) => {
    setTicketCount(parseInt(e.target.value));
  };

  const totalPrice = ticketType === 'standard' ? standardPrice * ticketCount : seatedPrice * ticketCount;

  const handleBuyTickets = () => {
    // Implement buy tickets functionality here
    console.log(`Buying ${ticketCount} ${ticketType} ticket(s) for ${event.name}`);
  };

  return (
    <div className="flex mx-[100px]">
      {/* Event Banner */}
      <div className="w-1/2 p-4">
        <img src={event.banner} alt={event.name} className="w-[550px] h-[700px]" />
      </div>
      {/* Ticket Selection */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">{event.name}</h2>
        <p className="mb-4">{event.description}</p>
        <p className="font-bold mb-4">Location:{event.location}</p>
        <p className="font-bold mb-4">Date:{event.date}</p>
        <div className="mb-4">
          <label htmlFor="ticketType" className="block font-semibold mb-2">Select Ticket Type</label>
          <select id="ticketType" className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" value={ticketType} onChange={handleTicketTypeChange}>
            <option value="standard">Standard</option>
            <option value="seated">Seated</option>
            <option value="None">None</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ticketCount" className="block font-semibold mb-2">Ticket Count</label>
          <input type="number" id="ticketCount" className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" value={ticketCount} onChange={handleTicketCountChange} />
        </div>
        <div className="mb-4">
          <p className="font-semibold">Price per Ticket: ${ticketType === 'standard' ? standardPrice : seatedPrice}</p>
          <p className="font-semibold">Total Price: ${totalPrice}</p>
        </div>
        <div>
          <button className="bg-[#75df44] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleBuyTickets}>
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for EventDetails component
EventDetails.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired
  }).isRequired
};

const Payment = () => {
  // Sample event object
  const event = {
    name: 'Sample Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location:"Kandy",
    date:"2024/04/12",
    banner: music1 // Sample URL for event banner
  };

  return (
    <div>
      <EventHeader/>
    <div>
      <div className="pt-[100px] container mx-auto py-8">
        <EventDetails event={event} />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Payment;