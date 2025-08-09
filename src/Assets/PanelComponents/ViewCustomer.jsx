import { lazy, Suspense, useState, useEffect } from "react";
import axios from "axios";
import { IoCallOutline } from "react-icons/io5";
import {
  MdEmail,
  MdPerson,
  MdHome,
  MdCreditCard,
  MdAccountBalance,
  MdInsertDriveFile,
} from "react-icons/md";
import EditModal from "./ViewCustomer/EditModal";
import ButtonViewCustomer from "./ViewCustomer/ButtonViewCustomer";

const CustomerId = lazy(() => import("./ViewCustomer/CustomerId"));

export default function ViewCustomer({ setLoading }) {
  const defaultCustomerFields = {
    aadharNo: "",
    aadharUrl: "",
    accountNo: "",
    address: "",
    bankIfsc: "",
    bankName: "",
    mobile: "",
    name: "",
    otherUrl: "",
    panNo: "",
    panUrl: "",
    photoUrl: "",
    email: "", // <-- Add this line
    // add any other fields your backend expects
  };
  const [customerInfo, setCustomerInfo] = useState(defaultCustomerFields);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [customerId, setCustomerId] = useState(null);
  const [changedField, setChangedField] = useState(null); // Track which field was changed

  // Reset edit state when customerId changes ( when a new customer is fetched)
  useEffect(() => {
    setEditField(null);
    setEditValue("");
    setChangedField(null);
  }, [customerId]);

  const fetchCustomer = async (customerId) => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const url =
      "https://getcore-backend.onrender.com/viewCustumer/" + customerId;

    // console.log("Fetching customerId:", customerId);

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
        mobile: newData.mobile ?? "",
        email: newData.email ?? "",
      };

      // console.log("Setting customerInfo:", {
      //   ...defaultCustomerFields,
      //   ...newFiles,
      //   ...customerData,
      // });
      setCustomerInfo({
        ...defaultCustomerFields,
        ...newFiles,
        ...customerData,
      });
      setCustomerId(newData._id);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Handler for edit button
  const handleEdit = (field) => {
    setEditField(field);
    setEditValue(customerInfo[field] ?? "");
  };

  // Handler for saving edited value
  const handleSave = (newVal) => {
    setCustomerInfo((prev) => ({ ...prev, [editField]: newVal }));
    setChangedField(editField); // Mark which field was changed
    setEditField(null);
  };

  // Submit handler
  const handleSubmit = async () => {
    if (!changedField) {
      alert("No changes to submit.");
      return;
    }
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const url = "https://getcore-backend.onrender.com/updateCustumer/";
      const formData = new FormData();
      formData.append(changedField, customerInfo[changedField] ?? "");
      // Debug: log FormData key and value
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      // console.log("Submitting for customerId:", customerId);
      await axios.post(url + customerId, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      // console.log(`Customer info Updated Successfully`);
      alert("Customer info updated successfully!");
      setChangedField(null); // Reset after successful update
    } catch (err) {
      alert("Failed to update customer info.");
      console.error(err);
    }
  };

  // Helper to pick icon based on field name

  const getFieldIcon = (key) => {
    switch (key) {
      case "mobile":
        return <IoCallOutline className="text-blue-500" />;
      case "email":
        return <MdEmail className="text-green-500" />;
      case "name":
        return <MdPerson className="text-purple-500" />;
      case "address":
        return <MdHome className="text-orange-500" />;
      case "accountNo":
      case "bankIfsc":
      case "bankName":
        return <MdAccountBalance className="text-teal-500" />;
      case "aadharNo":
      case "panNo":
        return <MdCreditCard className="text-gray-500" />;
      case "aadharUrl":
      case "panUrl":
      case "photoUrl":
      case "otherUrl":
        return <MdInsertDriveFile className="text-yellow-500" />;
      default:
        return <MdInsertDriveFile className="text-gray-400" />;
    }
  };

  // Define the order of fields to display
  const fieldOrder = [
    "name",
    "mobile",
    "email",
    "address",
    "accountNo",
    "bankName",
    "bankIfsc",
    "aadharNo",
    "panNo",
    "aadharUrl",
    "panUrl",
    "photoUrl",
    "otherUrl",
    // add any other fields you want in order
  ];

  return (
    <div
      className={`w-full md:w-[80%] px-[5%] py-5 flex flex-col gap-4 overflow-auto`}
    >
      <Suspense fallback={<div>Loading....</div>}>
        <CustomerId fetchCustomer={fetchCustomer} setLoading={setLoading} />
      </Suspense>

      <div className="flex flex-col gap-3">
        {fieldOrder
          .filter((key) => customerInfo[key] !== undefined)
          .map((key) => (
            <ButtonViewCustomer
              key={key}
              name={key}
              value={
                typeof customerInfo[key] === "object"
                  ? JSON.stringify(customerInfo[key])
                  : customerInfo[key]
              }
              icon={getFieldIcon(key)}
              onEdit={() => handleEdit(key)}
            />
          ))}
      </div>

      <EditModal
        open={!!editField}
        onClose={() => setEditField(null)}
        field={editField}
        value={editValue}
        onSave={handleSave}
        customerId={customerId}
      />

      {customerId && (
        <div className="flex justify-center">
          <button
            className="cursor-pointer w-32 h-12 bg-yellow-600 text-white rounded-3xl font-semibold hover:bg-green-700 transition-all duration-150"
            style={{
              minWidth: "8rem",
              minHeight: "3rem",
              maxWidth: "8rem",
              maxHeight: "3rem",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
