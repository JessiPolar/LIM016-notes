import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const useState = React.useState;

const CreateList = ({addOrEditLink, modal, toggle, save} ) => {
    
    const state = {
        name: '',
        description: '',
      };
      
    const [listName, setListName] = useState(state);
    //const [description, setDescription] = useState(state); 

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setListName({...listName, [name]: value})
        //console.log(name, value);
    }

    const handleSubmit = (e) => {
        console.log('handleSubmit');
        e.preventDefault();
        
        addOrEditLink(listName);
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Note</ModalHeader>
            <ModalBody>
                
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className = "form-control"  /* value = {listName} */  
                        onChange = {handleChange} name = "name"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control"  /* value = {description} */  
                        onChange = {handleChange} name = "description"></textarea>
                    </div>

                
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit} >Create</Button> {' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateList;