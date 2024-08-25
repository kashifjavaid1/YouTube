import Navbar from "./component/Navbar";
import Sidbar from "./component/Sidbar";
import { useAuth } from "./contextApi/AuthContext";

function App() {
  const { data, loading } = useAuth();
  console.log("🚀 ~ App ~ data:", data);

  return (
    <div>
      <>
        <Navbar />
        <Sidbar />
      </>
    </div>
  );
}

export default App;
