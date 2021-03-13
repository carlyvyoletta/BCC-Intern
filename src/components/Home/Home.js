import React from "react";
import { Layanan, Rekomendasi, Welcome } from "..";
import Product from '../../pages/Product/Product'

const Home = () => {
  return (
    <div>
      <Welcome/>
      <Rekomendasi />
      <Layanan />
    </div>
  );
};

export default Home;
