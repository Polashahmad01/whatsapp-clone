import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDq8ebujkOYkAmSDUYEta8_EvvflpQ2tKw",
    authDomain: "whatsapp-clone-6cc33.firebaseapp.com",
    projectId: "whatsapp-clone-6cc33",
    storageBucket: "whatsapp-clone-6cc33.appspot.com",
    messagingSenderId: "548401551518",
    appId: "1:548401551518:web:46ec0e8ea81c4ef587838f",
    measurementId: "G-N43TG2NTNP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
