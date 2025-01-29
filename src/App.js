import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Shop from "./pages/Shop";
import Work from "./pages/Work";
import Missions from "./pages/Missions";
import Battle from "./pages/Battle";
import MyHome from "./pages/MyHome";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/work" element={<Work />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/home" element={<MyHome />} />
      </Routes>
    </Router>
  );
};

export default App;