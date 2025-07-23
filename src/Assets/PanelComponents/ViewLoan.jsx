import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

import Header from "./ViewLoan/Header";
import LoanSlice from "./ViewLoan/LoanSlice";

const LoanDetails = lazy(() => import("./ViewLoan/LoanDetails"));

export default function ViewLoan({ setLoading, setActivePage }) {
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [originalList, setOriginalList] = useState([]);
  const [list, setList] = useState(originalList);
  const [loanDetailsFlag, setLoanDetailsFlag] = useState(false);

  useEffect(() => {
    async function CallApi() {
      console.log("Calling Ziya");
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/LoanList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data);
        setOriginalList(response.data.data);
        setList(response.data.data);
      } catch (err) {
        alert("Can not Get New Loan List");
      }

      setLoading(false);
    }

    CallApi();
  }, []);

  useEffect(() => {
    const tempList = originalList.filter((item) => {
      if (status == "all") {
        if (type == "all" || item.loanType == type) {
          return true;
        }
      } else if (status == "Active" && item.loanStatus == true) {
        if (type == "all" || item.loanType == type) {
          return true;
        }
      } else if (status == "Closed" && item.loanStatus == false) {
        if (type == "all" || item.loanType == type) {
          return true;
        }
      }
    });

    setList(tempList);
  }, [type, status]);

  return (
    <div
      className={`w-full md:w-[80%] px-[5%] py-5 flex flex-col gap-4 overflow-auto`}
    >
      <h1 className="text-xl md:text-2xl  font-semibold">View Loan</h1>

      {loanDetailsFlag && (
        <LoanDetails
          setLoanDetailsFlag={setLoanDetailsFlag}
          setActivePage={setActivePage}
          setLoading={setLoading}
        />
      )}

      <div className=" rounded-xl w-full h-full border-[1px]  bg-gray-50 py-3 overflow-hidden ">
        <Header
          type={type}
          setType={setType}
          status={status}
          setStatus={setStatus}
        />

        <div className="h-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {list?.map((item, index) => {
            return (
              <LoanSlice
                key={item._id}
                index={index}
                item={item}
                setLoanDetailsFlag={setLoanDetailsFlag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
