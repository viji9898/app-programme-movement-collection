import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
import { NavBar } from "./components/navigation/navBar";

// import ScrollToTop from "./utils/ScrollToTop";

import { Assets } from "./pages/Assets";
import { Programmes } from "./pages/Programmes";
import { BeginnerRings } from "./components/workshopPage/BeginnerRings";
import { EoMobility } from "./components/workshopPage/EoMobility";
// import { Deactivated } from "./pages/deactiviated";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route exact path="/" element={<Programmes />} />
        <Route exact path="/beginner-rings" element={<BeginnerRings />} />
        <Route exact path="/eo-mobility" element={<EoMobility />} />
        {/* <Route exact path="/" element={<WorkShop />} /> */}
        {/* <Route exact path="/" element={<Deactivated />} /> */}
        <Route exact path="/assets" element={<Assets />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
