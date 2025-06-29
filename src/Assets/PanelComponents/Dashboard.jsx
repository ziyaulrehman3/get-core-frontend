import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

// Required: Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ className }) {
  const [chartData, setChartData] = useState({
    singleActiveLoan: 0,
    emiActiveLoan: 0,
  });

  const data = {
    labels: ["Single Loans", "EMI Loans"],
    datasets: [
      {
        label: "Votes",
        data: [chartData.singleActiveLoan, chartData.emiActiveLoan],
        backgroundColor: ["#f87171", "#60a5fa"],
      },
    ],
  };

  useEffect(() => {
    async function ApiCall() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3000/Dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setChartData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }

    ApiCall();
  });

  return (
    <div className={`w-full md:w-[80%] mt-10 `}>
      {/* <div className="h-60">{chartData && <Doughnut data={data} />}</div> */}
      <div className="w-[60%] grid grid-cols-3 gap-4 px-[5%]">
        <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-300 to-pink-300"></div>
        <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-200 to-blue-300"></div>
        <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-300 to-pink-300"></div>
      </div>
    </div>
  );
}
