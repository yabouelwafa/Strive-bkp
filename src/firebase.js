import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBx921ntY4_WkukbCWfBtZzfSan1FxMklA",
  authDomain: "strive-6d780.firebaseapp.com",
  projectId: "strive-6d780",
  storageBucket: "strive-6d780.appspot.com",
  messagingSenderId: "782817045342",
  appId: "1:782817045342:web:b3f75cda32ab97e4923dcf",
  measurementId: "G-DYW1H2XCD4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
