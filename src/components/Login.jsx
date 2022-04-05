import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("uid", user.uid)
        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
      })
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    }catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <>
    <div className="container c-custom">
      <div className="row r-custom">

        <div className="col p-4 box bg">
          {/* <img src="overflow: hidden" alt="imagen" /> */}
          <h2 className="title-custom">Sweet Note</h2>  
        </div>

        <div className="col p-4 box">
          <h2 className="mb-3 text-center login-custom">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control 
                type="email" 
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grip gap-2 btn-login-container">
              <Button variant="primary" type="Submit" className="btn-login-custom">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div className="btn-login-google-container">
            <div>
              <GoogleButton className="g-btn btn-login-google-custom" type="dark" onClick={handleGoogleSignIn} />
            </div>
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup" className="link-custom">Sign Up</Link> 
          </div>
        </div>

      </div> 
    </div>
    </>


    // <>
    //   <div className="p-4 box">
    //     <h2 className="mb-3">Login</h2>
    //     {error && <Alert variant="danger">{error}</Alert>}
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Control 
    //           type="email" 
    //           placeholder="Email address"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Control 
    //           type="password" 
    //           placeholder="Password" 
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </Form.Group>

    //       <div className="d-grip gap-2">
    //         <Button variant="primary" type="Submit">
    //           Log In
    //         </Button>
    //       </div>
    //     </Form>
    //     <hr />
    //     <div>
    //       <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
    //     </div>
    //   </div>
    //   <div className="p-4 box mt-3 text-center">
    //     Don't have an account? <Link to="/signup">Sign Up</Link> 
    //   </div>
    // </>
  );
};

export default Login;

