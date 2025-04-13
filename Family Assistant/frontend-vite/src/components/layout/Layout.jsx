import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Thanks from "../modals/Thanks";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <NavBar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 