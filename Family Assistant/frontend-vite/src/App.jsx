import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/modals/Loading";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Здесь будут другие маршруты */}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
