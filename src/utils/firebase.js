import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl8sLQ8OvTtg1UmR5iTLcxJGrrBtusnw0",
    authDomain: "quiz-app-25125.firebaseapp.com",
    projectId: "quiz-app-25125",
    storageBucket: "quiz-app-25125.firebasestorage.app",
    messagingSenderId: "523836846919",
    appId: "1:523836846919:web:28eb34a3f3cdd9aecd5262",
    measurementId: "G-K2D5HS7P6B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
