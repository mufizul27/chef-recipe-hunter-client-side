/*eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DeliciousFood = () => {
    return (
        <div className='mt-4 text-center'>
        <h1>Categories</h1>
        <h4>A large selection of dishes for cocking</h4>
        <div>

        <Container>
  <Row>
    
    <Col  >
     <div className=' gap-4  mt-4  d-flex shadow-lg p-3 me-4 mb-3 ms-4 bg-body rounded'>
        
       
        
        <div>
        <img src="https://i.ibb.co/37h5KW6/category2.jpg" alt="" />
        <p>Drinks</p>
        </div>
        <div >
        <img src="https://i.ibb.co/QpMhjK1/download-1.jpg" alt="" />
        <p>Dinner</p>

        </div>
        <div >
        <img src="https://i.ibb.co/t8jvLxy/download-2.jpg" alt="" />
        <p>Lunch</p>
        </div>
        
     
     </div>
    </Col>
   
  </Row>
</Container>

            
        </div>
    </div>
    );
};

export default DeliciousFood;

