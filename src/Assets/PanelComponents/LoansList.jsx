import { useState } from "react";
import axios from "axios";
import { LoanPdf } from "../PdfComp/pdfGeneration";

export default function LoansList() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    type: "",
  });

  function handelChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function ApiCall() {
    console.log(formData);
    try {
      const response = await axios.post(
        "https://getcore-backend.onrender.com/loansListPdf",
        formData
      );

      // console.log(response);
      LoanPdf(response.data.data, formData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full  lg:w-[80%] h-lvh flex flex-col items-center gap-4">
      <h1 className="text-xl md:text-2xl font-bold text-center">Loans List</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <div className="flex flex-col gap-2">
          <label>From Date:</label>
          <input
            onChange={handelChange}
            type="date"
            name="from"
            className="border-[2px] rounded-md border-gray-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>To Date:</label>
          <input
            onChange={handelChange}
            type="date"
            name="to"
            className="border-[2px] rounded-md border-gray-200"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="flex gap-2 ">
          <input
            onClick={handelChange}
            name="type"
            type="radio"
            value="single"
          />
          <label>Single</label>
        </div>
        <div className="flex gap-2 ">
          <input onClick={handelChange} name="type" type="radio" value="emi" />
          <label>Emi</label>
        </div>
      </div>

      <button
        // onClick={() => {
        //   if (currentOption) {
        //     fetchCustomer(currentOption);
        //   }
        // }}
        onClick={ApiCall}
        className="cursor-pointer h-12 w-[80%] md:w-32 rounded-lg focus:outline-none bg-gradient-to-b from-[#A480F0] to-[#35A8E7] text-white text-lg font-medium hover:brightness-110"
      >
        Download
      </button>
    </div>
  );
}
