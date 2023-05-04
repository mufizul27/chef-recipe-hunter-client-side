/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */


import React from 'react';
import { Button, Card, CardGroup, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
import {HashLoader} from 'react-spinners'

const ChefInfo = ({chef}) => {
    const {experience, chefName,id,chefImage,recipes,likes}=chef;
    const navigator=useNavigate();
    

    const handleViewRecipes=()=>{
      navigator(`/recipe/${id}`);
    }

    return (
      <LazyLoad   onContentVisible={() => <HashLoader color="#36d7b7" />}>
        <CardGroup>
      <Card >
        <Card.Img className=" w-75 h-50 p-2  m-1 " src={chefImage} />
        <Card.Body>
          <Card.Title>{chefName}</Card.Title>
          <Card.Text> {experience} Year of experience</Card.Text>
          <Card.Text>Numbers of recipes:{recipes}</Card.Text>
          <div className='d-flex align-items-center'>
          <Card.Text className='me-2'>Likes:{likes} </Card.Text><FaThumbsUp/>
          <Button onClick={handleViewRecipes} className="btn-secondary ms-auto">View Recipes</Button>
          </div>

        </Card.Body>
      
        
       
      </Card>
     
    </CardGroup>
      </LazyLoad>
    );
};

export default ChefInfo;