/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../component/providers/AuthProvider';
import ViewRecipeDetiles from '../ViewRecipeDetiles/ViewRecipeDetiles';
import {HashLoader} from 'react-spinners';

const RecipeView = () => {
    const {id}=useParams();
    const [chef, setChef] = useState({});

    const [loading, setLoading] = useState(true);

console.log(id);

    useEffect(() => {
        fetch(`https://bangladesh-food-server-git-main-mufizul27.vercel.app/recipe`)
        .then(res=>res.json())
        .then(data=> {
            setChef(data.find((e)=> e.id==id));
            setLoading(false);
        }
            
        );
  
    },[]);


    console.log(chef.recipesList);

    return (
        loading?
        <HashLoader color="#36d7b7" />:  <div>
            <h1>{chef.name}</h1>
           <div className='cardDesign h-100 w-100 mt-4'>
           {
            chef.recipesList.map(recipeItem=><ViewRecipeDetiles
             key={recipeItem.id}
             recipeItem={recipeItem}
            >

            </ViewRecipeDetiles>)
           }
          
     

           </div>
        </div>
    );
};

export default RecipeView;