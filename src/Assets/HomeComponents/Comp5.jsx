import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";

export default function Comp5() {
  return (
    <div className="w-full bg-[#E1EEFF] px-[10%] py-[10%] grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div className=" flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2 }}
          className="text-3xl lg:text-5xl font-bold"
        >
          What Our <span className="text-[#0360D9]">Member’s</span>
          <br /> Saying About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 3, delay: 1 }}
        >
          Discover how our members have transformed their financial journey with
          our support. Read real stories of trust, satisfaction, and success
          from people who chose us for their loan needs.
        </motion.p>
        <div className="flex items-center">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.2 + 2 }}
                key={index}
                src={`./Images/human/Ellipse${index}.png`}
                alt={`Human Icon ${index}`}
                className="w-12 lg:w-14 aspect-square rounded-full relative"
                style={{ left: `-${index * 10}px` }}
              />
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-base lg:text-xl font-bold font-ibm"
          >
            100+ Reviews
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3 }}
        className="rounded-2xl border-[1px] border-black bg-white p-3 flex flex-col gap-3"
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <motion.img
              src="./Images/human/Ellipse13.png"
              alt="Group 1"
              className="w-12 lg:w-14 aspect-square rounded-full"
            />
            <p className="text-lg lg:text-xl font-semibold">Ziya Ul</p>
          </div>
          <motion.div className="flex gap-1 text-xl lg:text-3xl items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <FaStar className="text-[#F5BF00]" />
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-base"
        >
          The entire process was smooth and hassle-free. I got quick approval,
          flexible EMI options, and helpful customer support. Everything was
          transparent, and I felt confident throughout. Highly recommend this
          service to anyone looking for a fast and reliable loan experience.
          Truly impressed with the professionalism and ease of use.
        </motion.p>
      </motion.div>
    </div>
  );
}
