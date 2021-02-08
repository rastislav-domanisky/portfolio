import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgvj1vAZP6qGB5jBfC7Ss-YU0k9dCLNmM",
    authDomain: "rastislav-domanisky.firebaseapp.com",
    projectId: "rastislav-domanisky",
    storageBucket: "rastislav-domanisky.appspot.com",
    messagingSenderId: "269532395101",
    appId: "1:269532395101:web:d23046585078432e1affb4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;