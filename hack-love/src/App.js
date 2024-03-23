import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./routes/Home";
import Creation from "./routes/Creation";
import Result from "./routes/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create_room" element={<Creation />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
