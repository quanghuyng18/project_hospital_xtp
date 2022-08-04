import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounting from "../Modules/Accounting/Accounting";
import Reception from "../Modules/Reception/Reception";
import Xray from "../Modules/X-Ray/Xray";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Reception />} />
          <Route path="Reception" element={<Reception />} />
          <Route path="Accounting" element={<Accounting />} />
          <Route path="Xray" element={<Xray />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
