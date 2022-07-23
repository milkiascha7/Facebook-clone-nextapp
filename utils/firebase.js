import firebase from 'firebase'
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHuqsTC7fOMTfIf2lXQzerA3-d9sZu3Ks",
    authDomain: "facbook-clone-e21b4.firebaseapp.com",
    projectId: "facbook-clone-e21b4",
    storageBucket: "facbook-clone-e21b4.appspot.com",
    messagingSenderId: "229471818260",
    appId: "1:229471818260:web:cd64799d80d46808f24d01",
    measurementId: "G-HLP92FEBBF"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db