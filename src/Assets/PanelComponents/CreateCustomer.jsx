import React, { useState } from "react";
import Input from "./Input";
import FileUpload from "./fileUpload";

import axios from "axios";

function CreateCustomer({ setLoading }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    district: "Moradabad",
    pinCode: 244001,
    panNo: "",
    aadharNo: "",
    bankName: "",
    accountNo: "",
    bankIfsc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [files, setFiles] = useState({
    panUrl: null,
    aadharUrl: null,
    bankUrl: null,
    photoUrl: null,
    otherUrl: null,
  });

  const handleFileChange = (key) => (e) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const token = localStorage.getItem("token");

    const newFormData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      newFormData.append(key, value);
    }

    for (const [key, value] of Object.entries(files)) {
      if (value) {
        newFormData.append(key, value);
      }
    }

    // for (const key in files) {
    //   if (!files[key]) {
    //     console.warn(`File ${key} is missing`);
    //     continue;
    //   }
    //   console.log(`Uploading ${key}:`, files[key]);
    // }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://getcore-backend.onrender.com/createCustumer",
        newFormData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setFormData({
        name: "",
        mobile: "",
        email: "",
        address: "",
        district: "Moradabad",
        pinCode: 244001,
        panNo: "",
        aadharNo: "",
        bankName: "",
        accountNo: "",
        bankIfsc: "",
      });
      setFiles({
        panUrl: null,
        aadharUrl: null,
        bankUrl: null,
        photoUrl: null,
        otherUrl: null,
      });

      alert("Customer create Succesfully");

      // console.log(response);
    } catch (err) {
      alert("Some Error Occure");

      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div
      className={`w-full md:w-[80%] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
    >
      <div className="text-xl md:text-2xl text-center text-black mb-6 mt-5 font-bold">
        <h1>Create a new customer profile</h1>
      </div>

      <div className="m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <Input
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
          />

          <Input
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
          />

          <Input
            name="panNo"
            placeholder="PAN"
            value={formData.panNo}
            onChange={handleChange}
          />

          <Input
            name="aadharNo"
            placeholder="Aadhar"
            value={formData.aadharNo}
            onChange={handleChange}
          />

          <Input
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleChange}
          />

          <Input
            name="accountNo"
            placeholder="Account Number"
            value={formData.accountNo}
            onChange={handleChange}
          />

          <Input
            name="bankIfsc"
            placeholder="IFSC Code"
            value={formData.bankIfsc}
            onChange={handleChange}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-5 mb-8 ml-5">Upload Document</h2>
      <div className="mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-full mx-auto mt-5 px-5">
          <FileUpload
            label="Photo"
            file={files.photoUrl}
            onFileChange={handleFileChange("photoUrl")}
          />
          <FileUpload
            label="PAN"
            file={files.panUrl}
            onFileChange={handleFileChange("panUrl")}
          />
          <FileUpload
            label="Aadhar"
            file={files.aadharUrl}
            onFileChange={handleFileChange("aadharUrl")}
          />
          <FileUpload
            label="Bank Passbook"
            file={files.bankUrl}
            onFileChange={handleFileChange("bankUrl")}
          />
          <FileUpload
            label="Other Docs"
            file={files.otherUrl}
            onFileChange={handleFileChange("otherUrl")}
          />
        </div>
      </div>

      <div className="flex item-center justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="  m-5 bg-blue-900 w-max-full w-60  h-10 text-white rounded-md"
        >
          Create Customer Profile
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
