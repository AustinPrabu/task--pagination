import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
