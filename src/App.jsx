import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter basename="/Food-app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
