/* eslint-disable react/prop-types */

import moment from "moment";

export default function Time({ time }) {
  const videoTime = moment()?.startOf("days")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black text-white px-2 text-sm rounded-md">
        {videoTime}
      </span>
    </div>
  );
}
