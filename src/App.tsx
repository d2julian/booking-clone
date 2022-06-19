import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/home"></Navigate>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/hotels" element={<List />}></Route>
      <Route path="/hotel/:id" element={<Hotel />}></Route>
    </Routes>
  );
}

export default App;
