import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RiLoginCircleLine } from "react-icons/ri";

import { useState } from "react";

export default function Header() {
  const [sidebar, setSidebar] = useState(true);
  const [sidebarButton, setSidebarButton] = useState("");
  return (
    <>
      <div
        className={`w-[70%] pt-10 lg:pt-0 lg:w-full fixed lg:bg-transparent bg-white ${
          sidebar
            ? "-translate-x-full lg:translate-x-0 shadow-none"
            : "translate-x-0"
        } transform transition-transform duration-1000 z-20 gap-4 lg:gap-8 lg:gap-0 lg:absolute top-0 left-0 px-2 lg:px-[10%] mx-auto h-lvh lg:h-14 items-center flex flex-col lg:flex-row lg:justify-between shadow-[0px_0px_20px_4px] shadow-gray-200 lg:shadow-none`}
      >
        <h1 className=" font-bold mx-auto flex gap-2">
          <img src="./Images/Logo.png" alt="" className="w-10 aspect-square" />
          <img src="./Images/LogoText.png" alt="" className="h-10" />
        </h1>

        <div className="flex w-full lg:w-auto text-center flex-col lg:flex-row gap-2 lg:gap-4 lg:gap-8 text-xl lg:text-lg font-semibold">
          {["Home", "About Us", "Contact Us"].map((item, index) => {
            const itemTemp = index == 0 ? "" : "#" + item?.split(" ").join("");
            return (
              <a
                href={itemTemp}
                className="bg-gray-50 lg:bg-transparent w-full lg:w-auto py-2 rounded-xl"
              >
                <button
                  onClick={() => {
                    setSidebar(true);
                    setSidebarButton(itemTemp);
                  }}
                  className={`cursor-pointer ${
                    sidebarButton == itemTemp
                      ? "underline decoration-2 underline-offset-4 text-[#0360D9]"
                      : ""
                  } `}
                >
                  {item}
                </button>
              </a>
            );
          })}
        </div>

        <Link to="/Login" className="w-full lg:w-24">
          <button className="w-full lg:w-24 flex gap-2 p-1 items-center justify-center h-10 text-xl lg:text-lg cursor-pointer hover:bg-[#0360D9]  hover:text-white transition-all duration-100  rounded-full border-[1px] border-[#0360D9] font-semibold text-[#0360D9]">
            <span>Log in</span>
            <RiLoginCircleLine className="text-2xl" />
          </button>
        </Link>
      </div>

      <div className="flex p-2 justify-center items-center  h-10 lg:hidden absolute top-0 left-0 w-full">
        <h1 className="text-4xl font-bold flex gap-2 pt-2">
          <img src="./Images/Logo.png" alt="" className="w-10 aspect-square" />
          <img src="./Images/LogoText.png" alt="" className="h-10" />
        </h1>

        <FaBars
          onClick={() => setSidebar((e) => !e)}
          className="absolute top-2 left-6 text-3xl"
        />
      </div>
    </>
  );
}
