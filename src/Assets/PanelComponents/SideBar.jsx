import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaUserPlus,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaHistory,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SideBar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen); // Only toggle sidebar on small screens
    }
  };

  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <FaHome size={20} /> },
    {
      id: "create-customer",
      label: "Create Customer",
      icon: <FaUserPlus size={20} />,
    },
    {
      id: "view-customer",
      label: "View Customer Profile",
      icon: <FaUser size={20} />,
    },
    {
      id: "create-loan",
      label: "Create Loan",
      icon: <FaFileInvoiceDollar size={20} />,
    },
    {
      id: "view-loan",
      label: "View Loan",
      icon: <FaFileInvoiceDollar size={20} />,
    },
    {
      id: "payment-deposit",
      label: "Payment Deposit",
      icon: <FaMoneyBillWave size={20} />,
    },
    {
      id: "recent-payments",
      label: "Recent Payments",
      icon: <FaHistory size={20} />,
    },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed block md:hidden  top-2 left-2 z-50 p-2 rounded-md bg-[#81B5E9D1] text-white focus:outline-none shadow-md"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-[100%]"
        } transition-all duration-500 w-[80%] md:w-[20%] absolute md:static  top-0 left-0  ease-in-out h-full text-white bg-secondary border-r-2 border-brand-gray z-40`}
      >
        {/* Sidebar - always visible on md screens and above */}

        <h1 className=" font-bold underline lg:no-underline flex gap-2">
          <img src="./Images/Logo.png" alt="" className="w-10 aspect-square" />
          <img src="./Images/LogoText.png" alt="" className="h-10" />
        </h1>

        <nav className="sm:mt-6">
          <ul>
            {menu.map((item) => (
              <li key={item.id} className="mb-1 ml-4 mr-8">
                <button
                  onClick={() => {
                    setActivePage(item.id);
                    toggleSidebar();
                    // Close sidebar on mobile after navigation
                  }}
                  className={`btn-primary ${
                    activePage === item.id ? "bg-primary" : "hover:bg-gray-300"
                  }`}
                >
                  <span className={"text-black mr-4"}>{item.icon}</span>
                  <span className={"text-black"}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
