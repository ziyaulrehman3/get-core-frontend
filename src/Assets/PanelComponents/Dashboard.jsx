import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";
import LoanDetails from "./ViewLoan/LoanDetails";

// Required: Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard({ className, setLoading, setActivePage }) {
  function setLoanId(id, type) {
    localStorage.setItem("loanId", id);
    localStorage.setItem("loanType", type);
  }

  const [loanDetailsFlag, setLoanDetailsFlag] = useState(false);

  useEffect(() => {
    console.log(loanDetailsFlag);
  }, [loanDetailsFlag]);

  const [chartData, setChartData] = useState({
    singleActiveLoan: 0,
    emiActiveLoan: 0,
    totalSingleLoans: 0,
    totalEmiLoans: 0,
  });

  const [customerList, setCustomerList] = useState([]);
  const [recentTransaction, setRecentTransaction] = useState([]);
  const [todayCollection, setTodayCollection] = useState(0);

  const data = {
    labels: ["Single Loans", "EMI Loans"],
    datasets: [
      {
        label: "Votes",
        data: [chartData?.singleActiveLoan, chartData?.emiActiveLoan],
        backgroundColor: ["#f87171", "#60a5fa"],
      },
    ],
  };

  useEffect(() => {
    async function ApiCall() {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://getcore-backend.onrender.com/Dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setChartData(response.data.data);
        // console.log(response);

        const response2 = await axios.get(
          `https://getcore-backend.onrender.com/custumerList`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCustomerList(response2.data.data);

        const response3 = await axios.get(
          `https://getcore-backend.onrender.com/RecentTransaction`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRecentTransaction(response3.data.data);

        // console.log(response3);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    ApiCall();
  }, []);

  useEffect(() => {
    if (recentTransaction) {
      const todayDate = new Date().toLocaleDateString("en-GB");
      console.log("Ziya uo");

      const total = recentTransaction.reduce((sum, item) => {
        return new Date(item["transaction"].date).toLocaleDateString("en-GB") ==
          todayDate
          ? sum + Number(item["transaction"].credit)
          : sum;
      }, 0);

      setTodayCollection(total);
    }
  }, [recentTransaction]);

  const colorCombo = ["text-green-600", "text-blue-600", "text-red-600"];

  return (
    <div
      className={`w-full md:w-[80%] grid grid-cols-3 md:grid-cols-6 gap-2 md:grid-rows-4 p-4 overflow-y-auto`}
    >
      <div className="rounded-xl mx-auto p-2 h-full aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Overall Customers:"}
        </h1>
        <h1 className="text-lg lg:text-4xl ">{customerList?.length}</h1>
      </div>

      <div className="rounded-xl mx-auto p-2 h-full aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"EMI Loans:"}
        </h1>
        <h1 className="text-lg lg:text-4xl ">
          {chartData?.emiActiveLoan}/{chartData?.totalEmiLoans}
        </h1>
      </div>

      <div className="rounded-xl mx-auto p-2 h-full aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Single Loans:"}
        </h1>
        <h1 className="text-lg lg:text-4xl ">
          {chartData?.singleActiveLoan}/{chartData?.totalSingleLoans}
        </h1>
      </div>

      <div className="rounded-xl p-2 mx-auto aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          Today's Collection
        </h1>
        <h1 className="text-lg lg:text-4xl ">₹ {todayCollection}</h1>
      </div>

      <div className="rounded-xl p-2 mx-auto aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Total Outstanding (EMI):"}
        </h1>
        <h1 className="text-lg lg:text-4xl ">{chartData?.emiTotalDueAmount}</h1>
      </div>

      <div className="rounded-xl p-2 mx-auto aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Total Outstanding (Single):"}
        </h1>
        <h1 className="text-lg lg:text-4xl">{chartData?.emiTotalDueAmount}</h1>
      </div>

      <div className="rounded-xl p-2 mx-auto aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Total Disworsment (EMI):"}
        </h1>
        <h1 className="text-lg lg:text-4xl">{chartData?.emiDistAmount}</h1>
      </div>

      <div className="rounded-xl p-2 mx-auto aspect-square font-semibold bg-gradient-to-br from-blue-300 to-pink-300 flex flex-col justify-around items-center  text-white">
        <h1 className="text-xs mx-auto lg:text-lg text-center">
          {"Total Disworsment (Single):"}
        </h1>
        <h1 className="text-lg lg:text-4xl">{chartData?.singleDistAmount}</h1>
      </div>

      <div className="md:col-start-5 md:row-start-1 col-span-3 md:col-span-2 row-span-2 flex justify-center items-center">
        <div className="h-full aspect-square">
          {chartData && <Doughnut data={data} />}
        </div>
      </div>

      <div className=" col-span-3 row-span-2 md:row-start-3 border-[1px] border-gray-200">
        <h1 className="text-center text-xl font-semibold underline mb-2">
          Single Loan:
        </h1>
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
          <div className="grid grid-cols-5 font-bold bg-gray-200 p-2 rounded  text-xs md:text-base">
            <p>ID</p>
            <p>Amount</p>
            <p>Intrest</p>
            <p>Balance</p>
            <p>Details</p>
          </div>

          {chartData?.single?.map((entry, index) => {
            return (
              <div
                className={`w-full grid grid-cols-5 p-1 ${
                  index % 2 == 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                {Object.keys(entry).map((cKey, index) => (
                  <span className={`${colorCombo[index - 1]}`}>
                    {entry[cKey]}
                  </span>
                ))}

                <button
                  onClick={() => {
                    setLoanId(entry._id, "single");
                    setLoanDetailsFlag(true);
                  }}
                  className="rounded-xl h-8 border-[1px] border-black col-span-1  w-[90%]  ml-1 cursor-pointer hover:bg-black hover:text-white"
                >
                  View
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {loanDetailsFlag && (
        <LoanDetails
          setLoanDetailsFlag={setLoanDetailsFlag}
          setActivePage={setActivePage}
          setLoading={setLoading}
        />
      )}
      <div className=" col-span-3 row-span-2 row-start-3 border-[1px] border-gray-200">
        <h1 className="text-center text-xl font-semibold underline mb-2">
          EMIs Loan:
        </h1>
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
          <div className="grid grid-cols-5 font-bold bg-gray-200 p-2 rounded  text-xs md:text-base">
            <p>ID</p>
            <p>Amount</p>
            <p>Intrest %</p>
            <p>Balance</p>
            <p>Details</p>
          </div>

          {chartData?.emi?.map((entry, index) => {
            return (
              <div
                className={`w-full grid grid-cols-5 p-1 ${
                  index % 2 == 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                {Object.keys(entry).map((cKey, index) => (
                  <span className={`${colorCombo[index - 1]} overflow-hidden`}>
                    {entry[cKey]}
                  </span>
                ))}

                <button
                  onClick={() => {
                    setLoanId(entry._id, "emi");
                    setLoanDetailsFlag(true);
                  }}
                  className="rounded-xl h-8 border-[1px] border-black col-span-1  md:w-[90%]  ml-1 cursor-pointer hover:bg-black hover:text-white"
                >
                  View
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
