import React from "react";
import { Layanan, Rekomendasi, Welcome } from "..";

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
