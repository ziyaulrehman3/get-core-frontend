export default function LoanSlice({ item, index, setLoanDetailsFlag }) {
  function setLoanId(id, type) {
    localStorage.setItem("loanId", id);
    localStorage.setItem("loanType", type);
  }

  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-10 items-center font-medium ${
        index % 2 == 0 ? "bg-gray-100" : "bg-white"
      } py-1 text-[10px] md:text-base`}
    >
      <div className="md:col-span-2 px-2">
        <p>Loan ID: {item._id}</p>
        <p>Type: {item.loanType}</p>
      </div>
      <div className="md:col-span-2 px-2">
        <p>Name: {item.name}</p>
        <p>Cus ID: {item.cusId}</p>
      </div>{" "}
      <div className="md:col-span-2 px-2">
        <p>Amount: {item.loanAmount}</p>
        <p>
          {item.loanType === "single"
            ? "Balance:" + item.balance
            : "Due:" + item.dueAmount}
        </p>
      </div>{" "}
      <div className="md:col-span-2 px-2">
        <p>Issued: {new Date(item.loanDate).toLocaleDateString("en-GB")}</p>
        <p>
          {item.loanType === "single"
            ? "Due:" + new Date(item.dueDate).toLocaleDateString("en-GB")
            : ""}
        </p>
      </div>
      <button
        className={`rounded-xl h-8 col-span-2 md:col-span-1 border-[1px]${
          item.loanStatus
            ? "border-green-400 bg-green-300"
            : "border-red-400 bg-red-300"
        }   w-[90%] ml-1`}
      >
        {item.loanStatus ? "Active" : "Inactive"}
      </button>
      <button
        onClick={() => {
          setLoanId(item._id, item.loanType);
          setLoanDetailsFlag(true);
        }}
        className="rounded-xl h-8 border-[1px] border-black col-span-2 md:col-span-1  w-[90%]  ml-1 cursor-pointer hover:bg-black hover:text-white"
      >
        View
      </button>
    </div>
  );
}
