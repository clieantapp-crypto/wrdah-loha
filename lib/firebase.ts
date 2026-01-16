// firebase.ts
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1SM6u61pYP3Uivsnd9o2-xfnIdk3Ci2w",
  authDomain: "tannns-f866c.firebaseapp.com",
  databaseURL: "https://tannns-f866c-default-rtdb.firebaseio.com",
  projectId: "tannns-f866c",
  storageBucket: "tannns-f866c.firebasestorage.app",
  messagingSenderId: "551542084902",
  appId: "1:551542084902:web:16f3ee59d46ee5c3881de7",
  measurementId: "G-PVTG0CY9QF",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
