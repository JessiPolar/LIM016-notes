import React, {useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { db } from '../firebase/firebaseConfig';
import { updateNote } from "../firebase/firebase"

const EditList = ({id, modal, toggle, listObj, updateList}) => {

    const state = {
        name: '',
        description: '',
    };
    const [listName, setListName] = useState(state);
    /* const [description, setDescription] = useState('state'); */ 
   
     const handleChange = (e) => {
       
        const {name, value} = e.target;
        setListName({...listName, [name]: value})    
    }

    /* const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = listName
        tempObj['Description'] = description
        updateList(tempObj)
    }   */

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
                        <label>List Name</label>
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
                <Button color="primary" onClick={handleSubmit} >Update</Button> {' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        
      
    );
};

export default EditList;