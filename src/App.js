import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/detail";
import HomePage from "./components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
