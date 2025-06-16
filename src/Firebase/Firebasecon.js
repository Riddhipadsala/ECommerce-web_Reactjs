import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAxqvviVzVsoeXSslmrDK-Y_FZb4vG2QsY",
  authDomain: "app-6bc2d.firebaseapp.com",
  projectId: "app-6bc2d",
  storageBucket: "app-6bc2d.firebasestorage.app",
  messagingSenderId: "432078694650",
  appId: "1:432078694650:web:6980d5e5d4ff55576f4143",
  databaseURL: "https://app-6bc2d-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
