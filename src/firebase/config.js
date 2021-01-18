import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
