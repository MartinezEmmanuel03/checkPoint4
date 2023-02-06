import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Public from "@pages/layouts/Public";
import Private from "@pages/layouts/Private";
import Register from "@pages/Register";
import Login from "@pages/Login";
import LivresForm from "@pages/LivresForm";
import Prets from "@pages/Prets";
import Livres from "@pages/Livres";
import Livre from "@pages/Livre";
import Emprunts from "@pages/Emprunts";
import Page404 from "@pages/Page404";
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
          <Route path="livres" element={<Livres />} />
          <Route path="livres/:id" element={<Livre />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/" element={<Private />}>
          <Route path="livresForm" element={<LivresForm />} />
          <Route path="prets" element={<Prets />} />
          <Route path="emprunts" element={<Emprunts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
