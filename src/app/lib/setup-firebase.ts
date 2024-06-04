import { initializeApp } from "firebase/app";

export function setupFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCv0D7IDKgDrdAeJmS5uhaGOvH5ysSMOBM",
    authDomain: "sportschool-4014c.firebaseapp.com",
    projectId: "sportschool-4014c",
    storageBucket: "sportschool-4014c.appspot.com",
    messagingSenderId: "718610397458",
    appId: "1:718610397458:web:6d563de1458024488edbcb",
  };

  const app = initializeApp(firebaseConfig);
}
