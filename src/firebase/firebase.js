

import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

// Evento  cuando se obtenga la coleccion de la base de datos
export const onGetNotes = (callback) => onSnapshot(collection(getFirestore(), 'notes'), callback); // obtener los notes en tiempo real
