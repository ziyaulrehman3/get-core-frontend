import Comp3Cart from "./Comp3Cart";
import { FaUser } from "react-icons/fa";
import { FaPercent } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GiElectric } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Comp3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      id="OurSpeciality"
      className="w-[80%] mx-auto py-20 flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold  font-ibm">
        Our Consulting Specialists
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          [
            <FaUser />,
            "Personal Loans",
            "Get quick personal loans with easy terms and zero collateral required.",
          ],
          [
            <FaPercent />,
            "Low Interest Rates",
            "Enjoy low interest rates for maximum savings on every loan.",
          ],
          [
            <SlCalender />,
            "Flexible EMI Plans",
            "Choose affordable EMI plans tailored to your budget and convenience.",
          ],
          [
            <GiElectric />,
            "Quick Approvals",
            "Fast loan approvals with minimal documents and instant application updates.",
          ],
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Comp3Cart icon={item[0]} title={item[1]} desc={item[2]} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
