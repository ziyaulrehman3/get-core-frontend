import { useEffect, useState } from "react";
import axios from "axios";
import Label from "../Label";
import { RxCross2 } from "react-icons/rx";
import { GiRadialBalance } from "react-icons/gi";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { MdOutlineAutoDelete } from "react-icons/md";
import { LuCircleEqual } from "react-icons/lu";
import Input from "../Input";

import Passbook from "./Passbook";
export default function LoanDetails({
  setLoanDetailsFlag,
  setLoading,
  setActivePage,
}) {
  const [data, setData] = useState([]);
  const type = localStorage.getItem("loanType");

  useEffect(() => {
    async function ApiCall() {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const loanId = localStorage.getItem("loanId");
        const type = localStorage.getItem("loanType");
        const url = "http://localhost:3000/LoanDetails/" + loanId + "/" + type;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data.data);
        setData(response.data.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    ApiCall();
  }, []);

  async function DeleteLoan(id) {
    const response = window.confirm("Are you sure to Delete this Loan?");

    if (response) {
      setLoading(true);

      const token = localStorage.getItem("token");

      try {
        const url = `http://localhost:3000/${
          type == "single" ? "deleteSingleLoan" : "deleteEmiLoan"
        }/${id}`;

        const resp = await axios.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resp);

        alert("Loan Delete Success");
        setActivePage("dashboard");
      } catch (err) {
        console.log(err);
        alert(err.response.data.message);
      }

      setLoading(false);
    }
  }

  async function SettleLoan(id) {
    const response = window.confirm("Are you sure to Settle this Loan?");

    if (response) {
      setLoading(true);

      const token = localStorage.getItem("token");
      const type = localStorage.getItem("loanType");

      try {
        const url = `http://localhost:3000/${
          type == "single" ? "settleSingleLoan" : "settleEmiLoan"
        }/${id}`;

        const resp = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resp);

        alert("Loan Settle Success");
        setActivePage("dashboard");
      } catch (err) {
        console.log(err);
        alert("Loan not Settle");
      }

      setLoading(false);
    }
  }

  const [depositFlag, setDepositFlag] = useState(false);

  const [formData, setFormData] = useState({
    cusId: "",
    loanId: "",
    emiNo: "",
    desc: "",
    credit: 0,
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

  function resetForm() {
    setFormData({
      cusId: "",
      loanId: "",
      desc: "",
      emiNo: "",
      credit: 0,
    });
  }

  async function depositLoan() {
    console.log(formData);
    setLoading(true);
    const url = `http://localhost:3000/${
      type === "single" ? "depositSingleLoan" : "depositEmiLoan"
    }/${data._id}`;

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
      alert("Amount Deposit Success");
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }

    setLoading(false);
  }

  const itemsList = {
    cusId: "Customer ID",
    name: "Name",
    loanStatus: "Status",
    dueDate: "Due Date",
    _id: "Loan ID",
    loanAmount: "Loan Amount",
    loanDate: "Loan Date",
    intrestAmount: "Intrest Amount",
    balance: "Balance",
    intrestRate: "Intrest Rate",
    numberOfDepositEmis: "Deposit EMIs",
    numberOfEmis: "Total EMIs",
    duePrincipal: "Due Principal",
    dueAmount: "Due Amount",
  };
  return (
    <>
      <div
        className={`${
          depositFlag ? "" : "hidden"
        } h-lvh w-full lg:w-[80%] z-20 fixed top-0 right-0 bg-gray-200/90 flex items-center justify-center `}
      >
        <RxCross2
          onClick={() => setDepositFlag(false)}
          className="absolute top-4 right-4 w-6 h-6 cursor-pointer bg-black text-white rounded-full"
        />

        <div className="w-[90%] lg:w-[40%] h-[50%] bg-white rounded-xl p-8 flex flex-col items-center justify-around">
          <Input
            name="credit"
            placeholder="Amount"
            type="text"
            value={formData.credit}
            onChange={handleChange}
          />

          <div className={`${type == "single" ? "hidden" : ""} w-full`}>
            <Input
              name="emiNo"
              placeholder="Emi No"
              type="text"
              value={formData.emiNo}
              onChange={handleChange}
            />
          </div>

          <div className={`${type == "single" ? "" : "hidden"} w-full`}>
            <Input
              name="desc"
              placeholder="Description"
              type="text"
              value={formData.desc}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={depositLoan}
            className="min-h-12 w-full cursor-pointer w-full rounded-lg focus:outline-none bg-gradient-to-br from-[#A480F0] to-[#35A8E7] text-white text-lg font-medium hover:brightness-110"
          >
            Deposit Payment
          </button>
        </div>
      </div>

      <div className="fixed top-0 right-0 w-full md:w-[80%]  h-lvh bg-gray-100/80 z-10 flex justify-center items-center ">
        <button
          onClick={() => setLoanDetailsFlag(false)}
          className="text-lg w-6 aspect-square bg-black flex justify-center items-center text-white rounded-full absolute top-2 right-2"
        >
          <RxCross2 />
        </button>

        <div className="rounded-2xl w-[90%] bg-white opacity-100 h-[95%] flex flex-col gap-4 py-4 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="grid grid-cols-2 gap-6 px-4">
            {["loanAmount", "balance"].map((item) => (
              <div
                className={`rounded-xl h-24 px-[5%] border-[2px] ${
                  item == "loanAmount" ? "border-blue-600" : "border-red-600"
                }`}
              >
                <h1 className="text-gray-600 font-medium">
                  {itemsList?.[item]}
                </h1>
                <h1 className="flex flex-row items-center">
                  <span
                    className={`${
                      item == "loanAmount" ? "text-blue-600" : "text-red-600"
                    } text-xl pr-2`}
                  >
                    {item == "loanAmount" ? (
                      <GiRadialBalance />
                    ) : (
                      <IoSwapVerticalOutline />
                    )}
                  </span>
                  <span className="text-2xl md:text-5xl">
                    {data?.[item] ?? data["dueAmount"]}
                  </span>
                </h1>
              </div>
            ))}
          </div>
          <div
            className={`w-full flex flex-row justify-around ${
              data.loanStatus ? "block" : "hidden"
            }`}
          >
            <button
              onClick={() => DeleteLoan(data?._id)}
              className="w-[45%] mx-auto h-10 text-white text-md rounded-xl bg-red-600 flex flex-row gap-2 justify-center items-center font-medium border-[2px] border-red-600 hover:brightness-110 cursor-pointer"
            >
              <span>
                <MdOutlineAutoDelete />
              </span>
              <span>Delete this Loan</span>
            </button>

            <button
              onClick={() => setDepositFlag(true)}
              className="w-[45%] mx-auto h-10 text-white text-md rounded-xl bg-green-600 flex flex-row gap-2 justify-center items-center font-medium border-[2px] border-green-600 hover:brightness-110 cursor-pointer"
            >
              <span>
                <LuCircleEqual />
              </span>
              <span>Deposit Amount</span>
            </button>

            {/* <button
            onClick={() => SettleLoan(data?._id)}
            className="w-[45%] mx-auto h-10 text-white text-md rounded-xl bg-green-600 flex flex-row gap-2 justify-center items-center font-medium border-[2px] border-green-600 hover:brightness-110 cursor-pointer"
          >
            <span>
              <LuCircleEqual />
            </span>
            <span>Settle Loan</span>
          </button> */}
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4 px-4">Loan Details</h2>

            <div className="px-4 border-t-[1px] border-b-[1px] text-xs md:text-base">
              <div className="grid grid-cols-2 ">
                {[
                  "name",
                  "cusId",
                  "_id",
                  ...Object.keys(data)?.filter(
                    (item) =>
                      ![
                        "passbook",
                        "__v",
                        "name",
                        "cusId",
                        "_id",
                        "lastIntrestApply",
                        "emis",
                      ].includes(item)
                  ),
                ].map((item) => (
                  <label className="font-medium text-md grid grid-cols-2">
                    <span className="text-gray-600">{itemsList?.[item]} </span>
                    <span>
                      <span>: </span>
                      {["dueDate", "loanDate"]?.includes(item)
                        ? new Date(data[item]).toLocaleDateString("en-GB")
                        : item !== "loanStatus"
                        ? data[item]
                        : data[item]
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <Passbook data={type == "single" ? data?.passbook : data?.emis} />
        </div>
      </div>
    </>
  );
}
