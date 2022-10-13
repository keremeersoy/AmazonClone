import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyANRKTR1WQvV-k8j5fKimTzYsre1-vE1Yc",
	authDomain: "clone-918a5.firebaseapp.com",
	projectId: "clone-918a5",
	storageBucket: "clone-918a5.appspot.com",
	messagingSenderId: "502230243370",
	appId: "1:502230243370:web:42125ef6be25b2da230b53",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
