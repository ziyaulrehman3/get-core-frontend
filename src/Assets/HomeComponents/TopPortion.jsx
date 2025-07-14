import { motion } from "framer-motion";

const TopPortion = () => {
  return (
    <div className="bg-white px-[10%] py-[5%] w-full">
      <div className="w-full grid  grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Mobile Layout using Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Header at top for mobile */}
          <div className="place-items-start flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-3xl lg:text-5xl font-bold  leading-tight pb-2"
            >
              We're More Than Just a{" "}
              <span className="text-blue-600">Loan Company</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full place-items-center lg:hidden rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://th.bing.com/th/id/R.9e832a68a1b952fb9098f830b1360f8d?rik=QrKRimrLfhFpmg&riu=http%3a%2f%2fwww.sdgyoungleaders.org%2fwp-content%2fuploads%2f2019%2f07%2f1df4122c1b1326756ffc56a1f2b19132.jpeg&ehk=9eZhgBuK2BoSDSKM1G2Y89OsKL7QfysI4Yo6OubtT20%3d&risl=&pid=ImgRaw&r=0"
                alt="Business professionals"
                className="w-full hover:scale-110 duration-1000 transition-all"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              We believe in building lasting relationships with our clients
              through transparency, trust, and personalized financial solutions
              that meet your unique needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              Our experienced team of financial advisors works closely with you
              to understand your goals and provide tailored loan options that
              fit your budget and timeline.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
              viewport={{ once: true, amount: 0.2 }}
              className=""
            >
              From personal loans to business funding, we're committed to
              helping you achieve your dreams with competitive rates and
              flexible terms that work for you.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="h-[80%] place-items-center rounded-lg shadow-lg hidden lg:block overflow-hidden"
        >
          <img
            src="https://th.bing.com/th/id/R.9e832a68a1b952fb9098f830b1360f8d?rik=QrKRimrLfhFpmg&riu=http%3a%2f%2fwww.sdgyoungleaders.org%2fwp-content%2fuploads%2f2019%2f07%2f1df4122c1b1326756ffc56a1f2b19132.jpeg&ehk=9eZhgBuK2BoSDSKM1G2Y89OsKL7QfysI4Yo6OubtT20%3d&risl=&pid=ImgRaw&r=0"
            alt="Business professionals"
            className="w-full object-cover hover:scale-110 duration-1000 transition-all"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopPortion;
