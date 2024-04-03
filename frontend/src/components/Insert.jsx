import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllPayData = () => {
    const [payData, setPayData] = useState([]);

    useEffect(() => {
        const fetchPayData = async () => {
            try {
                const response = await axios.get("/pay");
                setPayData(response.data);
            } catch (error) {
                console.error('Error fetching pay data:', error);
            }
        };
        fetchPayData();
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">All Pay Data</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4">User ID</th>
                            <th className="py-2 px-4">Amount</th>
                            <th className="py-2 px-4">Payment Method</th>
                            <th className="py-2 px-4">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payData.map((pay) => (
                            <tr key={pay._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4">{pay.userid}</td>
                                <td className="py-2 px-4">{pay.amount}</td>
                                <td className="py-2 px-4">{pay.pmethod}</td>
                                <td className="py-2 px-4">{pay.pstatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPayData;
