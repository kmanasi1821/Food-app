import React from "react";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout";
import Products from "../components/Products/Products";
const Home = () => {
  return (
    <Layout>
      <Banner></Banner>
      <Products></Products>
      <Contact></Contact>
    </Layout>
  );
};

export default Home;
