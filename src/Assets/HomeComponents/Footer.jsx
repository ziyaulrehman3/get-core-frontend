import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full px-[10%] bg-[#0360D9] text-sm text-white py-[5%] flex flex-col gap-4">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
        <div className="cols-span-1 lg:col-span-2 flex flex-col gap-2">
          <h1 className="text-xl font-bold">Get Core</h1>
          <p>
            GetCore is your trusted financial partner, providing fast, secure,
            and hassle-free loans tailored to your financial needs.
          </p>
          <p>
            We offer personal, business, and secured loans with flexible terms,
            low interest rates, and quick approval for your convenience.
          </p>
          <div className="flex text-2xl gap-2">
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
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold mb-2">Important</h1>
          <ul className="space-y-2 grid grid-cols-2 lg:grid-cols-1 gap-2">
            {["About Us", "Contact Us", "Why Us?", "Our Speciality"].map(
              (item) => {
                const itemTemp = "#" + item?.split(" ").join("");
                return (
                  <li key={item}>
                    <a href={itemTemp} className="cursor-pointer">
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="cols-span-1 lg:col-span-2 ">
          <h1 className="text-xl font-bold mb-2 ">Address</h1>
          <a href="https://maps.app.goo.gl/d7iXiNwzZUfvrVRp6" target="__blank">
            <div className="w-full lg:w-[80%] rounded-2xl overflow-hidden">
              <img
                className="hover:scale-110 transition-all duration-1000 ease-in-out"
                src="./Images/map.jpg"
                alt="Map Image"
              />
            </div>
          </a>

          <p className="py-2 font-semibold">
            Hanuman Murti, Moradabad, UP - 244001
          </p>
        </div>
      </div>

      <hr />
      <p className="mx-auto">© 2025 All Right Reserved</p>
    </div>
  );
}
