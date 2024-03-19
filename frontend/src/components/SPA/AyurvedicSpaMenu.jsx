import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    topic: "SAMVAHANA",
    description: "Classical Ayurveda full body massages using herbal medicated oils help balance body energies. This massage is extremely beneficial in relieving body aches pains and general fatigue.",
    Time: " MINUTES 90",
    Price: "LKR 17,000",
  },
  {
    topic: "SHIRSHABYANGA",
    description: "Traditional Ayurvedic head, neck and shoulder massage using selected herbal oils which releives insomnia, headaches and nourishes ears, eyes and hair.",
    Time: " MINUTES 15",
    Price: "LKR 7,000",
  },
  {
    topic: "UDVARTANA",
    description: "This is a unique treamnet where dry herbal powders are massaged into your skin using upward movement. It is effective in reducing cellulite and reducing bodyweight by unwanted fat.",
    Time: " MINUTES 60",
    Price: "LKR 15,500",
  },
];

function AyurvedicSpaMenuComponent() {
  return (
    <div className="flex flex-wrap justify-center">
      {menu.map((SPA, index) => (
        <div
          key={index}
          className="w-80 p-6 m-6 border border-gray-300 rounded-md flex flex-col justify-between"
        >
          <h2 className="text-xl font-bold mb-4 text-center">{SPA.topic}</h2>
          <p className="text-gray-700 text-justify mb-4">{SPA.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">{SPA.Time}</p>
            <p className="text-gray-700 font-bold">{SPA.Price}</p>

            <Link to="/appoitment"> {/* Link to the Appoitment */}
            <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded">
              BOOK NOW
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function AyurvedicSpaMenu() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 mt-20 font-mono antialiased font-weight-600">
        Ayurvedic SPA Menu
      </h1>
      <AyurvedicSpaMenuComponent />
    </div>
  );
}

export default AyurvedicSpaMenu;