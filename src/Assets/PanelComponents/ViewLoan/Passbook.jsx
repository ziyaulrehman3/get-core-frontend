export default function Passbook({ data }) {
  const type = localStorage.getItem("loanType");
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Passbook</h2>

      {/* Header Row */}

      {type == "single" ? (
        <div className="grid grid-cols-5 font-bold bg-gray-200 p-2 rounded  text-xs md:text-base">
          <p>Date</p>
          <p>Description</p>
          <p>Credit</p>
          <p>Debit</p>
          <p>Balance</p>
        </div>
      ) : (
        <div className="grid grid-cols-9 font-bold bg-gray-200 p-2 rounded  text-xs md:text-sm text-center">
          <p>Due Date</p>
          <p>Installment</p>
          <p>Inst. Amount</p>
          <p>Principal</p>
          <p>Intrest</p>

          <p>Paid Amount</p>
          <p>Paid Date</p>
          <p>Balance</p>
          <p>Status</p>
        </div>
      )}

      {/* Data Rows */}
      {type == "single"
        ? data?.map((entry, index) => (
            <div
              key={index}
              className="grid grid-cols-5 p-2 border-b text-xs md:text-base"
            >
              <p>{new Date(entry.date).toLocaleDateString("en-GB")}</p>
              <p>{entry.desc}</p>
              <p className="text-green-600">₹{entry.credit}</p>
              <p className="text-red-600">₹{entry.debit}</p>
              <p className="font-medium">₹{entry.balance}</p>
            </div>
          ))
        : data?.map((entry, index) => (
            <div
              key={index}
              className="grid grid-cols-9 p-2 border-b text-xs md:text-base text-center"
            >
              <p>{new Date(entry.emiDate).toLocaleDateString("en-GB")}</p>
              <p>{entry.emiNo}</p>
              <p className="text-green-600">₹{entry.emiAmount}</p>
              <p className="text-red-600">₹{entry.principal}</p>
              <p className="font-medium">₹{entry.interest}</p>
              <p className="font-medium">₹{entry.paidAmount}</p>
              <p className="font-medium">
                {entry.paidDate &&
                  new Date(entry?.paidDate)?.toLocaleDateString("en-GB")}
              </p>
              <p className="font-medium">₹{entry.remainingPrincipal}</p>
              <p className="font-medium">₹{entry.status}</p>
            </div>
          ))}
    </div>
  );
}
