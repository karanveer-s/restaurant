import firebase from 'firebase';
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB4pDBj_zkrnoGcZ5_tFOg6C_4KB7w9U7E",
        authDomain: "restaurant-app-300.firebaseapp.com",
        databaseURL: "https://restaurant-app-300.firebaseio.com",
        projectId: "restaurant-app-300",
        storageBucket: "restaurant-app-300.appspot.com",
        messagingSenderId: "1035553093004",
        appId: "1:1035553093004:web:7626fc894b234ec34952a9"
});

const db= firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth().GoogleAuthProvider;


export {db, auth, storage,googleAuthProvider};