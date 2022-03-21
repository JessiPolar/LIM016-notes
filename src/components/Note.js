import React, {useState} from 'react';
import EditList from '../modals/EditTask.js';
/* import 'bootstrap/dist/css/bootstrap.min.css'
import "react-bootstrap"; */

const Note = ({listObj, index, deleteList, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
        primaryColor : "#5D93E1",
        secondaryColor : "ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    },
    ]

    const toggle = () => {
        setModal(!modal);  
    }

    const updateList = (obj) => {
        updateListArray(obj, index)

    }

    const handleDelete = () => {
        deleteList(index)

    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style = {{ "background-color": colors[index%5].secondaryColor, "border-radius": "10px" }}>{listObj.Name}</span> 
                <p className = "mt-3" >{listObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className = "fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>

                </div>
            </div>
            <EditList modal = {modal} toggle = {toggle} updateList = {updateList} listObj = {listObj}/>    
        </div>
    );
};

export default Note;

