/*eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import ChefInfo from "../ChefInfo/ChefInfo";
import "./Home.css";
import { AuthContext } from "../../component/providers/AuthProvider";
import { useNavigation } from "react-router-dom";
import DeliciousFood from "../DeliciousFood/DeliciousFood";
import PopularFood from "../PopularFood/PopularFood";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Home = () => {
  const [chefList, setChefList] = useState([]);

  useEffect(() => {
    fetch(
      "https://bangladesh-food-server-git-main-mufizul27.vercel.app/recipe?"
    )
      .then((res) => res.json())
      .then((data) => setChefList(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
       
      <h1 className="text-center">Our Most Popular Chef</h1>
      <div className="cardDesign h-80 w-100 mt-4 ">
        {chefList.map((chef) => (
          <ChefInfo key={chef.id} chef={chef}></ChefInfo>
        ))}
      </div>
      <DeliciousFood></DeliciousFood>
   <PopularFood></PopularFood>

    </div>
  );
};

export default Home;
