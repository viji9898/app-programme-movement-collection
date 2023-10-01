import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NotFound } from "./utils/notFound";
// import { NavBar } from "./components/navigation/navBar";

// import ScrollToTop from "./utils/ScrollToTop";

import { Assets } from "./pages/Assets";
// import { WorkShop } from "./pages/Workshop";
import { Deactivated } from "./pages/deactiviated";
// import { ProgramList } from "./components/landingPage/programList";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      {/* <ScrollToTop /> */}
      <Routes>
        {/* <Route exact path="/" element={<ProgramList />} /> */}
        {/* <Route exact path="/" element={<WorkShop />} /> */}
        <Route exact path="/" element={<Deactivated />} />
        <Route exact path="/assets" element={<Assets />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
