import Header from "./Header";
import { motion } from "framer-motion";

export default function Comp1() {
  return (
    <div className="w-full overflow-hidden  relative bg-[#E1EEFF] h-[70vh] lg:h-lvh flex justify-end items-end">
      <div className="w-[50%] aspect-[2/1] overflow-hidden ">
        <div className="w-full aspect-square rounded-full bg-blue-200" />
      </div>
      <div className="absolute font-ibm top-0 left-0 lg:h-full w-full flex flex-col lg:flex-row items-center justify-between px-[10%]">
        <div className="pt-30 lg:pt-10 w-full lg:w-[60%]">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl lg:text-6xl font-bold"
          >
            Your Financial
            <br /> <span className="text-[#0360D9]">Freedom</span> Starts Here
          </motion.h1>
          <motion.img
            src="./Images/Vector.png"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            alt="curve"
            className="w-32 lg:w-64"
          />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[#163048] text-sm lg:text-lg "
          >
            Begin your journey to financial independence with personalized
            strategies, easy tools, and support that empowers you to make
            confident decisions for a better tomorrow.
          </motion.p>
        </div>
        <div className="lg:h-full">
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="./Images/Model.png"
            alt="Model"
            className="h-68 lg:h-96 w-[450px] aspect-square lg:absolute lg:bottom-0 lg:right-0"
          />
        </div>
      </div>

      <Header />
    </div>
  );
}
