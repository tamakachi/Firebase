import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkRlrLBYKkmTB46X1VoNCmLOtiCsJwNwU",
  authDomain: "udemy-modern-javascript-37bdb.firebaseapp.com",
  databaseURL: "https://udemy-modern-javascript-37bdb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "udemy-modern-javascript-37bdb",
  storageBucket: "udemy-modern-javascript-37bdb.appspot.com",
  messagingSenderId: "558170813982",
  appId: "1:558170813982:web:558afff7757bb36c32200f",
  measurementId: "G-GXHRRYVM5W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'recipes');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

console.log(getCities(db))