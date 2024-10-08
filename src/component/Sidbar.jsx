import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  return (
    <div className="px-6 w-[13%]  h-[calc(100vh-10vh)]  overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <div className="space-y-3 ">
        {sidebarItems?.map((item, index) => (
          <div
            key={index}
            className="space-x-6 flex items-center hover:bg-gray-300 rounded-xl duration-300"
          >
            <span className="text-2xl"> {item.icon}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <div className="space-y-3 mt-4">
        <div className="flex items-center font-semibold space-x-2 ">
          <h1 className="cursor-pointer">You</h1>
          <FaChevronRight className="cursor-pointer" />
        </div>
        {sidebarItems2.map((item, index) => (
          <div
            key={index}
            className="space-x-6 flex items-center hover:bg-gray-300 rounded-xl duration-300"
          >
            <span className="text-2xl"> {item.icon}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <div className="space-y-3 mt-3">
        <h1 className="font-semibold cursor-pointer">Explore</h1>
        {sidebarItems3.map((item, index) => (
          <div
            key={index}
            className="space-x-6 flex items-center hover:bg-gray-300 rounded-xl duration-300"
          >
            <span className="text-2xl"> {item.icon}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <div className="space-y-3 mt-3 ">
        {sidebarItems4.map((item, index) => (
          <div
            key={index}
            className="space-x-6 flex items-center  hover:bg-gray-300 rounded-xl duration-300"
          >
            <span className="text-red-600 text-2xl">{item.icon}</span>
            <span className="cursor-pointer">{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      {/* last session */}
      <span className="text-[13px]  text-gray-400 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2024 Muhammad Kashif</p>
    </div>
  );
}

export default Sidebar;
