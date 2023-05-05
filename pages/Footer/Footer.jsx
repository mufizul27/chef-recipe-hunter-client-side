/*eslint-disable no-unused-vars */
import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <div>
      
 
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our FoodsHub</strong>
                </p>
              </MDBCol>

              

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

       

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-bold'> Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>Email: jhjmhgj@gmail.com</p>
                </li>
                <li>
                  <p>Facebook: hlmjlkjhh.com</p>
                </li>
                <li>
                <p>Twitter: hlmjlkjhh.com</p>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-bold'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>Total Product</p>
                </li>
                <li>
                  <p>Resources</p>
                </li>
                <li>
                  <p></p>

                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-bold'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                 <p>Open Source</p>
           
                 
                </li>
                <li>
                <p>Service</p>
                </li>
                <li>
                        
                 <p>Client Review</p>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-bold'>Help Center</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>Showcase</p>

                </li>
                <li>
                  <p>Wid Get Kit</p>
                </li>
                <li>
                  <p>Support</p>

                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright.All Rights Reserved
        
      </div>
    </MDBFooter>
 
 

        </div>
    );
};




export default Footer;
