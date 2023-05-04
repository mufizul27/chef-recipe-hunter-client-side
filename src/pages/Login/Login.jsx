/*eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../component/providers/AuthProvider";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";


const Login = () => {
  const [error, setError] = useState('');
  const {signIn}=useContext(AuthContext);
  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, confirm)

    setError('');
   
   if (password.length < 6) {
        setError('password must be 6 characters or longer')
        return
    }

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

}

  
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form onSubmit={handleSignUp}>
                <input
                  className="email p-3 m-2"
                  type="email"
                  name="email"
                  placeholder="Input your email"
                />
              
                <input
                  className="password p-3 m-2"
                  type="password"
                  name="password"
                  placeholder="Input your password"
                />
                 <p className='text-error'>{error}</p>
               
                <button className="btn btn-info w-75 p-2 mt-3"  type="submit">Login</button>
                <p className="p-2">
                  <small className="text-info">
                    are you new?  <Link to="/register" className="d-inline text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">register here..</li>
          </Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/gwJsMdj/Top-30-Food-in-Bangladesh.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <SocialLoginBtn></SocialLoginBtn>
    </div>
  );
};

export default Login;