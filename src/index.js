import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpt2jgnf_E7RKmlneJ4znjtpvc5o7QpcI",
  authDomain: "tienda-hamti-cocina-con-amor.firebaseapp.com",
  projectId: "tienda-hamti-cocina-con-amor",
  storageBucket: "tienda-hamti-cocina-con-amor.appspot.com",
  messagingSenderId: "676436941346",
  appId: "1:676436941346:web:77ec2b4289544a130fc87b"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();