import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PaylingVideo from "./pages/PaylingVideo";
import { useAuth } from "./contextApi/AuthContext";
import Loading from "./component/Loading";

function App() {
  const { loading } = useAuth();
  return (
    <div>
      <>
        {loading && <Loading />}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<PaylingVideo />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
