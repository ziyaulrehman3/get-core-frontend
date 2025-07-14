import { motion } from "framer-motion";

export default function Comp4() {
  return (
    <div
      id="WhyUs?"
      className="w-[80%] min-h-72 py-8  mx-auto flex flex-col lg:flex-row justify-between items-center "
    >
      <motion.img
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        src="./Images/chooseus.png"
        alt="Why choose us"
        className="w-full lg:w-[40%] hidden lg:block"
      />

      <div className="w-full lg:w-[40%] h-full flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 3 }}
          className="text-2xl lg:text-4xl font-bold font-ibm"
        >
          Why You Choose Us?
        </motion.h1>
        <img
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          src="./Images/chooseus.png"
          alt="Why choose us"
          className="lg:hidden w-full"
        />
        <ul className="space-y-3">
          {[
            "Quick loan approvals within minutes",
            "Flexible EMI plans to fit your budget",
            "Low interest rates for higher savings",
            "No collateral required for personal loans",
            "24/7 customer support and assistance",
          ].map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex gap-2 text-base lg:text-lg"
            >
              <span className="text-[#0360D9]">✓</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
