import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Required: Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ className }) {
  const data = {
    labels: ["Red", "Blue", "Green"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: ["#f87171", "#60a5fa", "#facc15"],
      },
    ],
  };

  return (
    <div className={`w-full md:w-[80%]`}>
      <div className="w-[20%]">
        <Doughnut data={data} />{" "}
      </div>
    </div>
  );
}
