import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Search from "./component/Search";
import PaylingVideo from "./component/PaylingVideo";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video:id" element={<PaylingVideo />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
