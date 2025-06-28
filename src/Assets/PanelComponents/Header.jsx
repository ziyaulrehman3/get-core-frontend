import { TbTopologyStar3 } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { PiFinnTheHumanBold } from "react-icons/pi";

export default function Header() {
  return (
    <div>
      <h1>
        <span>
          <TbTopologyStar3 />
        </span>
        <span>Get Core</span>
      </h1>

      <div>
        <MdLogout />
      </div>
    </div>
  );
}
