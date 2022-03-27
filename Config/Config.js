import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsTt23xJfj4iTmRRVgkyD7hOS99wZgi8s",
    authDomain: "typet-b7bad.firebaseapp.com",
    databaseURL: "https://typet-b7bad.firebaseio.com",
    projectId: "typet-b7bad",
    storageBucket: "typet-b7bad.appspot.com",
    messagingSenderId: "358323807101",
    appId: "1:358323807101:web:bdf599ec372de70a916214",
    measurementId: "G-7G0C2X6EGF"
  };

  firebase.initializeApp(firebaseConfig);

  export const f = firebase;
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();