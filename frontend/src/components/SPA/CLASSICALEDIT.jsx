import React, { useState } from "react";

const CLASSICALEDIT = () => {
  const [services, setServices] = useState([
    { topicc: "RELAX AND REBALANCE", descriptionn: "Our relax and rebalance treatment begins with foot refliexology to restore your body's natural state of equilibrium by channeling energy from the reflex points of the feet. This aromatherapy massage will melt away trapped toxins and release tensions of the body followed by the customized facial to pamper your face.", Timee: "150 MINUTES", Pricee: "LKR 24,500" },
    { topicc: "DETOX AND REFRESH", descriptionn: " This is a full body exfoliation therapy that uses nourishing, deodorizing and fresh narikela (coconut) followed by a detoxifying mud wrap. This treatment will conclude with a warm stone massage to harness all the healing powers of the body, and warmth of natural, heated stones to release the accumilated tension from muscle tissues.", Timee: "150 MINUTES", Pricee: "LKR 25,500" },
  ]);

  const handleAddService = (topicc, descriptionn, Timee, Pricee) => {
    setServices([...services, { topicc, descriptionn, Timee, Pricee }]);
  };

  const handleEditService = (index, topicc, descriptionn, Timee, Pricee) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], topicc, descriptionn, Timee, Pricee };
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
                    value={service.topicc}
                    onChange={(e) =>
                      handleEditService(index, e.target.value, service.descriptionn, service.Timee, service.Pricee)
                    }
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <textarea
                    value={service.descriptionn}
                    onChange={(e) =>
                      handleEditService(index, service.topicc, e.target.value, service.Timee, service.Pricee)
                    }
                    rows={4}
                    style={{ width: "400px", resize: "vertical" }}
                  />
                </td>
           
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <input
                    value={service.Timee}
                     onChange={(e) =>
                    handleEditService(index, service.topicc, service.descriptionn, e.target.value, service.Pricee)
                       }
                    />
                 </td>

                 <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                  <input
                  value={service.Pricee}
                  onChange={(e) =>
                  handleEditService(index, service.topicc, service.descriptionn, service.Timee, e.target.value)
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

export default CLASSICALEDIT;