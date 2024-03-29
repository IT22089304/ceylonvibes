import React from "react";
import sport1 from "../../images/sport1.jpg";
import sport2 from "../../images/sport2.jpg";
import sport3 from "../../images/sport3.jpg";
import EventHeader from "./EventHeader";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Events = [
  {
    topic: "Trekking and Hiking",
    image:sport1, // Using the imported image correctly
    description: "With multitude of roads winding through expanding mountains, lush green forests, paddy fields, parks and sleepy villages, Sri Lanka offers a plethora of opportunities to the Keen hikers and trekkers. The highlands of Sri Lanka with virgin rain forests, sacred mountains, lush tea gardens and plains filled with rare birds and insects coupled with mild temperatures and welcoming smiles of the villagers provide the ideal setting to an unforgettable walking experience.",
  },
  {
    topic: "Diving",
    image: sport2,
    description: "Surrounded by the Indian Ocean with its coral gardens, multitudeof exotic fishes and ancient wrecks Sri Lanka offers one of the best diving experiences in the world. The colorful coral gardens along southern coasts and old and new ship wrecks around the Galle harbor and little and great basses are the favourite Sri Lankan dive sites yet Kalpitiya, Ampara and Trincomalee in Eastern and Western coasts offering rare chances of wreck diving, skin diving and diving with dolphins.",
  },
  {
    topic: "Hot Air Ballooning",
    image: sport3,
    description: "Roam the skies of Sri Lanka enjoying the signs and sites from the heavens above. Floating at heights of 500 to 2000 feet on average,effortlessly drift over the treetops, wildlife, lakes & rivers, cultural sites, local urban homesteads & landmarks like Sigiriya Rock. The sunrise rides are offered at day break to enhance the experience by accompanying the sights and sounds with magical experience of dawn.",
  }
];

function EventComponent() {
  return (
    <div className="flex flex-wrap justify-center">
      {Events.map((event, index) => (
        <div
          key={index}
          className="w-96 h-[600px] p-4 m-4 border border-gray-300 rounded-md flex flex-col justify-between"
          style={{ maxWidth: "250px", maxHeight: "900px" }}
        >
          <h2 className="text-lg font-bold mb-2">{event.topic}</h2>
          <img
            src={event.image}
            alt={event.topic}
            className="w-[767px] h-[580px] object-cover mb-2"
          />
          <p className="text-sm mb-2">{event.description}</p>
          <Link to={"/Payment"}>
          <button className="bg-[#879d62] text-Black font-bold py-2 px-4 rounded">
            Buy Ticket
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Sport() {
  return (
    <div className="h-24 bg-[#eba5f1]"> 
      <EventHeader/>
      <br/>
    <div className="pt-[100px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center mb-4">
       <Link to="/music3">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Music Events
        </button>
        </Link>
        <Link to="/sport3">
        <button className="bg-[#381864d8] text-Black font-bold py-2 px-4 rounded mr-4">
          Sports Events
        </button>
        </Link>
        <Link to="/fes3">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Festival Events
        </button>
        </Link>
        <Link to="/food3">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded">
          Food Events
        </button>
        </Link>
      </div>
      <EventComponent />
    </div>
    <Footer/>
    </div>
  );
}

export default Sport;
