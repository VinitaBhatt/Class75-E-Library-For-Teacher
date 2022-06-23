import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6VpZOKLKLFod-c892irA9k3IyVSg_PeI",
    authDomain: "e-library-f891e.firebaseapp.com",
    projectId: "e-library-f891e",
    storageBucket: "e-library-f891e.appspot.com",
    messagingSenderId: "472710883221",
    appId: "1:472710883221:web:e78afccebe643940a4389c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  