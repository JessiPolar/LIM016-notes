import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const useState = React.useState;

const CreateList = ({addOrEditLink, modal, toggle} ) => {
    //const date = new Date();
    const state = {
        name: '',
        description: '',
        //color: '#F48687',
        //date: date.toLocaleDateString(),
        date: Date.now(),
      };
      
    const [listName, setListName] = useState(state);
    //const [description, setDescription] = useState(state); 

    
    const handleChange = (e) => {   //manejo el cambio
        const {name, value} = e.target;
        setListName({...listName, [name]: value})  //copio los valores, y actualizamos  el input con el nuevo valor 
        //console.log(name, value);
    }

    const handleSubmit = (e) => {
        console.log('handleSubmit');
        e.preventDefault();
        
        addOrEditLink(listName);  // guardando los datos
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