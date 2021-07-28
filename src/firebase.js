import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDQbN85JZR_IMozhCNtIbGlXMSpxUxLVJ4",
    authDomain: "tinder-clone-4dfa6.firebaseapp.com",
    databaseURL: "https://tinder-clone-4dfa6.firebaseio.com",
    projectId: "tinder-clone-4dfa6",
    storageBucket: "tinder-clone-4dfa6.appspot.com",
    messagingSenderId: "205894479629",
    appId: "1:205894479629:web:efb1f1d546f21441f88a44",
    measurementId: "G-RECD5J538Y"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export default db;
  export { auth, provider };