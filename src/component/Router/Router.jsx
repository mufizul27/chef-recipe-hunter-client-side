
import Blog from '../../pages/Blog/Blog.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import Header from '../../pages/Header/Header.jsx';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from '../../pages/Login/Login.jsx';
import Register from '../../pages/Register/Register.jsx';
import Home from '../../pages/Home/Home.jsx';
import RecipeView from '../../pages/Recipe_view/RecipeView.jsx';


const router = createBrowserRouter([
 {
  loader: () => fetch('https://bangladesh-food-server-jmf2nc7pj-mufizul27.vercel.app/recipe'),
  path:'/',
  element:<Header></Header> ,
  children: [
    {
      path: '/',
      element: <Home></Home>
     },
     {
        path: '/contact',
        element:<Contact></Contact>
       }
     ,
     {
        path: '/blog',
        element:<Blog></Blog>
       }
     ,
     {
        path: '/login',
        element:<Login></Login>
       }
     ,
     {
        path: '/register',
        element:<Register></Register>
       }
       ,
     {
        path: 'recipe/:id',
        element:<RecipeView ></RecipeView>
       }
  ]
 },
]);

export default router;
