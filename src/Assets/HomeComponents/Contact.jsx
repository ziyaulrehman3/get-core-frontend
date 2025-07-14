import { motion } from "framer-motion";

import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="  w-full py-[5%] px-8 "
      id="ContactUs"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden ">
        <div className="  w-full overflow-hidden">
          <a
            href="https://maps.app.goo.gl/d7iXiNwzZUfvrVRp6"
            target="__blank"
            className="w-full"
          >
            <img
              src="./Images/map.jpg"
              alt="Map Image"
              className="w-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
            />
          </a>
        </div>

        <div className="bg-[#0360D9] w-full gap-2 py-2 text-lg lg:text-xl text-white flex flex-col justify-around px-[10%]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="mx-auto text-2xl font-semibold underline"
          >
            Contact Information
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 1 }}
            href="https://wa.me/919634473247"
            target="__blank"
          >
            <h1 className="flex gap-4  items-center font-semibold font-ibm">
              <MdWifiCalling3 className="text-3xl" />
              <span>+91 - 9634473247</span>
            </h1>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 2 }}
            href="mailto:getcore@gmail.com"
            target="__blank"
          >
            <h1 className="flex gap-4  items-center font-semibold font-ibm">
              <MdOutlineMail className="text-3xl" />
              <span>getcore@gmail.com</span>
            </h1>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 3 }}
            href="https://maps.app.goo.gl/d7iXiNwzZUfvrVRp6mailto:getcore@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more."
            target="__blank"
          >
            <h1 className="flex gap-4 items-center font-semibold font-ibm">
              <LuMapPin className="text-3xl" />
              <span>Hanuman Murti, Moradabad, UP - 244001</span>
            </h1>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 4 }}
            className="flex text-3xl gap-4 mx-auto lg:m-0"
          >
            <a href="https://www.youtube.com/@SRIDSCORE" target="__blank">
              <IoLogoYoutube />
            </a>
            <a
              href="https://www.instagram.com/getcore.in?igsh=eHppM3IwbG5lOHFs"
              target="__blank"
            >
              <RiInstagramFill />
            </a>
            <a href="https://wa.me/919634473247" target="__blank">
              <IoLogoWhatsapp />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
