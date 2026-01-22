// firebase.ts
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBtr2axYQ0BdBtgsGUNhv8FvpK8phf226Q",
  authDomain: "tawm-4a1fe.firebaseapp.com",
  projectId: "tawm-4a1fe",
  storageBucket: "tawm-4a1fe.firebasestorage.app",
  messagingSenderId: "388287937929",
  appId: "1:388287937929:web:6d7050e2a683b75aa8b558",
  measurementId: "G-XHZGGRH3EZ"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
