/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Time from "../component/Time";

export default function Video({ video }) {
  console.log("🚀 ~ Video ~ video:", video);
  return (
    <div className=" ">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              src={video?.thumbnails[0]?.url}
              alt="Thumbnails"
              className="h-full w-full"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div>
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                className="w-full h-full rounded-full overflow-hidden"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
