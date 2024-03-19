import React from "react";
import { Link } from "react-router-dom";

const menu = [
  {
    topicc: "RELAX AND REBALANCE",
    descriptionn: "Our relax and rebalance treatment begins with foot refliexology to restore your body's natural state of equilibrium by channeling energy from the reflex points of the feet. This aromatherapy massage will melt away trapped toxins and release tensions of the body followed by the customized facial to pamper your face.",
    Timee: " MINUTES 150",
    Pricee: "LKR 24,500",
  },
  {
    topicc: "DETOX AND REFRESH",
    descriptionn: "This is a full body exfoliation therapy that uses nourishing, deodorizing and fresh narikela (coconut) followed by a detoxifying mud wrap. This treatment will conclude with a warm stone massage to harness all the healing powers of the body, and warmth of natural, heated stones to release the accumilated tension from muscle tissues.",
    Timee: " MINUTES 150",
    Pricee: "LKR 25,500",
  },
  
];

function AyurvedicSpaClassicalComponent() {
  return (
    <div className="flex flex-wrap justify-center">
      {menu.map((SPAA, index) => (
        <div
          key={index}
          className="w-80 p-6 m-6 border border-gray-300 rounded-md flex flex-col justify-between"
        >
          <h2 className="text-xl font-bold mb-4 text-center">{SPAA.topicc}</h2>
          <p className="text-gray-700 text-justify mb-4">{SPAA.descriptionn}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">{SPAA.Timee}</p>
            <p className="text-gray-700 font-bold">{SPAA.Pricee}</p>
             
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

function AyurvedicSpaClassical() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 mt-20 font-mono antialiased font-weight-600">
        Classical SPA Ritual Menu
      </h1>
      <AyurvedicSpaClassicalComponent />
    </div>
  );
}

export default AyurvedicSpaClassical;