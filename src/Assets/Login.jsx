import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import Loading from "./Loading";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [currentSecond, setCurrentSecond] = useState(0);
  const [loading, setLoading] = useState(false);

  const [credentail, setCredentail] = useState({
    username: "",
    password: "",
  });

  const [passowrdState, setPasswordState] = useState(true);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setCredentail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = async () => {
    const info = credentail;
    // console.log("Calling");

    setCredentail({
      username: "",
      password: "",
    });

    try {
      setLoading(true);
      const response = await axios.post(
        "https://getcore-backend.onrender.com/login",

        {
          username: info.username,
          password: info.password,
        }
      );

      navigate("/Panel");
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      alert("Invalid Credentail!");
      console.log(err);
      localStorage.clear();
    }

    setLoading(false);
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentSecond((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervel);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPasswordState(true);
    }, 500);
  }, [passowrdState]);

  return (
    <div className="h-lvh flex justify-center items-center bg-gradient-to-b from-[#A480F0] to-[#35A8E7]">
      <div
        className={`w-[30%] z-40 ${
          currentSecond > 3 ? "hidden" : ""
        } lg:w-[10%] aspect-square relative flex justify-center items-center rounded-full bg-white m-2`}
      >
        <img
          src="./Images/Ellipse.png"
          alt="Ellipse"
          className={`w-[90%] aspect-square animate-spin ${
            currentSecond > 1 ? "hidden" : ""
          }`}
        />

        <div
          className={`  absolute  aspect-square top-0 left-0  flex justify-center items-center`}
        >
          <img
            src="./Images/Logo.png"
            alt="Logo"
            className="w-[70%] aspect-square"
          />
        </div>
      </div>
      {loading ? <Loading /> : ""}

      <div
        className={`${
          currentSecond < 4 ? "hidden" : ""
        } z-50 flex flex-col items-center justify-center gap-2 h-lvh w-full`}
      >
        <div
          className={`${
            currentSecond > 3 ? "" : "hidden"
          }  flex flex-row justify-center items-center mx-auto w-full`}
        >
          <img
            src="./Images/Logo.png"
            alt="Logo"
            className="w-[10%] lg:w-[5%] aspect-square"
          />

          <div className="w-[24%] lg:w-[12%] overflow-hidden">
            <img
              src="./Images/LogoText.png"
              alt="Logo"
              className={`w-full ${
                currentSecond > 4 ? "opacity-100 m-0" : "opacity-0 -ml-[100%]"
              }  transition-all duration-1000`}
            />
          </div>
        </div>

        <div
          className={`${
            currentSecond > 5 ? "h-[40vh] opacity-100" : " h-0 opacity-0"
          }   w-72 transition-all duration-1000 flex flex-col w-[80%] lg:w-[30%] px-[2%] gap-3`}
        >
          <div className="w-full">
            <label className="text-md font-semibold block">Username</label>

            <span className="w-full relative h-10">
              <FaRegUser className="absolute text-lg top-0 left-3 text-gray-300" />

              <input
                type="text"
                name="username"
                onChange={handelChange}
                value={credentail.username}
                placeholder="Admin"
                autoComplete="new-username"
                className="h-10 rounded-full border-2 border-gray-200 w-full pl-8 text-md focus:outline-none"
              />
            </span>
          </div>

          <div>
            <label className="text-md font-semibold block">Password</label>

            <span className="w-full relative">
              <MdLockOutline className="absolute text-xl top-0 left-3 text-gray-300" />

              <input
                type={passowrdState ? "password" : "text"}
                name="password"
                onChange={handelChange}
                value={credentail.password}
                placeholder="Password"
                className="h-10 rounded-full border-2 border-gray-200 w-full pl-8 text-md focus:outline-none"
              />

              <div
                className="absolute text-xl top-0 right-3 text-gray-300"
                onClick={() => setPasswordState((prev) => !prev)}
              >
                {passowrdState ? <GoEyeClosed /> : <FiEye />}
              </div>
            </span>
          </div>

          <button
            onClick={() => alert("Contact Admistrator")}
            className="text-start text-blue-500 text-md hover:text-blue-300 cursor-pointer focus:outline-none"
          >
            Having trouble logging in?
          </button>

          <button
            onClick={onSubmit}
            className="h-10 rounded-full focus:outline-none hover:opacity-80 cursor-pointer bg-gradient-to-r from-[#A480F0] to-[#35A8E7] text-white text-xl"
          >
            Sign in
          </button>
        </div>
      </div>

      <div className="w-full  h-lvh absolute top-0 left-0 flex items-center justify-center">
        <div
          className={` 
          
          ${
            currentSecond > 3
              ? "w-full h-lvh rounded-none"
              : currentSecond > 1
              ? "w-[15%] w-[15%] aspect-square rounded-full duration-1000"
              : "w-0"
          } 

          transition-all  bg-white `}
        ></div>
      </div>

      <div className="w-full  h-lvh absolute top-0 left-0 flex items-center justify-center">
        <div
          className={` ${
            currentSecond > 2
              ? "w-[30%] lg:w-[20%] aspect-square opacity-75"
              : "w-0"
          } 
                    ${currentSecond > 3 ? "hidden" : ""}

          transition-all rounded-full bg-white duration-1000`}
        ></div>
      </div>

      <div className="w-full h-lvh absolute top-0 left-0 flex items-center justify-center">
        <div
          className={` ${
            currentSecond > 2
              ? "w-[40%] lg:w-[25%] aspect-square opacity-50"
              : "w-0 opacity-0"
          }
          
                    ${currentSecond > 3 ? "hidden" : ""}

 transition-all rounded-full bg-white duration-1000`}
        ></div>
      </div>

      <div className="w-full h-lvh absolute top-0 left-0 flex items-center justify-center">
        <div
          className={` ${
            currentSecond > 2
              ? "w-[50%] lg:w-[30%] aspect-square opacity-25"
              : "w-0 opacity-0"
          } 
          
          ${currentSecond > 3 ? "hidden" : ""}
          
          transition-all rounded-full bg-white duration-1000`}
        ></div>
      </div>
    </div>
  );
}
