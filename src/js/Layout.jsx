import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './Pages/Test';
import Test2 from './Pages/Test2';

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}></Route>
        <Route path="/testtwo" element={<Test2 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout;