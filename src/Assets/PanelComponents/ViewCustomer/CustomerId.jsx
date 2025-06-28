import { useState, useEffect } from "react";
import axios from "axios";

export default function CustomerId({ fetchCustomer, setLoading }) {
  const [currentOption, setCurrentOption] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    const ApiCall = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://getcore-backend.onrender.com/custumerList",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log(response.data);
        setList(response.data.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    ApiCall();
  }, []);

  useEffect(() => {
    console.log(currentOption);
  }, [currentOption]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xl md:text-2xl font-bold">Customer Profile</label>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <select
          value={currentOption}
          name="option"
          onChange={(e) => setCurrentOption(e.target.value)}
          className="border-[1px] border-gray-200 focus:outline-none rounded-lg w-full md:w-80 h-12 px-2 "
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

        <button
          onClick={() => fetchCustomer(currentOption)}
          className="h-12 w-full md:w-32 rounded-lg focus:outline-none bg-gradient-to-b from-[#A480F0] to-[#35A8E7] text-white text-lg font-medium hover:brightness-110"
        >
          Fetch
        </button>
      </div>
    </div>
  );
}
