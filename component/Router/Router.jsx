import Blog from "../../pages/Blog/Blog.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import Header from "../../pages/Header/Header.jsx";

import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { HashLoader } from "react-spinners";
import Lottie from "lottie-react";
import loading from "../../assets/loading_animation.json";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import Login from "../../pages/Login/Login.jsx";
import RecipeView from "../../pages/Recipe_view/RecipeView.jsx";
import Register from "../../pages/Register/Register.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PrivateRoute from "./privaect_route";

const HomeData = React.lazy(() => import("../../pages/Home/Home"));

const HomeComponent = () => (
  <div>
    <Suspense
      fallback={
        <div className="loading-container">
          <Lottie animationData={loading} />
        </div>
      }
    >
      <HomeData />
    </Suspense>
  </div>
);

const router = createBrowserRouter([
  {
    loader: () =>
      fetch(
        "https://bangladesh-food-server-jmf2nc7pj-mufizul27.vercel.app/recipe"
      ),
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <HomeComponent></HomeComponent>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/login",
        element: (
          <ProtectedRoute>
            <Login></Login>
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register></Register>
          </ProtectedRoute>
        ),
      },
      {
        path: "recipe/:id",
        element: (
          <PrivateRoute>
            <RecipeView></RecipeView>
          </PrivateRoute>
        ),
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
