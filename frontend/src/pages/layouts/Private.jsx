import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import User from "../../contexts/User";

function Private() {
  const { user } = useContext(User.UserContext);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Private;
