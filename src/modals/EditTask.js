import React, { useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const EditList = ({modal, toggle, updateList, listObj}) => {
    const [listName, setListName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
       
        const {name, value} = e.target

        if (name === "listName") {
            setListName(value)
        }else{
            setDescription(value)
        }
    }

    useEffect(() => {
        setListName(listObj.Name)
        setDescription(listObj.Description)
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = listName
        tempObj['Description'] = description
        updateList(tempObj)
    } 
    
 
    /* const handleUpdate = (e) => {
        e.preventDefault();
        let listObj = {}
        listObj["Name"] = listName
        listObj["Description"] = description
        updateList(listObj)
    } */


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Note</ModalHeader>
            <ModalBody>
                
                    <div className="form-group">
                        <label>List Name</label>
                        <input type="text" className = "form-control" value = {listName} 
                        onChange = {handleChange} name = "listName"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} 
                        onChange = {handleChange} name = "description"></textarea>
                    </div>

                
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate} >Update</Button> {' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditList;