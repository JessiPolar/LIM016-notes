import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

<header>
    <div class="header-background-color-padding">
        <div class="title">
            <h1 class="not-margin"> 
            <a class="link-color"  >Pet's Love</a> 
            </h1>
        </div>
        
        <div>
            <img id="btnSalir" class="btnSalir" src="../../view/img/flecha.png" alt="cerrar sesión"/>
        </div>
    </div>
    </header>

const Home = () => {
  const { user, logOut } = useUserAuth();
   console.log(user); 
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Sweet Note
        <br />
        {user && user.email}
      </div>
      <div className="d-grip gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
/*
const Home = () => {
  const { user, logOut } = useUserAuth();
   console.log(user); 
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Sweet Note
        <br />
        {user && user.email}
      </div>
      <div className="d-grip gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
};
*/
