/*eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { AuthContext } from "../../component/providers/AuthProvider";

const Register = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState('');
    const { createUser,updateProfileUser,logOut,signIn } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const image = form.image.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, password)

        setError('');
        console.log("hell");
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      console.log("okay tikh ace ");
    } else {
      setError("password tikh nai");
      return;
    }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfileUser(name,image).then(() => {
                  logOut();
                  signIn(email,password).then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser)
                })
                .catch(error => {
                    console.log(error);
                    setError(error.message);
                })

                }).catch((error) => {
                  console.log("not Update");
                });
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
              <p className="text-danger">{error}</p>
              <form onSubmit={handleRegister}>
                <input
                  className="email p-3 m-2"
                  type="text"
                  name="name"
                  placeholder="Input your Name"
                  required
                />
                <input
                  className="email p-3 m-2"
                  type="text"
                  name="image"
                  placeholder="Input photo Url"
                  required
                />
                <input
                  className="email p-3 m-2"
                  type="email"
                  name="email"
                  placeholder="Input your email"
                />
                <div className="pass-container">
                  {control ? (
                    <input
                      className="password p-3 m-2"
                      type="text"
                  name="password"
                      placeholder="Input your password"
                    />
                  ) : (
                    <input
                    name="password"
                      className="password p-3 m-2"
                      type="password"
                      placeholder="Input your password"
                    />
                  )}
                  <button onClick={() => setControl(!control)}>toggle</button>
                </div>
                <button
                  type="submit"
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                  <Link to="/login">already have account? login here..</Link>
                    
                  </small>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="w-100"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
        <SocialLoginBtn></SocialLoginBtn>
      </div>
    </div>
  );
};

export default Register;