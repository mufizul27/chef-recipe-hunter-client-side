/*eslint-disable no-unused-vars */
import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { addToDb, checkIsHave } from "../../utilities/localStroage";
import cartRecipesLoader from "../../utilities/recipesLoad";
//2 import for toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ViewRecipeDetiles.css'

const ViewRecipeDetiles = (recipeItem) => {
  const {
    recipeImage,
    recipeName,
    chefName,
    chefImage,
    experience,
    recipes,
    likes,
    ingredients,
    cookingMethod,
    rating,
    description,
    chefId,
    id,
  } = recipeItem.recipeItem;
  cartRecipesLoader();

  var isButtonDisable = checkIsHave(id);

  const handleSaveLocalStorage = () => {
    addToDb(id);
  };
  const rand = Math.random(10);
  return (
    <div>
      <CardGroup >
        <Card >
          <img className="recipeImageContainer p-4" src={recipeImage} alt="" />

          <h3 className="text-center">{chefName}</h3>
          <Card.Title className="ps-4">{recipeName}</Card.Title>

          <p className="p-4">
            {" "}
            <span>Ingredients:</span> {ingredients}
          </p>
          <p className="p-4">CookingMethod: {cookingMethod}</p>
          <p className="p-4">Description: {description}</p>
          <div className="d-flex justify-content-between">
          <p className="p-4">Rating: {rating}</p>
          <p className="p-4">Price: {(100*rand).toFixed(2)}৳</p>
          </div>
          <Card.Body></Card.Body>
          <Button
            disabled={isButtonDisable}
            onClick={handleSaveLocalStorage}
            className="btn-secondary mb-2"
          >
            Favorite Recipe
          </Button>
        </Card>
      </CardGroup>
      <ToastContainer />
    </div>
  );
};

export default ViewRecipeDetiles;
