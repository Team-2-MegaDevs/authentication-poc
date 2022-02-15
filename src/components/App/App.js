import React from "react";
import { signUpUser } from "../../firebase/firebase-utils";
import "./App.css";

function App() {
	//sample user object
	const samplePassword = "456465165";
	const sampleData = {
		email: "test@test.ca",
		name: {
			first: "Wilson",
			last: "McDonalds",
		},
		username: "wilsmc515",
		has_purchased_certificate: false,
		jobTitle: "Accountant",
		type: "individual",
		isEmployee: true,
	};

	return (
		<div className='App'>
			<h2>Firebase Authentication Proof of Concept</h2>
			<button
				onClick={() => signUpUser(sampleData.email, samplePassword, sampleData)}
			>
				Sign Up with Fake Data
			</button>
		</div>
	);
}

export default App;
