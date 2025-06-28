export default function Passbook({ data }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Passbook</h2>

      {/* Header Row */}
      <div className="grid grid-cols-5 font-bold bg-gray-200 p-2 rounded  text-xs md:text-base">
        <p>Date</p>
        <p>Description</p>
        <p>Credit</p>
        <p>Debit</p>
        <p>Balance</p>
      </div>

      {/* Data Rows */}
      {data?.map((entry, index) => (
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
      ))}
    </div>
  );
}
