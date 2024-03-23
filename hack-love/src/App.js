import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./routes/Home";
import Creation from "./routes/Creation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create_room" element={<Creation />} />
    </Routes>
  );
}

export default App;
