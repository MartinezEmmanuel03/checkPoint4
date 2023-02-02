import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Public from "@pages/layouts/Public";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
