import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2SqyThdx-46WtiD7Z6KoNSaAJmcsQ7co",
    authDomain: "note-keeps.firebaseapp.com",
    databaseURL: "https://note-keeps.firebaseio.com",
    projectId: "note-keeps",
    storageBucket: "note-keeps.appspot.com",
    messagingSenderId: "421768470515",
    appId: "1:421768470515:web:03fb600939fbfdf1863c86"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
