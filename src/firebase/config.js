import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBWGiw8zy9hiVSspskS4w02lW8WKvj7OZ4",
  authDomain: "olx-demo-e64ff.firebaseapp.com",
  projectId: "olx-demo-e64ff",
  storageBucket: "olx-demo-e64ff.appspot.com",
  messagingSenderId: "841114237469",
  appId: "1:841114237469:web:c0988912b7887f98fbe4f4",
  measurementId: "G-8XQHWX17V9"
  };
  export default firebase.initializeApp(firebaseConfig)