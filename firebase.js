import {
    initializeApp
} from 'firebase/app';
import {
    getFirestore
} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDhVBSjWXn-I69jiYtJ0PMd3xCX6Q9QGcM",
    authDomain: "inventory-management-app-f7e3c.firebaseapp.com",
    projectId: "inventory-management-app-f7e3c",
    storageBucket: "inventory-management-app-f7e3c.appspot.com",
    messagingSenderId: "797537572903",
    appId: "1:797537572903:web:0a47d1328e5bc57ae3d602"
};

// initilize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {app, firestore}