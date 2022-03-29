import React, {useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { db } from '../firebase/firebaseConfig';
import { updateNote } from "../firebase/firebase"

const EditList = ({id, modal, toggle, listObj, description, date}) => {
    //const date = new Date();
    const state = {
        name: '',
        description: '',
        //date: date.toLocaleDateString(),
        date: Date.now(),
    };
    const [listName, setListName] = useState(state);
    /* const [description, setDescription] = useState('state'); */ 
   
     const handleChange = (e) => {
       
        const {name, value} = e.target;
        setListName({...listName, [name]: value})    
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        updateNote(id, listName);
        toggle();
        // addOrEditLink(listName);
    }

    useEffect(() => {
        setListName(listObj);
    }, [listObj]);
    

    return (

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Note</ModalHeader>
            <ModalBody>
            
                
                    <div className="form-group">
                        <label>Title </label>
                        <input type="text" className = "form-control"  value = {listName.name}   
                        onChange = {handleChange} name = "name"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control"    
                        onChange = {handleChange} name = "description" value = {listName.description}></textarea> 
                    </div>

                
            </ModalBody>
            <ModalFooter>
            <p>{description && description.substr(0, 100) + "..."}</p>
                    <small className="note-meta">
                      {" "}
                      {new Date(date).toLocaleDateString("en-GB", {
                       hour: "2-digit",
                       minute: "2-digit",
                      })}
                    </small>   
                <Button color="primary" onClick={handleSubmit} >Update</Button> {' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                
            </ModalFooter>
        </Modal>
        
      
    );
};

export default EditList;