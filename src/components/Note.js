import React, {useState, useEffect} from 'react';
import EditList from '../modals/EditTask.js';
import { deleteNote } from "../firebase/firebase"
/* import 'bootstrap/dist/css/bootstrap.min.css'
import "react-bootstrap"; */

const Note = ({id, listObj, index, deleteList, updateListArray, date, description}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
            
        },
        { 
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1" 
        },
        {   primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
           
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1" 
            
        },
         {   primaryColor : "#5D93E1",
             secondaryColor : "ECF3FC"        
        }, 
       
    ]

    const toggle = () => {
        setModal(!modal);  
    }

    const updateList = (obj) => {
        updateListArray(obj, index)

    }

    const handleDelete = (id) => {
        // deleteList(index)
        if (window.confirm('¿Estas seguro de eliminar esta nota?')) {
            console.log('id = ', id);
            deleteNote(id);
        }
    }

    useEffect(() => {
         
      }, []) 
      
    return (
        <>
            <div className = "card-wrapper mr-5">
                <div className = "card-top" style={{"backgroundColor": colors[index%4].primaryColor}}></div>
                <div className = "task-holder">
                    <span className = "card-header" style = {{ "backgroundColor": colors[index%4].secondaryColor, "borderRadius": "10px" }}>{listObj.name}</span> 
                    <p className = "mt-3" >{listObj.description}</p>

                    <div className = "col-md-4" style={{"position": "absolute", "right" : "-20px", "bottom" : "20px"}}>
                        <i className = "far fa-edit mr-3" style = {{"color" : colors[index%4].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                        <i className = "fas fa-trash-alt" style = {{"color" : colors[index%4].primaryColor, "cursor" : "pointer"}} onClick = {() => handleDelete(id)}></i>
                    </div>
                    <div className = "col-md-8" style={{"position": "absolute", "left" : "20px", "bottom" : "20px"}}>
                        <p>{description && description.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                        {" "}
                        {new Date(date).toLocaleDateString("en-GB", {
                        hour: "2-digit",
                         minute: "2-digit",
                        })}
                        </small>
                    </div>
                    
                </div>
            </div>
            <EditList id = {id} toggle = {toggle} modal = {modal} updateList = {updateList} listObj = {listObj} date = {date}/>
        </>
    );
};

export default Note;


// Colores rosado y morado
/*
const colors = [
{
    primaryColor : "#F48687",
    secondaryColor : "#FDF1F1"
    
},
{   primaryColor : "#B964F7",
    secondaryColor : "#F3F0FD"
    
},
{   primaryColor : "#B964F7",
    secondaryColor : "#F3F0FD"
    
},
{
    primaryColor : "#F48687",
    secondaryColor : "#FDF1F1"
},
]
*/



