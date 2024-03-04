import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontView from "./component/front_view";
import About_us from "./component_about_us/about_us";
import Community from "./component_community_tab/community_tab";
import Error404 from "./Error404/error404";
import Purchase_plateform from "./component_Purchase_Plateform/purchase_plateform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontView />} />
        <Route path="/about" element={<About_us />} />{" "}
        <Route path="/community" element={<Community />} />{" "}
        <Route path="/purchase" element={<Purchase_plateform />} />{" "}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
