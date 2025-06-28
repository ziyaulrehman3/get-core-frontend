import { IoSearchOutline } from "react-icons/io5";

export default function Header({ setType, type, status, setStatus }) {
  return (
    <div className="w-full flex flex-row justify-around h-12 mb-2">
      <div className="relative w-[60%] border-[1px] border-[#D1DBE8] rounded-xl">
        <IoSearchOutline className="absolute top-3 left-2 text-2xl text-gray-300" />
        <input
          type="text"
          placeholder="Search by Customer Name, Loan ID or Customer ID"
          className="w-full h-full border-none rounded-xl px-2 pl-9 focus:outline-none bg-white"
        />
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-[15%] border-[1px] border-[#D1DBE8] rounded-xl px-2 focus:outline-none bg-white"
      >
        <option value="all">All Loan</option>
        <option value="Active">Active</option>
        <option value="Closed">Closed</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-[15%] border-[1px] border-[#D1DBE8] rounded-xl px-2 focus:outline-none bg-white"
      >
        <option value="all">All Loan</option>
        <option value="single">Single Loan</option>
        <option value="emi">EMI Loan</option>
      </select>
    </div>
  );
}
