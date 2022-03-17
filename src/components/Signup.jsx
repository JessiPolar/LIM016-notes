import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { set, ref } from "firebase/database";
import { database } from "../firebase/firebaseConfig";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      /* await signUp(email, password); */
      signUp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, `'users/' ${user.uid}`), {
          username: username,
          email: email
        });
      })
      navigate("/");
    } catch (err) {
      console.log(err)
      console.log(err.code)
      console.log(err.message)
      setError(err.message);
    }
  }; 
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control 
              type="text" 
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group> 
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
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link> 
      </div>
    </>
  );
};

export default Signup;

/*
import React from 'react';
import { getDatabase, set, ref } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const database = getDatabase();
const auth = getAuth();
const navegar = useNavigate()
// Registrarse
const RegistroUsuario = () =>{
  const signUp = (e) => {
    e.preventDefault();
    const name = document.getElementById('usuario').value;
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('contraseña').value;
    const passconfirm = document.getElementById('confirmarContraseña').value;
    if (password === passconfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          set(ref(database, `'users/' ${user.uid}`), {
            name: name,
            email: email
          });
          alert('user created!');
          navegar('/');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage, errorCode);
        });
    } else {
      alert(error);
    }
  };

  return (

    <section id="modal" className='containerRegister'>
      <a className="closeModal" href="#/">x</a>
      <h2 className="headerModal">Registro de Usuario </h2>
      <form id="container-modal" className="registrationForm">
        <input type="text" id="usuario" className="inputRegister"/>

        <input type="email" id="e-mail" className="inputRegister"/>

        <input type="password" id="contraseña" className="inputRegister"/>

        <input type="password" id="confirmarContraseña" className="inputRegister"/>

        <button onClick={signUp} type="submit"  className="buttonSendData">Enviar</button>
      </form>
    </section>
  ),
}

export default RegistroUsuario;
*/
