
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCa9Q3xZA3USGl-v4zjY2ComwGk9oKk2v4",
  authDomain: "todocrud-619cb.firebaseapp.com",
  projectId: "todocrud-619cb",
  storageBucket: "todocrud-619cb.appspot.com",
  messagingSenderId: "664910765229",
  appId: "1:664910765229:web:644744720c3e6f80ce3a24"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };






