import firebase from 'firebase/app'
import 'firebase/auth'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const db = firebaseApp.firestore();
const storeage = firebase.storage();
const auth =  firebase.auth()
export { db, storeage, auth };