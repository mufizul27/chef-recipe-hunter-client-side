/*eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import './Blog.css'
import Pdf from "react-to-pdf";
import { AuthContext } from '../../component/providers/AuthProvider';



const Blog = () => {
    return (
        <div className='Question-one mt-20 ms-60 me-32' >
            
            <div className='AllQuestionDesign' >
                <h2 className='text-2xl' >1.Tell us the differences between uncontrolled and controlled components?</h2>
                <p className='Question-one'>
                Controlled components are those that have their state managed by the applications code. In other words, the application is responsible for maintaining and updating the state of the component. Typically, this involves passing in a value to the component and then handling any changes to that value via callbacks or event handlers. Because the application has full control over the components state, it can ensure that the component behaves predictably and consistently.

                Uncontrolled components, on the other hand, manage their own state internally. The application can still interact with them by setting initial values or attaching event listeners, but the component is ultimately responsible for managing its own state. This can be useful for simpler components where the overhead of managing state externally isnt worth it, but it can also lead to more unpredictable behavior if the components internal state isnt properly managed.

                In summary, controlled components give the application more control over the behavior and state of a user interface element, while uncontrolled components leave more responsibility to the component itself.
                                
                    
                    
                </p>



                <h2 className='text-2xl'> 2.How to validate React props using PropTypes?</h2>

                <p className='Question-two '>
                
                Certainly! In React, components often receive props (short for properties) from their parent components. PropTypes is a package in React that provides a way to validate the type and presence of props passed to a component.

                To use PropTypes, you need to import it from the prop-types package at the beginning of your file. Then, you can define the PropTypes for your component by adding a static property called propTypes to your component function or class.
                                </p>



                <h2 className='Question-three text-2xl'>3.Tell us the difference between nodejs and express js.?</h2>

                <p>
                Node.js and Express.js are two popular technologies used for building web applications with JavaScript. While they are related, they serve different purposes and have distinct differences.

Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It provides a JavaScript runtime environment and a set of APIs that enable developers to build server-side applications using JavaScript. With Node.js, developers can build scalable, high-performance web applications that handle a large number of concurrent requests.

On the other hand, Express.js is a web application framework built on top of Node.js. It provides a set of features and tools for building web applications, such as routing, middleware, and template rendering. Express.js is designed to make it easier to build web applications with Node.js by providing a simpler and more streamlined interface for handling HTTP requests and responses.

In summary, Node.js is a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications. Express.js simplifies the process of building web applications with Node.js by providing a higher-level abstraction over the low-level APIs provided by Node.js.
                </p>



                <h2 className='Question-four text-2xl '>4.What is a custom hook, and why will you create a custom hook?</h2>
                <p>
                In React, a custom hook is a function that uses the built-in hooks (like useState, useEffect, useContext, etc.) to provide a specific functionality or behavior that can be reused across different components. Custom hooks allow developers to extract and share common logic between components without having to repeat code.

        Custom hooks are created to encapsulate specific functionalities and behaviors that are shared across different components. For example, a custom hook could be created to handle API calls, manage a forms state and validation, or handle user authentication. By creating a custom hook, developers can easily reuse the same functionality across different components, without having to rewrite the code.

        Custom hooks are also useful for abstracting complex logic and making it easier to test. By extracting the logic into a custom hook, developers can write tests for the hook function and ensure that it works as expected across different components.

        To create a custom hook in React, simply create a function that uses one or more of the built-in hooks (like useState, useEffect, useContext, etc.) to provide a specific functionality or behavior. Then, export the function and use it in any component where you want to reuse the functionality 
                </p>

            </div>




        </div>
    );
};

export default Blog;

