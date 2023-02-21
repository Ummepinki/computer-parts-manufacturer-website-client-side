import React from "react";
import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import Business from "./Business";
import Categories from "./Categories";
import ComputerSystem from "./ComputerSystem";
import Contract from "./Contract";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <ComputerSystem></ComputerSystem>
      <Reviews></Reviews>
      <Business></Business>
      <Categories></Categories>
      <Contract></Contract>

      <Footer></Footer>
    </div>
  );
};

export default Home;
