import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { getDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBUhxR7YplIUlPpAyRd5r8Fnar4c3E5edg",
  authDomain: "unicomp-cbcd8.firebaseapp.com",
  projectId: "unicomp-cbcd8",
  storageBucket: "unicomp-cbcd8.appspot.com",
  messagingSenderId: "445292728005",
  appId: "1:445292728005:web:fd20b665e1db0967b8aaac",
  measurementId: "G-9KBC23FKDP",
};

export const createUserProfileDocument = async (user, matricno, name, dept, level) => {
  if (!user) return;

  const userRef = firebase.firestore().doc(`users/${user.uid}`);
  const snapShot = await getDoc(userRef);
 
  if (!snapShot.exist) {
    const { email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        name: name,
        matricno: matricno,
        dept: dept,
        level: level
      });
    } catch (error) {
      console.log("error creating a new user", error.message);
    }
  }
  return userRef;
};

const firebaseApp = firebase.initializeApp(config);

export const Database = firebaseApp.firestore();

export const auth = getAuth();
export const firestore = firebase.firestore();

export default firebase;
