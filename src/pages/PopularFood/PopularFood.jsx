/*eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const PopularFood = () => {
    return (
        <div className='mb-4'>
            <h1 className='text-center mt-4'>Bangladesh Different Type Recipe </h1>

            
            <div className='d-flex position-relative gap-4  grid grid-cols-3'>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Open your Fridge!</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>

                </Card.Body>

            </Card>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>choose a recipe</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>

                </Card.Body>

            </Card>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Enjoy Your Dish!</Card.Title>

                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>

                </Card.Body>

            </Card>

            </div>





        </div>
        

    );
};

export default PopularFood;