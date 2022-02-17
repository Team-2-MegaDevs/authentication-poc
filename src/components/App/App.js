import { signOut } from "@firebase/auth";
import React, { useState } from "react";
import {
  authenticateUser,
  signUpUser,
  signOutUser,
} from "../../firebase/firebase-utils";
import "./App.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
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
  /**
	 * <h2>Firebase Authentication Proof of Concept</h2>
			<button
				onClick={() => signUpUser(sampleData.email, samplePassword, sampleData)}
			>
				Sign Up with Fake Data
			</button>
			<button
				onClick={() => authenticateUser(sampleData.email, samplePassword)}
			>
				Authenticate with Fake Data
				<button onClick={() => signOutUser()}>Sign Out User</button>
			</button>

	 */
  const [userSignIn, setUserSignIn] = useState(true);
  
  return (
    <div className="App">
      <h2>Firebase Authentication Proof of Concept</h2>
      <div className="signInHeader">
        <div className="headerLeftSide">BELA</div>

        <button className="headerRightSide" onClick={()=>{setUserSignIn(false)}}>
          SignUp
        </button>
        <button className="headerRightSide" onClick={()=>{setUserSignIn(true)}}>
          SignIn
        </button>
      </div>

      <div>{userSignIn ? <SignIn /> : <SignUp />}</div>
    </div>
  );
}

export default App;
