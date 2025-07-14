import { motion } from "framer-motion";

const LowerPortion = () => {
  return (
    <div className=" bg-[#E1EEFF] px-[10%] py-[5%] flex items-center justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 ">
        <div className="flex flex-col place-items-start order-1 lg:order-2 font-ibm gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl lg:text-5xl font-bold leading-tight "
          >
            Get Quick <span className="text-blue-600">Loan</span> in Just a Few{" "}
            <span className="text-blue-600">Taps</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="place-items-center w-full lg:hidden block overflow-hidden rounded-xl"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20230510/original/pngtree-financial-cartoon-with-mobile-phone-and-money-png-image_9155242.png"
              className="w-full object-cover "
              alt=""
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className=""
          >
            Apply for loans instantly through our user-friendly mobile app. Get
            pre-approved in minutes and receive funds directly to your account
            within 24 hours.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true, amount: 0.2 }}
            className=""
          >
            Our streamlined process eliminates paperwork hassles. Simply upload
            your documents, track your application status, and manage your loan
            - all from your smartphone.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="place-items-center w-full hidden lg:block overflow-hidden rounded-xl"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20230510/original/pngtree-financial-cartoon-with-mobile-phone-and-money-png-image_9155242.png"
            className="w-full object-cover "
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LowerPortion;
