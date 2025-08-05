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
  const [search, setSearch] = useState("");
  const [searchDetails, setSearchDetails] = useState({});

  useEffect(() => {
    async function CallApi() {
      // console.log("Calling Ziya");
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://getcore-backend.onrender.com/LoanList`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data.data);
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

  useEffect(() => {
    console.log(search);
    const tempList = list.filter((item) => {
      return item._id == search;
    });
    console.log(tempList);
    setSearchDetails(tempList[0]);
  }, [search]);

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
          setSearch={setSearch}
          search={search}
        />

        <div className="h-full pt-2 md:pt-4 pb-12 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {search ? (
            searchDetails ? (
              <LoanSlice
                key={searchDetails?._id}
                index={1}
                item={searchDetails}
                setLoanDetailsFlag={setLoanDetailsFlag}
              />
            ) : (
              ""
            )
          ) : (
            list?.map((item, index) => {
              return (
                <LoanSlice
                  key={item._id}
                  index={index}
                  item={item}
                  setLoanDetailsFlag={setLoanDetailsFlag}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
