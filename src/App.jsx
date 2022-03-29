import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Sidebar from "../src/components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      
      color,
    });
    setNotes(tempNotes);
  };


  
  return (
    <Container className = "App">
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route 
                path="/home" 
                element={
                  <ProtectedRoute>
                    <Home />
                    <Sidebar addNote={addNote}/>
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    

  );
}

export default App;
