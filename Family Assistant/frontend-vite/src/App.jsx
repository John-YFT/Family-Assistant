import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "./main";
import { check } from "./http/userApi";
import Loading from "./components/modals/Loading";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About.jsx";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Thanks from "./components/modals/Thanks";
import ScrollToTop from "./components/ScrollToTop";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем авторизацию при загрузке
    const checkAuth = async () => {
      try {
        if (localStorage.getItem('token')) {
          const userData = await check();
          user.setUser(userData);
          user.setIsAuth(true);
        }
      } catch (e) {
        console.error('Ошибка проверки авторизации:', e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [user]);

  if (loading) {
    return <Loading />;
  }

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
          <ScrollToTop />
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
});

export default App;
