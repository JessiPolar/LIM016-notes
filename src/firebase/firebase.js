

import { getFirestore, collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// Evento  cuando se obtenga la coleccion de la base de datos
export const onGetNotes = (callback) => onSnapshot(collection(getFirestore(), 'notes'), callback); // obtener los notes en tiempo real

// Eliminar el documento
export const deleteNote = (id) => deleteDoc(doc(getFirestore(), 'notes', id));

// actualizar datos
export const updateNote = (id, newFields) => updateDoc(doc(getFirestore(), 'notes', id), newFields);
