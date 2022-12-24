import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
