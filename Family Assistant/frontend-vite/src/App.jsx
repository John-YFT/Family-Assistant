import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/modals/Loading";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About.jsx";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
