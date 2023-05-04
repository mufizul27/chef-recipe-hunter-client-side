/*eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import './Blog.css'
import Pdf from "react-to-pdf";
import { AuthContext } from '../../component/providers/AuthProvider';



const Blog = () => {
    return (
        <div className='Question-one mt-20 ms-60 me-32' >
            
            <div className='AllQuestionDesign' >
                <h2 className='text-2xl' >1.When should you use context API?</h2>
                <p className='Question-one'>
                
                   Context is primarily used when some data needs to be accessible by many   components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context
                    When passing props down multiple levels becomes difficult and cumbersome.
                    When you need to share data across multiple components that are not in a parent-child relationship.When you have a large application with many components that need access to the same data.When you need to avoid prop drilling and keep your code clean and readable.However, it's important to note that overusing the Context API can make your code harder to understand and maintain. So, you should carefully consider whether Context API is the right solution for your particular use case. 
                    
                    
                </p>



                <h2 className='text-2xl'> 2.What is a custom hook?</h2>

                <p className='Question-two '>
                A custom hook in React is a JavaScript function that starts with the prefix and allows you to extract reusable logic from a component. It enables you to reuse stateful logic between components without using render props, higher-order components, or other complex patterns.

                Custom hooks provide a way to encapsulate commonly used functionality that can be shared across multiple components. They are used to abstract away complex logic, reduce duplication, and promote code reusability.

                A custom hook can use other built-in hooks, such as useState, useEffect, and useContext, to provide additional functionality to components. By creating custom hooks, developers can make their code more modular, easier to test, and less prone to bugs.

                For example, a custom hook might encapsulate the logic for fetching data from an API and storing it in state. This hook could then be used in multiple co
                </p>



                <h2 className='Question-three text-2xl'>3.What is useRef?</h2>

                <p>
                In React, useRef is a hook that provides a way to store and access mutable values that persist between renders. It returns a mutable ref object that can hold any value, similar to the ref object used in class components.

                The most common use case for useRef is to access the DOM nodes or elements in the component. When a ref is attached to a component, the ref object can be used to get a reference to the underlying DOM node or element. This allows you to manipulate the DOM directly, bypassing React's virtual DOM, and access properties or methods of the underlying DOM node.

                Additionally, useRef can be used to store and access any other mutable value that needs to persist between renders, such as a timer ID or a value that needs to be accessed from within an event handler.
                </p>



                <h2 className='Question-four text-2xl '>4.What is useMemo?</h2>
                <p>
                The useMemo hook in React is used to optimize the performance of functional components by caching the result of an expensive calculation. When a component re-renders, it may execute the same calculations again and again, even if the inputs to those calculations haven't changed. This can be a waste of resources, especially if the calculation is time-consuming.

                The useMemo hook memoizes the result of the calculation, meaning that it stores the value in memory and only recalculates it if the inputs to the calculation change. If the inputs are the same as before, useMemo will return the cached value instead of re-executing the calculation. This can help to improve the performance of your application by avoiding unnecessary calculations.

                To use useMemo, you pass in a function that performs the calculation and an array of dependencies that the calculation depends on. The hook will compare the current dependencies to the previous dependencies and only re-execute the calculation if they have changed. If they are the same, the cached value will be returned.

                Overall, useMemo is a useful tool for optimizing the performance of React applications that have expensive calculations or complex logic.


                </p>

            </div>




        </div>
    );
};

export default Blog;

