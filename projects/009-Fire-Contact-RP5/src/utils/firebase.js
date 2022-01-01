import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIk_rCq1F24lNjk5O9vCIWgsvPv44Ym-s",
  authDomain: "fire-contact-session.firebaseapp.com",
  databaseURL: "https://fire-contact-session-default-rtdb.firebaseio.com",
  projectId: "fire-contact-session",
  storageBucket: "fire-contact-session.appspot.com",
  messagingSenderId: "828517556799",
  appId: "1:828517556799:web:7d8331d27de54a0a798e8a",
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
