import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapaid";
import ReactPlayer from "react-player";

export default function PaylingVideo() {
  const [video, setVideo] = useState();
  const [realtiveVideo, setRealtiveVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailVideo = () => {
      fetchData(`video/details/?id=${id}`).then((res) => {
        setVideo(res);
        console.log("🚀 ~ fetchData ~ res:", res);
      });
    };
    fetchDetailVideo();
  }, [id]);
  return (
    <div className="flex justify-center flex-row  h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-356px) xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[500px] ml-[-16px] mr-[-16px] lg:mr-0 lg:ml-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height={"100%"}
              width={"100%"}
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
