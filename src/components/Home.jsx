
import React, {useState, useEffect} from 'react';
import CreateList from '../modals/createList.js';
import { db } from "../firebase/firebaseConfig";
import { onGetNotes } from "../firebase/firebase"
//import {getFirestore, collection, doc, set } from "firebase/firestore";
//import {getFirestore} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Note from './Note.js'
import "./Home.css"
//import sweet from "../src/components/Img/sweet.png"

const Lista = () => {
  const [modal, setModal] = useState(false);
  const [noteList, setNoteList] = useState([]); 
  const [busqueda, setBusqueda] = useState("");

  const showNotes = () => {
    onGetNotes((notes) => {    // obtengo mis notas
      const newNotes = [];
      notes.forEach((note) => {   // Recorro nota por nota
        const newNote = note.data();  // guardo en una variable el valor de los campos
        newNote['id'] = note.id;   // le agrego el id que obtengo del firebase a la variable
        newNotes.push(newNote);   // le agrego al array newNotes la newNote
      })
      console.log("newNotes = ", newNotes);
      setNoteList(newNotes);     // a la variable noteList le asigno el valor de la variable newNotes
    })
  }

  const addOrEditLink = async (linkObject) => {
    await addDoc(collection(db,'notes'), linkObject);  // agrego una nota a mi coleccion de firebase
    //addDoc(collection(db, 'posts'), doc().set(linkObject));
    console.log('nueva tarea agregada') 
    //date: Date.now(),
    showNotes();  // muestra todas las notas
    setModal(false); // ocultar el modal
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    console.log("Busqueda: " + e.target.value);
    filtrarBusqueda(e.target.value)
  }

  const filtrarBusqueda = (buscar) => {
    const resultadoBusqueda = noteList.filter((elemento) => {
      console.log("Este es notelist: " + noteList)
      if(elemento.name.toString().toLowerCase().includes(buscar.toLowerCase())){  // convertimos a string, despues a minuscula y comprobar si coincide con el termino de busqueda(lo convertimos a minuscula)
        return elemento;                                                          // si coincide retorna el elemento, 
      }
    });
    setNoteList(resultadoBusqueda);
  }
  
  useEffect(() => {
    showNotes();  // se va a ejecutar cuando se cargue el componente
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
  
    //por cada nota de  noteList se crea un componente Note que se agrega al div task-container 
    return (
      <>
        <div className = "header text-center">
            <h3>Sweet Note</h3>
            <button className = "loginButton" onClick={() => setModal(true)}>Create List</button>
            <div className = "busqueda">
              <div className = "containerInput">
                <input className="form-control inputBuscar"
                  value={busqueda}
                  placeholder= "Busqueda por Titulo"
                  onChange={handleChange}
                />
                <button className="btn btn-success">
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </div>
            </div>
        </div>
        <div className = "task-container">  
          {noteList && noteList.map((obj, index) => <Note key = {obj.id} id = {obj.id} listObj = {obj} index = {index} deleteList = {deleteList} updateListArray = {updateListArray} date = {obj.date}/>)}
        
        
        </div>
        <CreateList toggle = {toggle} modal = {modal} save = {saveList}  addOrEditLink = {addOrEditLink} />
      </>
    );

};

export default Lista;

