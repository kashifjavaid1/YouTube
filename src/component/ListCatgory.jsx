export default function ListCatgory() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    " MongoDb",
    "News",
    "Mixes",
    "Mern Stack",
    " Next js",
  ];
  return (
    <div className="flex    fixed px-4">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
