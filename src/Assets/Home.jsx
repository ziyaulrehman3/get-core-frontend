import { useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

import Comp1 from "./HomeComponents/Comp1";
import Comp2 from "./HomeComponents/Comp2";
import Comp3 from "./HomeComponents/Comp3";
import Comp4 from "./HomeComponents/Comp4";
import Comp5 from "./HomeComponents/Comp5";
import Contact from "./HomeComponents/Contact";

import Footer from "./HomeComponents/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full">
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Contact />
      <Footer />
      <FaCircleArrowUp
        onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
        className="fixed bottom-6 bg-white rounded-full right-4 text-4xl cursor-pointer animate-bounce border-[1px] border-white text-[#0360D9]"
      />
    </div>
  );
}
