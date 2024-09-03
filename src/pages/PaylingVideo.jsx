import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapaid";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import Suggest from "../component/Suggest";

export default function PaylingVideo() {
  const [video, setVideo] = useState();
  const [suggests, setSuggests] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailVideo = () => {
      fetchData(`video/details/?id=${id}`).then((res) => {
        setVideo(res);
      });
    };
    const suggestsVideo = () => {
      fetchData(`video/related-contents/?id=${id}`).then((res) => {
        setSuggests(res?.data?.contents);
      });
    };
    fetchDetailVideo();
    suggestsVideo();
  }, [id]);
  console.log(video?.data?.author?.avatar[0]?.url);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-20  ">
      <div className="w-full lg:w-[70%] px-4 py-3 lg:py-6">
        {/* Video Player */}
        <div className="w-full h-[200px] md:h-[500px] bg-black">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height="100%"
            width="100%"
            controls
            playing={true}
          />
        </div>

        {/* Video Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
          <div className="flex items-center">
            {/* Channel Avatar */}
            {video?.data?.author?.avatar?.url && (
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  src={video?.data?.author?.avatar[0]?.url}
                  className="w-full h-full rounded-full overflow-hidden"
                />
              </div>
            )}

            {/* Channel Info */}
            <div className="flex flex-col ml-3">
              <div className="text-md font-semibold flex items-center">
                {video?.data?.title}
                {video?.data?.author?.badges[0]?.type ===
                  "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-500 text-[12px] ml-1" />
                )}
              </div>
              <div className="text-sm text-gray-600">
                {video?.author?.stats?.subscribersText}
              </div>
            </div>

            {/* Subscribe Button */}
            <button className="ml-4 mt-1 text-center bg-red-600 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200">
              Subscribe
            </button>
          </div>

          {/* Likes and Views */}
          <div className="flex mt-4 md:mt-0 space-x-4">
            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-gray-100">
              <AiOutlineLike className="text-xl mr-2" />
              {`${abbreviateNumber(video?.data?.stats?.likes, 2)} Likes`}
            </div>
            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-gray-100">
              {`${abbreviateNumber(video?.data?.stats?.views, 2)} Views`}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
          {video?.data?.description}
        </div>

        {/* Comments */}
        <div className="mt-4 font-semibold text-lg">
          {video?.data?.stats?.comments} Comments
        </div>
      </div>

      {/* Add related videos list here */}
      <div className="bg-white p-4 rounded-lg shadow h-[calc(100vh-10rem)] overflow-y-scroll  overflow-x-hidden">
        {suggests?.map((item, index) => {
          if (item.type !== "video") {
            return false;
          }
          return <Suggest key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}
