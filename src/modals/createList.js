import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const useState = React.useState;

const CreateList = ({modal, toggle, save}) => {
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

    const handleSave = () => {
        let listObj = {}
        listObj["Name"] = listName
        listObj["Description"] = description
        save(listObj)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Note</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>List Name</label>
                        <input type="text" className = "form-control" value = {listName} 
                        onChange = {handleChange} name = "listName"/>
                    </div><br />
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} 
                        onChange = {handleChange} name = "description"></textarea>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave} >Create</Button> {' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateList;