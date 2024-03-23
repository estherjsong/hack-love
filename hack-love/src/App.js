import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./routes/Home";
import Creation from "./routes/Creation";
import Result from "./routes/Result";
import Entering from "./routes/Entering";
import Waiting from "./routes/Waiting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create_room" element={<Creation />} />
      <Route path="/result" element={<Result />} />
      <Route path="/enter_room" element={<Entering />} />
      <Route path="/waiting_room" element={<Waiting />} />
    </Routes>
  );
}

export default App;
