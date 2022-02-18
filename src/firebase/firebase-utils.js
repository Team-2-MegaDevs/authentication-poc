import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	addDoc,
	query,
	where,
	getDocs,
} from "firebase/firestore";

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
			return user;
		})
		.catch(error => {
			console.error(error.code, error.message);
		});
}

// authenticate user function
export function authenticateUser(userEmail, userPassword) {
	signInWithEmailAndPassword(auth, userEmail, userPassword)
		.then(async userCredential => {
			// Signed in
			const userEmail = await userCredential.user.email;
			// querying the database to find the user
			const q = query(userCollectionRef, where("email", "==", userEmail));
			// console.log(q);
			const userSnapshot = await getDocs(q);
			let userData;
			userSnapshot.forEach(doc => {
				userData = doc.data();
			});

			console.log(userData);
			return userData;
		})
		.catch(error => {
			console.error(error.code, error.message);
		});
}

export function signOutUser() {
	signOut(auth)
		.then(async result => {
			console.log(result);
			console.log("sign out successful");
		})
		.catch(error => console.error(error.message));
}
