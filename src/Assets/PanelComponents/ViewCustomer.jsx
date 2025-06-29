import { lazy, Suspense } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";

import ButtonViewCustomer from "./ViewCustomer/ButtonViewCustomer";

const CustomerId = lazy(() => import("./ViewCustomer/CustomerId"));

export default function ViewCustomer({ setLoading = { setLoading } }) {
  const [customerInfo, setCustomerInfo] = useState([]);

  const fetchCustomer = async (customerId) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const url =
      "https://getcore-backend.onrender.com/viewCustumer/" + customerId;

    console.log(customerId);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newData = response.data.data;
      const {
        _id,
        __v,
        address,
        district,
        pinCode,
        mobile,
        emiLoanStack,
        email,
        name,
        singleLoanStack,
        ...customerData
      } = newData;

      const newFiles = {
        name,
        address:
          newData.address + " " + newData.district + " " + newData.pinCode,
        mobile: newData.mobile + " " + newData.email ?? "",
      };

      console.log(newData);

      setCustomerInfo({ ...newFiles, ...customerData });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`w-full md:w-[80%] px-[5%] py-5 flex flex-col gap-4 overflow-auto`}
    >
      <Suspense fallback={<div>Loading....</div>}>
        <CustomerId fetchCustomer={fetchCustomer} setLoading={setLoading} />
      </Suspense>

      <div className="flex flex-col gap-3">
        {Object.entries(customerInfo)?.map(([key, value]) => {
          return (
            <ButtonViewCustomer
              key={key}
              name={key}
              value={typeof value === "object" ? JSON.stringify(value) : value}
              icon={<IoCallOutline />}
            />
          );
        })}
      </div>
    </div>
  );
}
