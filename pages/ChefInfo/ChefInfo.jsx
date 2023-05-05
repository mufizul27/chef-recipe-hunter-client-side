/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */

import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./chefInfo.css";

const ChefInfo = ({ chef }) => {
  const { experience, chefName, id, chefImage, recipes, likes } = chef;
  const navigator = useNavigate();

  const handleViewRecipes = () => {
    navigator(`/recipe/${id}`);
  };

  return (
    <Card className="cardInfoMainDiv g-col-6 g-col-md-4">
      <img className=" h-50 p-2 infoImage" src={chefImage} />
      <Card.Body>
        <Card.Title>{chefName}</Card.Title>
        <Card.Text> {experience} Year of experience</Card.Text>
        <Card.Text>Numbers of recipes:{recipes}</Card.Text>
        <div className="d-flex">
          <Card.Text className="me-2">Likes:{likes} </Card.Text>
          <FaThumbsUp />
          <Button onClick={handleViewRecipes} className="btn-secondary ms-auto">
            View Recipes
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChefInfo;
