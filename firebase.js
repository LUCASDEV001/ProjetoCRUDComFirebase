// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC6MSwcaeSe6r8mL9yd0DEZf9u2D0o4MM",
  authDomain: "javascript-crud-b1a14.firebaseapp.com",
  projectId: "javascript-crud-b1a14",
  storageBucket: "javascript-crud-b1a14.appspot.com",
  messagingSenderId: "1034781823600",
  appId: "1:1034781823600:web:adc61014812d0c1298dab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => {
    addDoc(collection(db, 'tasks'), {title, description})  
};

export const getTasks = () => getDocs(collection(db, 'tasks'))
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id))
export const getTask = (id) => getDoc(doc(db, 'tasks', id));
export const updateTask = (id, newfields) => 
updateDoc(doc(db, 'tasks', id), newfields);


