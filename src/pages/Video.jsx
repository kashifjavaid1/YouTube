/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Time from "../component/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

export default function Video({ video }) {
  console.log("🚀 ~ Video ~ video:", video);
  return (
    <div className=" ">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* thumbnails */}
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              src={video?.thumbnails[0]?.url}
              alt="Thumbnails"
              className="h-full w-full"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channel logo and title */}
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar[0]?.url}
                  className="w-full h-full rounded-full overflow-hidden"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-700">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-700 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex items-center  text-gray-700 text-[12px]">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-5px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
