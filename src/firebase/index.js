import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3mWrBQbZ4mmIDLoJaLC8sDSKbTnVZPuI",
  authDomain: "vue-auth-users.firebaseapp.com",
  projectId: "vue-auth-users",
  storageBucket: "vue-auth-users.appspot.com",
  messagingSenderId: "19600010900",
  appId: "1:19600010900:web:2f815879c10aeef9c18e81"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}