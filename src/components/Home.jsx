
import React, {useState, useEffect} from 'react';
import CreateList from '../modals/createList.js';
import Note from './Note.js'

const Lista = () => {
  const [modal, setModal] = useState(false);
  const [noteList, setNoteList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("notelist")
     
    if(arr){
      let obj = JSON.parse(arr)
      setNoteList(obj)
    } 
  }, [])

  const deleteList = (index) => {
    let tempList = noteList
    tempList.splice(index, 1)
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setNoteList(tempList)
    window.location.reload() 
    
    

  }

  const updateListArray = (obj, index) => {
    let tempList = noteList
    tempList[index] = obj
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setNoteList(tempList)
    window.location.reload() 
     

  }

  const toggle = () => {
    setModal(!modal);
  }

  const saveList = (listObj) => {
    let tempList = noteList
    tempList.push(listObj)
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setNoteList(noteList)
    setModal(false)
  }

    return (
      <>
        <div className = "header text-center">
            <h3>Sweet Note</h3>
            <button className = "btn btn-primary mt-2" onClick={() => setModal(true)}>Create List</button>
        </div>
        <div className = "task-container">
          {noteList && noteList.map((obj, index) => <Note listObj = {obj} index = {index} deleteList = {deleteList} updateListArray = {updateListArray}/>)}
        </div>
        <CreateList toggle = {toggle} modal = {modal} save = {saveList}/>
      </>
    );

};

export default Lista;

/*
const saveList = (listObj) => {
    let tempList = noteList
    tempList.push(listObj)
    setNoteList(tempList)
    setModal(false)
  }
 */ 

/*
import React from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

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

*/
