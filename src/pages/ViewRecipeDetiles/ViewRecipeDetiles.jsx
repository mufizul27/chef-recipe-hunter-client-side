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
       <img className=" top w-80 h-50 p-4" src={recipeImage}  alt="" />
        
        <h3 className='text-center'>{chefName}</h3>
        <Card.Title className='ps-4'>{recipeName}</Card.Title>
       
        <p className='p-4'> <span>Ingredients:</span> {ingredients}</p>
        <p className='p-4'>CookingMethod: {cookingMethod}</p>
        <p className='p-4'>Description: {description}</p>
        <p className='p-4'>Rating: {rating}</p>
        <Card.Body>
          
         
        </Card.Body>
        <Button disabled={isButtonDisable}  onClick={handleSaveLocalStorage} className="btn-secondary mb-2">Favorite Recipe</Button>
      </Card>
     
    </CardGroup>
    <ToastContainer/>
        </div>
    );
};

export default ViewRecipeDetiles;