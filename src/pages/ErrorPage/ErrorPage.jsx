/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="py-48 px-48 text-center">
      <div className="ErrorPageDesign text-9xl  ">
        <h1>404 </h1>
        
      </div>
      <p className=" text-xl">We're sorry, but the page you are looking for cannot be found.</p>
     <div className="  mt-6">
     <Link
        to="/"
        className="px-4 py-3 font-semibold rounded bg-cyan-200 text-gray-900 mt-6"
      >
        Back to Homepage
      </Link>

     </div>
    </div>
  );
};

export default ErrorPage;
