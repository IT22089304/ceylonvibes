import React, { useState } from "react";

const SPAEDITMENU = () => {
  const [services, setServices] = useState([
    { topic: "SAMVAHANA", description: "Classical Ayurveda full body massages using herbal medicated oils help balance body energies. This massage is extremely beneficial in relieving body aches pains and general fatigue.", Time: "90 MINUTES", Price: "LKR 17,000" },
    { topic: "SHIRSHABYANGA", description: " Traditional Ayurvedic head, neck and shoulder massage using selected herbal oils which relieves insomnia, headaches and nourishes ears, eyes and hair.", Time: "15 MINUTES", Price: "LKR 7,000" },
    { topic: "UDVARTANA", description: "This is a unique treatment where dry herbal powders are massaged into your skin using upward movement. It is effective in reducing cellulite and reducing bodyweight by unwanted fat.", Time: "60 MINUTES", Price: "LKR 15,500" },
  ]);

  const handleAddService = (topic, description, Time, Price) => {
    setServices([...services, { topic, description, Time, Price }]);
  };

  const handleEditService = (index, topic, description, Time, Price) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], topic, description, Time, Price };
    setServices(updatedServices);
  };

  const handleDeleteService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  return (
    <div style={{ background: "#FEF3C7", padding: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h4 className="text-3xl font-bold mb-2 text-center">
          Edit Ayurvedic SPA Menu
        </h4>
        <br></br>
        <br></br>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%', backgroundColor: "#ffffff" }}>

          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
              <th style={{ border: '1px solid black', padding: '8px', width: '150px' }}>Time</th>
              <th style={{ border: '1px solid black', padding: '8px', width: '150px' }}>Price</th>
              <th style={{ border: '1px solid black', padding: '8px', width: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <input
                    value={service.topic}
                    onChange={(e) =>
                      handleEditService(index, e.target.value, service.description, service.Time, service.Price)
                    }
                  />
                </td>

                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <textarea
                    value={service.description}
                    onChange={(e) =>
                      handleEditService(index, service.topic, e.target.value, service.Time, service.Price)
                    }
                    rows={4}
                    style={{ width: "400px", resize: "vertical" }}
                  />
                </td>

                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                 <input
                  value={service.Time}
                   onChange={(e) =>
                  handleEditService(index, service.topic, service.description, e.target.value, service.Price)
                  }
                  />
                  </td>

                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                 <input
                 value={service.Price}
                 onChange={(e) =>
                   handleEditService(index, service.topic, service.description, service.Time, e.target.value)
                  }
                 />
                </td>

                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                  <button className="bg-[#EF4444] hover:bg-[#B91C1C] text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" style={{ marginRight: '5px' }} onClick={() => handleDeleteService(index)}>Delete</button>
                  <br></br>
                  <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => console.log("Edit clicked for service ID:", service.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="bg-[#3B82F6] hover:bg-[#1E40AF] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleAddService("", "", "", "")}>ADD</button>
      </div>
    </div>
  );
}

export default SPAEDITMENU;