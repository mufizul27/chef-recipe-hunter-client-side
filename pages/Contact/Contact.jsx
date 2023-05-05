/*eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <div className='contact '>
         <div className=' p-26 border mt-4 mb-4 text-center'>
            <h4>Name: abdul korim</h4> 
            <h5>Title: Head </h5>
            <p>Restaurant: The Gourmet Kitchen</p>
            <p>Address: 123 Main Street, Anytown Bangladesh 12345</p>
            <p>
                Phone: (555) 555-1234 <br />
                Email: korim.doe@gourmetkitchen.com <br />

               

            </p>
            <h3> Alternatively, if the chef is a freelancer or runs a <br />
             catering business, the contact information might look like this: <br /></h3> <br />


            <h4> Name: Smitha Roy</h4>

            <h5>Title: Chef and Owner</h5>
            <p>Company: Jans Catering <br />
                Address: 456 Elm Street, Suite 200, Anytown USA 12345 <br />
                Phone: (555) 555-5678 <br />
                Email: jane@janescatering.com <br />
                Website: www.janescatering.com</p>

        </div>
       </div>
    );
};

export default Contact;