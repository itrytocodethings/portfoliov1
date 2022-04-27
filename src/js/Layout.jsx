import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
