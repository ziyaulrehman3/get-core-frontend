import { motion } from "framer-motion";

export default function Comp2() {
  return (
    <div className="w-full py-4 px-[10%] lg:h-[20vh] bg-[#0360D9] flex flex-col items-center lg:justify-start justify-center lg:flex-row gap-4 lg:gap-10 text-white">
      {[
        { title: "24/7", desc: "Online Support" },
        { title: "1000+", desc: "Customers" },
        { title: "4.8/5", desc: "Customers Ratings" },
      ].map((item, index) => (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className=" flex flex-col justify-center items-center "
          >
            <h1 className="text-6xl font-bold">{item.title}</h1>
            <p clasName="text-xl">{item.desc}</p>
          </motion.div>

          <motion.span
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }}
            // transition={{ duration: 1 }}
            className={`text-7xl pr-2 lg:pt-2 ${
              index == 2 ? "hidden" : "rotate-90 lg:rotate-0 w-2 lg:h-full"
            }`}
          >
            |
          </motion.span>
        </>
      ))}
    </div>
  );
}
