import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";

export default function CreateLoan({ setLoading }) {
  const [type, setType] = useState("single");
  const [mode, setMode] = useState("");

  const [formData, setFormData] = useState({
    cusId: "",
    loanAmount: "",
    intrestAmount: "",
    intrestRate: "",
    totalEmis: "",
    firstEmiDate: "",
    mode: "",
    dueDate: "",
  });

  function handleChange(e) {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  }

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

  function resetForm() {
    setFormData({
      cusId: "",
      loanAmount: "",
      intrestAmount: "",
      intrestRate: "",
      totalEmis: "",
      firstEmiDate: "",
      mode: "",
    });
  }
  useEffect(() => {
    resetForm();
  }, [type]);

  async function ApiCall() {
    const url = `https://getcore-backend.onrender.com/${
      type == "single" ? "createSingleLoan" : "createEmiLoan"
    }/${formData.cusId}`;

    const token = localStorage.getItem("token");
    setLoading(true);

    try {
      const response = await axios.post(
        url,
        { ...formData, mode: mode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Loan Added Succesfully");
      // console.log(response.data);
    } catch (err) {
      alert("Loan Not Add Succesfully");
      console.log(err);
    }
    resetForm();
    setLoading(false);
  }

  return (
    <div
      className={`w-full md:w-[50%] mx-auto px-[5%] py-5 flex flex-col gap-4 overflow-auto`}
    >
      <h1 className="text-xl md:text-2xl  font-semibold">Create New Loan</h1>

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

        <div
          className={`flex flex-row gap-6 md:gap-20 ${
            type != "emi" ? "hidden" : ""
          }`}
        >
          <label className="font-semibold text-md">
            <input
              type="radio"
              className="mr-2"
              value="weekly"
              checked={mode === "weekly"}
              onClick={(e) => setMode(e.target.value)}
            />
            Weekly
          </label>

          <label className="font-semibold text-md">
            <input
              type="radio"
              className="mr-2"
              value="monthly"
              checked={mode === "monthly"}
              onClick={(e) => setMode(e.target.value)}
            />
            Monthly
          </label>
        </div>

        <Input
          name="firstEmiDate"
          placeholder="First Emi Date"
          className={`${type != "emi" ? "hidden" : ""}`}
          type="date"
          value={formData.firstEmiDate}
          onChange={handleChange}
        />

        <Input
          name="dueDate"
          placeholder="Due Date"
          className={`${type == "emi" ? "hidden" : ""}`}
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <Input
          name="intrestRate"
          placeholder="Intrest Rate"
          className={`${type != "emi" ? "hidden" : ""}`}
          type="text"
          value={formData.intrestRate}
          onChange={handleChange}
        />
        <Input
          name="loanAmount"
          placeholder="Loan Amount"
          type="text"
          value={formData.loanAmount}
          onChange={handleChange}
        />
        <Input
          name="totalEmis"
          placeholder="Total Emis"
          type="text"
          className={`${type != "emi" ? "hidden" : ""}`}
          value={formData.totalEmis}
          onChange={handleChange}
        />
        <Input
          name="intrestAmount"
          placeholder="Intrest Amount"
          className={`${type != "single" ? "hidden" : ""}`}
          type="text"
          value={formData.intrestAmount}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={ApiCall}
        className="min-h-12 w-full cursor-pointer w-full rounded-lg focus:outline-none bg-gradient-to-br from-[#A480F0] to-[#35A8E7] text-white text-lg font-medium hover:brightness-110"
      >
        Create Loan
      </button>
    </div>
  );
}
