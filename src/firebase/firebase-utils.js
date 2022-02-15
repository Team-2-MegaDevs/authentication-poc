import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
initializeApp({
	apiKey: "AIzaSyB3d7i3P1t56f3zP869mnhv6tefAlGftZc",
	authDomain: "speak-habla-poc.firebaseapp.com",
	projectId: "speak-habla-poc",
	storageBucket: "speak-habla-poc.appspot.com",
	messagingSenderId: "1068238770911",
	appId: "1:1068238770911:web:95f8f75a3023bcff62cf6a",
});

//firebase auth and firestore instances
const db = getFirestore();
const auth = getAuth();

//firestore users collections reference
const userCollectionRef = collection(db, "users");

//sign up authentication function logic
export function signUpUser(userEmail, userPassword, objToAdd) {
	createUserWithEmailAndPassword(auth, userEmail, userPassword)
		.then(async userCredential => {
			console.log(userCredential.user);
			//add the newly created user to the database
			const user = await addDoc(userCollectionRef, objToAdd);
			console.log(user);
		})
		.catch(error => {
			console.log(error.code, error.message);
		});
}
