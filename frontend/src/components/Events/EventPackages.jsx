import React from "react";
import music1 from "../../images/music1.jpg";
import music2 from "../../images/music2.jpg";
import music3 from "../../images/music3.jpg";
import { Link } from "react-router-dom";

const Events = [
  {
    topic: "Sadakadapahana - Colombo",
    image:music1, // Using the imported image correctly
    description: "Location: Colombo-Viharamahadevi Open Theatre \n Date: 30th March 2024  \n   Time: From 6:30 PM Onwards  \n    Tickets:VIP: Rs. 4,000 per person (Seated - Reserved Seating) General Entrance: Rs. 2,000 per person (Seated – Free Seating)   ",
  },
  {
    topic: "WAYO at The Lake Sixth Edition",
    image: music2,
    description: "SWARASTHI ENTERTAINMENT Proudly Presents WAYO at the Lake Sixth Edition” is an exquisite Musical Event celebrating the legendary Talents of Four Iconic Sri Lankan Artists namely;Sangeeth Wijesooriya | Senaka Batagoda | Umara Sinhawansa | Rookantha Gunathilake with WAYO Band & Many more Surprises",
  },
  {
    topic: "IGNITE Live in Concert",
    image: music3,
    description: "𝐈𝐆𝐍𝐈𝐓𝐄 𝐋𝐢𝐯𝐞 𝐢𝐧 𝐂𝐨𝐧𝐜𝐞𝐫𝐭 The wait is over!   Brace yourselves for the biggest artist lineup of the year with Infinity Music  𝐑𝐚𝐯𝐢 𝐉𝐚𝐲 | 𝐘𝐮𝐤𝐢 | 𝐉𝐚𝐲𝐚 𝐒𝐫𝐢 | 𝐖𝐚𝐬𝐭𝐡𝐢 | 𝐂𝐞𝐧𝐭𝐢𝐠𝐫𝐚𝐝𝐳 | 𝐂𝐡𝐢𝐭𝐫𝐚𝐥 | 𝐊𝐚𝐧𝐜𝐡𝐚𝐧𝐚𝟑𝟎𝐭𝐡 𝐌𝐚𝐫𝐜𝐡 @𝐍𝐞𝐥𝐮𝐦 𝐏𝐨𝐤𝐮𝐧𝐚 𝐎𝐮𝐭𝐝𝐨𝐨𝐫 𝐀𝐫𝐞𝐧𝐚",
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

function Eventpack() {
  return (
    <div className="pt-[100px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center mb-4">
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Music Events
        </button>
        <Link to={"/Sport"}>
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Sports Events
        </button>
        </Link>
        <Link to={"/Festival"}>
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
          Festival Events
        </button>
        </Link>
        <Link to={"/Food"}>
        <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded">
          Food Events
        </button>
        </Link>
      </div>
      <EventComponent />
    </div>
  );
}

export default Eventpack;
