import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FindADealer from "./pages/FindADealer";
import GoWith from "./pages/GoWith";
import GuidesAndVideos from "./pages/GuidesAndVideos";
import Home from "./pages/Home";
import ServiceAndHelp from "./pages/ServiceAndHelp";
import ShowAllTyres from "./pages/ShowAllTyres";

function App() {
  return (
    <div className="App" style={{ maxWidth: "144rem", margin: "0 auto" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-all-tyres" element={<ShowAllTyres />} />
          <Route path="/find-a-dealer" element={<FindADealer />} />
          <Route path="/guides-and-videos" element={<GuidesAndVideos />} />
          <Route path="/go-with" element={<GoWith />} />
          <Route path="/service-and-help" element={<ServiceAndHelp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
