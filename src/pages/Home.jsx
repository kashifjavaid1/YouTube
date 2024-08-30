import ListCatgory from "../component/ListCatgory";
import Sidebar from "../component/Sidbar";
import { useAuth } from "../contextApi/AuthContext";
import Video from "./Video";

function Home() {
  const { loading, data } = useAuth();
  return (
    <div className="flex mt-20 h-[calc(100vh-5rem)]  overflow-y-hidden">
      <Sidebar />
      <div>
        <ListCatgory />
      </div>
      <div className="flex-1 h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3">
          {!loading &&
            data?.map((item) => {
              if (item?.type !== "video") {
                return false;
              }
              return <Video key={item?.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
