// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBQwz9KMuF25HKjso_8FC-wYukT_x8TFAg",
  authDomain: "discordclone-99b37.firebaseapp.com",
  projectId: "discordclone-99b37",
  storageBucket: "discordclone-99b37.appspot.com",
  messagingSenderId: "912870473374",
  appId: "1:912870473374:web:489c9d1f701749af2a458f",
  measurementId: "G-Z8K90LYNN2"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;