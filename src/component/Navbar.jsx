import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-between  px-6 py-2">
      <div className="flex items-center space-x-4 cursor-pointer">
        <AiOutlineMenu className="text-xl" />
        <img src={logo} alt="Logo" className="w-28" />
      </div>
      <div className="flex w-[35%] items-center  ">
        <div className="w-full border px-3 py-2 rounded-l-full ">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 rounded-r-full border bg-gray-100">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-300"
        />
      </div>
      <div className="flex space-x-6 items-center px-6 ">
        <RiVideoAddLine
          size={"42px"}
          className="hover:bg-gray-100 p-2 rounded-full duration-300"
        />
        <IoMdNotificationsOutline
          size={"42px"}
          className="hover:bg-gray-100 p-2 rounded-full duration-300"
        />
        <CgProfile
          size={"42px"}
          className="hover:bg-gray-100 p-2 rounded-full duration-300"
        />
      </div>
    </div>
  );
}

export default Navbar;
