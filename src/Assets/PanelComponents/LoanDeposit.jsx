import axios from "axios";
import Input from "./Input";
import { useState, useEffect } from "react";

export default function LoanDeposit({ setLoading }) {
  const [type, setType] = useState("single");
  const [customerInfo, setCustomerInfo] = useState([]);

  const [formData, setFormData] = useState({
    cusId: "",
    loanId: "",
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
      credit: 0,
    });
  }
  useEffect(() => {
    resetForm();
  }, [type]);

  const [list, setList] = useState([]);

  useEffect(() => {
    const ApiCall = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `https://getcore-backend.onrender.com/custumerList`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        // console.log(response.data);
        setList(response.data.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    ApiCall();
  }, []);

  const fetchCustomer = async (customerId) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const url =
      `https://getcore-backend.onrender.com/viewCustumer/` + formData.cusId;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data.data);

      setCustomerInfo(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (formData.cusId) {
      fetchCustomer();
    }
  }, [formData.cusId]);

  async function depositLoan() {
    // console.log(formData);
    setLoading(true);
    const url = `https://getcore-backend.onrender.com/${
      type === "single" ? "depositSingleLoan" : "depositEmiLoan"
    }/${formData.loanId}`;

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

  return (
    <div
      className={`w-full md:w-[50%] mx-auto px-[5%] py-5 flex flex-col gap-4 overflow-auto`}
    >
      <h1 className="text-xl md:text-2xl  font-semibold">Deposit Payment</h1>

      <label className="font-medium">Loan Type</label>

      <div className="flex flex-row gap-6 md:gap-20">
        <label className="font-semibold text-md">
          <input
            type="radio"
            className="mr-2"
            value="single"
            checked={type === "single"}
            onClick={(e) => setType(e.target.value)}
          />
          Single Loan
        </label>

        <label className="font-semibold text-md">
          <input
            type="radio"
            className="mr-2"
            value="emi"
            checked={type === "emi"}
            onClick={(e) => setType(e.target.value)}
          />
          EMI Loan
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-0">
          <label className="block text-md font-semibold text-gray-600 ">
            Customer ID
          </label>

          <select
            value={formData.cusId}
            name="cusId"
            onChange={handleChange}
            className="border-[1px] border-gray-200 focus:outline-none rounded-lg w-full h-12 px-2 "
          >
            <option value="" className="w-[100%]">
              Select Customer
            </option>
            {list.map((item) => {
              return (
                <option value={String(item._id)}>
                  {item.name} ({item._id})
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-0">
          <label className="block text-md font-semibold text-gray-600 ">
            Loan ID
          </label>

          <select
            value={formData.loanId}
            name="loanId"
            onChange={handleChange}
            className="border-[1px] border-gray-200 focus:outline-none rounded-lg w-full h-12 px-2 "
          >
            <option value="" className="w-[100%]">
              Select Loan
            </option>

            {formData.cusId &&
              (type === "single"
                ? customerInfo.singleLoanStack
                : customerInfo.emiLoanStack
              )?.map((item) => {
                return <option value={item}>{item}</option>;
              })}
          </select>
        </div>

        <Input
          name="emiNo"
          placeholder="EMI No"
          type="text"
          value={formData.emiNo}
          onChange={handleChange}
          className={`${type == "single" ? "hidden" : ""}`}
        />

        <Input
          name="credit"
          placeholder="Amount"
          type="text"
          value={formData.credit}
          onChange={handleChange}
        />

        <Input
          name="desc"
          placeholder="Description"
          type="text"
          value={formData.desc}
          onChange={handleChange}
          className={`${type == "single" ? "" : "hidden"}`}
        />
      </div>

      <button
        onClick={depositLoan}
        className="min-h-12 w-full cursor-pointer w-full rounded-lg focus:outline-none bg-gradient-to-br from-[#A480F0] to-[#35A8E7] text-white text-lg font-medium hover:brightness-110"
      >
        Deposit Payment
      </button>
    </div>
  );
}
