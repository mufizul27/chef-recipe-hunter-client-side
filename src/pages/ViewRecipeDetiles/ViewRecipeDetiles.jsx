/*eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import cartRecipesLoader from '../../utilities/recipesLoad';
import { addToDb, checkIsHave } from '../../utilities/localStroage';
//2 import for toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ViewRecipeDetiles = (recipeItem) => {
 
  
  const {recipeImage,recipeName,chefName,chefImage,
    experience,recipes,likes,
    ingredients,cookingMethod,rating,description,chefId,id} = recipeItem.recipeItem
    cartRecipesLoader();
    
var isButtonDisable=  checkIsHave(id);
    

  const  handleSaveLocalStorage=()=>{
    addToDb(id);
    }
    return (
        <div>
            <CardGroup>
      <Card >
      
        <Card.Img className=" top" src={recipeImage} />
        <p>{chefName}</p>
        <h3 className='btn btn-primary' >{recipes}</h3>
        <Card.Body>
          <Card.Title>{recipeName}</Card.Title>
         
        </Card.Body>
        <Button disabled={isButtonDisable}  onClick={handleSaveLocalStorage} className="btn-secondary">Favorite Recipe</Button>
      </Card>
     
    </CardGroup>
    <ToastContainer/>
        </div>
    );
};

export default ViewRecipeDetiles;