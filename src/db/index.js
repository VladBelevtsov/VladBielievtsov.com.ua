import firebase from 'firebase'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebaseapp.firestore()
