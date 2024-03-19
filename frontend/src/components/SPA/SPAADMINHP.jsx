import React, { useState } from "react";
import Homepage from "../../images/homepage.png";
import Spamenu from "../../images/ayurvedic-spa-menu.png";
import Classicalspa from "../../images/classical-spa-rituals.png";
import { Link } from "react-router-dom";

function SpaAdminHP() {
  const [showReportButton, setShowReportButton] = useState(false);

  const handleReportClick = () => {
    // Implement report functionality here
    console.log("Report button clicked");
  };

  return (
    <div className="spa-menu p-12 max-w-7.5xl mx-auto text-center bg-yellow-100">
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl text-[#059669] mb-8 mt-20 font-mono antialiased font-medium">
          Harmony through Nature, Wellness for All
        </h2>
        <img src={Homepage} alt="HomePage" className="border border-black w-full h-64 object-cover mb-10" />
      </div>
          
     <h3 className="text-2xl text-gray-800 mb-12 line-height-2rem">
        Browse through the menu of our Ceylon Vibes SPA in Kandy to discover the treatment that best suits you
      </h3>
      

      <div className="flex justify-center spa-categories grid grid-cols-1 gap-8"></div>

      <div className="treatments mb-12">
        <h4 className="text-3xl text-[#064E3B] mb-10 font-weight-700 font-mono antialiased line-height-2rem">
          Treatments
        </h4>
        <p className="text-gray-700">
          Cocooned in calmness and combining innovative wellness rituals with traditional healing, experience a sense of
          true bliss at our spa hotel.
        </p>
      </div>

      <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
        <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
          <img src={Spamenu} alt="Ayurvedic-spa-menu" className="w-full h-64 object-cover mb-4" />
          <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight-700">AYURVEDIC SPA MENU</h4>

          <div className="button-container flex justify-between">
          <Link to="/ayurvedic-spa-menu"> {/* Link to the ayurvedic-spa-menu */}
            <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
              View for More
            </button></Link>

            <Link to="/spa-menu-edit-service"> {/* Link to the edit-service */}
            <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
              Edit Services
            </button></Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
        <div className="classical-spa-rituals bg-white p-6 rounded-lg shadow-md mb-8">
          <img src={Classicalspa} alt="classical-spa-rituals" className="w-full h-64 object-cover mb-4" />
          <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2">CLASSICAL SPA RITUALS</h4>

          <div className="button-container flex justify-between">
          <Link to="/ayurvedic-spa-menu"> {/* Link to the ayurvedic-spa-menu */}
            <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
              View for More
            </button></Link>

            <Link to="/classical-spa-rituals-edit-service"> {/*classical-spa-rituals-edit-service */}
            <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
              Edit Services 
            </button></Link>
          </div>
        </div>
      </div>
      
      <Link to="/generate-report"> {/* Link to generate-report */}
      <button
              className="bg-[#EF4444] hover:bg-[#B91C1C] text-white font-bold py-2 px-4 rounded transition duration-200 mt-4"
              onClick={handleReportClick}
            >
              Check SPA Report
            </button></Link>
    </div>
  );
}

export default SpaAdminHP;
