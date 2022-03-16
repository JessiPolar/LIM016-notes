import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
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
      <div className="p-4 box">
        <h2 className="mb-3">Firebase auth Login</h2>
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

          <div className="d-grip gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" onclick={handleGoogleSignIn} />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link> 
      </div>
    </>
  );
};

export default Login;

/*
import React from 'react';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, update } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
//import {FormGroup, Modal} from 'reactstrap';
import logo from "../components/img/sweet.png"

const database = getDatabase();
const auth = getAuth();

// Login
function RegistrarUsuario() {
  const navegar = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogIn').value;
    const password = document.getElementById('contraseñaLogIn').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        if (user.emailVerified === false) {
          navegar('/login');
        } else {
          navegar('/home');
        }

        const dt = new Date();

        update(ref(database, `'users/' ${user.uid}`), {
          last_login: dt,
        });

        alert('User logged in');
        navegar('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage, errorCode);
      });
  };

  // const user = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (

    <section className="containerLogin">
      <img  src={logo}/>
    </section>
    <div className="containerMainLogo">
      <h2 className="logoFooter">Sweet Note</h2>
      <div className="firstSubcontainerLogin">
        <p className="welcomePhrase">¡Bienvenid@ a Pet's Love!</p>
        <Form className="loginForm" method='POST'>
          <input
           type="email"
           id="emailLogIn"
           className="inputLogin"
           placeholder="Email"/>

          <input
          type="password"
          id="contraseñaLogIn"
          className="inputLogin"
          placeholder="Password"/>
          <button onClick={login} id="btnEntrar" className="loginButton">Ingresar</button>
        </Form>
        </div>
          <p className="enterWith">¿No tienes una cuenta?<a id="btnRegistrar"
          className="registerButton"  href="signup" > Regístrate</a></p>
        </div>
      </div>
    </div>
  ),
};

export default RegistrarUsuario;
*/
