
import React, {useState, useEffect} from 'react';
import CreateList from '../modals/createList.js';
import { db } from "../firebase/firebaseConfig";
import { onGetNotes } from "../firebase/firebase"
//import {getFirestore, collection, doc, set } from "firebase/firestore";
//import {getFirestore} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Note from './Note.js'

const Lista = () => {
  const [modal, setModal] = useState(false);
  const [noteList, setNoteList] = useState([]) 

  const showNotes = () => {
    onGetNotes((notes) => {
      const new_notes = [];
      notes.forEach((note) => {
        const new_note = note.data();
        new_note['id'] = note.id;
        new_notes.push(new_note);
      })
      console.log("new_notes = ", new_notes);
      setNoteList(new_notes);
    })
  }

  const addOrEditLink = async (linkObject) => {
    await addDoc(collection(db,'notes'), linkObject);
    //addDoc(collection(db, 'posts'), doc().set(linkObject));
    console.log('nueva tarea agregada')
    showNotes();
    setModal(false);
  }
  
  useEffect(() => {
    
    /* let arr = localStorage.getItem("notelist") 
    if(arr){
      let obj = JSON.parse(arr)
      setNoteList(obj)
    } */
    showNotes(); 
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
          {noteList && noteList.map((obj, index) => <Note key = {obj.id} listObj = {obj} index = {index} deleteList = {deleteList} updateListArray = {updateListArray}/>)}
        </div>
        <CreateList toggle = {toggle} modal = {modal} save = {saveList}  addOrEditLink = {addOrEditLink} />
      </>
    );

};

export default Lista;

