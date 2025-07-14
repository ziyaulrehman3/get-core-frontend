import { useState, useEffect } from "react";
import axios from "axios";

export default function RecentTransaction({ setLoading }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ApiCall() {
      setLoading(true);

      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://getcore-backend.onrender.com/RecentTransaction",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    }

    ApiCall();
  }, []);
  return (
    <div className={`w-full md:w-[80%] p-5 flex flex-col gap-4 overflow-auto`}>
      <h1 className="text-xl md:text-2xl  font-semibold text-blue-600">
        Recent Transaction
      </h1>

      <div className="grid grid-cols-6 font-bold bg-gray-200 p-2 rounded  text-xs md:text-base">
        <p>Loan Id</p>
        <p>Date</p>
        <p>Description</p>
        <p>Credit</p>
        <p>Debit</p>
        <p>Balance</p>
      </div>
      {data.map((entry, index) => (
        <div>
          <div
            key={index}
            className="grid grid-cols-6 p-2 border-b text-xs md:text-base"
          >
            <p className="font-semibold text-blue-600">{entry.loanId}</p>
            <p>
              {new Date(entry["transaction"].date).toLocaleDateString("en-GB")}
            </p>
            <p>{entry["transaction"].desc}</p>
            <p className="text-green-600">₹{entry["transaction"].credit}</p>
            <p className="text-red-600">₹{entry["transaction"].debit}</p>
            <p className="font-medium">₹{entry["transaction"].balance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
