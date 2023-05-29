import { initializeApp } from "firebase/app";

export const getFirebaseApp = () =>{
    const firebaseConfig = {
        apiKey: "AIzaSyAKWi7ACxmkTHc7et-tY2MOxOKCHRIYtAU",
        authDomain: "chatbox-b1636.firebaseapp.com",
        projectId: "chatbox-b1636",
        storageBucket: "chatbox-b1636.appspot.com",
        messagingSenderId: "99076818837",
        appId: "1:99076818837:web:2d90ccc35ee6e9e5b9189c",
        measurementId: "G-ZBEW8N0QE2"
      };
      
      return initializeApp(firebaseConfig); 
}