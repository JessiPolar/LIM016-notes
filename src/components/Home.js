import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {
      try {
        await logOut();
      }catch (err) {
          console.log(err.message);
      }
  }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Sweet Note
        <br />
        {user && user.email}
      </div>
      <div className="d-grip gap-2">
        <Button variant="primary" onClick={handleLogout}>
            Log out
        </Button>
      </div>
    </>
  );
};

export default Home;