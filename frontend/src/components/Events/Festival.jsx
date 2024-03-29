import React from "react";
import fes1 from "../../images/fes1.jpeg";
import fes2 from "../../images/fes2.jpg";
import fes3 from "../../images/fes3.jpg";
import EventHeader from "./EventHeader";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Events = [
  {
    topic: "Kandy Esala Poya Perahera",
    image:fes1, // Using the imported image correctly
    description: "Important one amongst religious festivals in Sri Lanka, The Festival of The Tooth pays homage to the sacred tooth relic of Buddha enshrined at the famous temple in Kandy. The grand celebrations include a spectacular procession of traditional dancers, drummers, and elephants dressed up in rich finery through the streets of the city every day for a week. The excitement, fervour and festivities on the last night must be seen to be believed.",
  },
  {
    topic: "Galle Literary Festival",
    image: fes2,
    description: "Set in and around the historic city of Galle, a UNESCO World Heritage site, the Galle Literary Festival is a major event in Sri Lanka. The program boasts over 70 events. By day visitors can find: panel discussions, debates, book launches, poetry slams, literary lunches and dinners, film evenings, seminars, and a comprehensive children’s program. By night, the program features poetry slams, jazz performances, late night movies, art showings, and photographic exhibitions. Over 40 international and 50 Sri Lankan writers have participated.",
  },
  {
    topic: "Independence Day",
    image: fes3,
    description: "Independence day of any country is important to its citizens and so it is one of the most important festivals of Sri Lanka. On 4th February 1948, Sri Lanka got its independence from colonial rule. Every year to celebrate this auspicious day, the whole country participates in ceremonies and parades. While you are exploring the country you can attend the military parades, flag-hoisting ceremonies, firework displays, cannon fire shows, and cultural performances.",
  }
];

function EventComponent() {
  return (
    
    <div className=" flex flex-wrap justify-center">
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

function Festival() {
  return (
    <div className="h-24 bg-[#eba5f1]"> 
      <EventHeader/>
      <br/>
    <div className="pt-[100px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center mb-4">
       <Link to="/music1" >
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Music Events
        </button>
        </Link>
        <Link to="/sport1" >
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Sports Events
        </button>
        </Link>
        <Link to="/fes1" >
        <button className="bg-[#381864d8] text-Black font-bold py-2 px-4 rounded mr-4">
          Festival Events
        </button>
        </Link>
        <Link to="/food1" >
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

export default Festival;
