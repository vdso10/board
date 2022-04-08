import firebase from "firebase/app";
import "firebase/firestore";


let firebaseConfig = {
  apiKey: "AIzaSyBwQNAkR0_Yg1RgD2LN9swUMWSqFhbjLtg",
  authDomain: "boardapp-43e46.firebaseapp.com",
  projectId: "boardapp-43e46",
  storageBucket: "boardapp-43e46.appspot.com",
  messagingSenderId: "1026002723225",
  appId: "1:1026002723225:web:07af887a3bbd44a04ab308",
  measurementId: "G-R8LXLY1CNK"
};

// Initialize Firebase
if(!firebase.apps.length){

    const app = initializeApp(firebaseConfig);
}


export default firebase;