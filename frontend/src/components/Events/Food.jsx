import React from "react";
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpeg";
import food3 from "../../images/food3.jpg";
import { Link } from "react-router-dom";
import EventHeader from "./EventHeader";
import Footer from "../Footer/Footer";

const Events = [
  {
    topic: "Cooking Experience in Unawatuna",
    image:food1, // Using the imported image correctly
    description: "Learn to cook Sri Lankan fare from a pro with this private cooking class, held in a local family restaurant. You'll learn how to make traditional dishes and blend your own spices, and all tools and ingredients will be provided to make your experience a success. After your class, you'll sit down to dine on what you've made.",
  },
  {
    topic: "Rustic Food Tour Colombo",
    image: food2,
    description: "Take a crash course in Colombo’s street foods on this private tour. With a guide, head into neighborhoods famed for their food offerings, from the upmarket Cinnamon Gardens to colorful Pettah, and sample the culinary styles and dishes borne from the city’s cultural diversity. Stop to sample street snacks and sweets, savor gourmet eats, and try traditional plant-based and meat recipes as your guide charts their place in Colombo’s history. Your tour includes tastings.",
  },
  {
    topic: "Private Street Food Tour",
    image: food3,
    description: "Sampling Colombo’s street foods can be tricky without a guide to point out favorite local eats and what they consist of. With this private tour, you gain the insider knowledge you need. Let a guide introduce you to food spots such as Pettah Market, together with treats such as cassava chips and samosas, so you end up truly eating like a local. Eight food and two drinks tastings are included.",
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
            className="w-full h-[200px] object-cover mb-2"
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

function Food() {
  return (
    <div>
      <EventHeader/>
    <div className="pt-[100px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center mb-4">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Music Events
        </button>
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Sports Events
        </button>
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Festival Events
        </button>
        <button className="bg-[#381864d8] text-Black font-bold py-2 px-4 rounded">
          Food Events
        </button>
      </div>
      <EventComponent />
    </div>
    <Footer/>
    </div>
  );
}

export default Food;
