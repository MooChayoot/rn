import firebase from "firebase";
import config from '../config'

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const aut = firebase.auth();
const storeage = firebase.storage();
export { db, aut, storeage };
