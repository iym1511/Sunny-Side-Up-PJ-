import "./App.css";
import SunnySideUp from "./page/SunnySideUp";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import NationwideBox from "./components/NationwideBox";
import Notfound from "./page/Notfound";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/sunnysideup" element={<Notfound />} />
        <Route path="/sunnysideup" element={<SunnySideUp />}>
          {/* 전국날씨에 useParams 사용 */}
          <Route path="/sunnysideup/:day" element={<NationwideBox />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
