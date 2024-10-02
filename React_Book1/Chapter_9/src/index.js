import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyAl3ViCCSime2BGiyDLFrb0NIPgpn5W16c",
//   authDomain: "crudproject-49082.firebaseapp.com",
//   databaseURL: "https://crudproject-49082-default-rtdb.firebaseio.com",
//   projectId: "crudproject-49082",
//   storageBucket: "crudproject-49082.appspot.com",
//   messagingSenderId: "928599977094",
//   appId: "1:928599977094:web:623d8c0cfcb15612e07507"
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI2dC9iC1_WNjLZAZ1aDH5UvvpzDMgKr8",
  authDomain: "reactdb-diegol.firebaseapp.com",
  databaseURL: "https://reactdb-diegol-default-rtdb.firebaseio.com/",
  projectId: "reactdb-diegol",
  storageBucket: "reactdb-diegol.appspot.com",
  messagingSenderId: "248291788721",
  appId: "1:248291788721:web:8537e18424ce89e08c9f90",
  measurementId: "G-9252R1CP7Y"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
