import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Public from "@pages/layouts/Public";
import Register from "@pages/Register";
import Login from "@pages/Login";
import LivresForm from "@pages/LivresForm";
import Prets from "@pages/Prets";
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
          <Route path="livresForm" element={<LivresForm />} />
          <Route path="prets" element={<Prets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
