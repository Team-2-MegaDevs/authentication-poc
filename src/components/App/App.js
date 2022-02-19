import React, { useState } from "react";
import "./App.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Admin from "../Pages/AdminUserPage/AdminUserPage";
import Organizational from "../Pages/OrganizationalUserPage/OrganizationalUserPage";
import Individual from "../Pages/IndividualUserPage/IndividualUserPage";
function App() {
  // Flag to display SignIn or SignUp based on top 2 buttons
  const [userSignIn, setUserSignIn] = useState(true);
  // String to keep track of the current user type
  const [typeOfCurrentUser, setTypeOfCurrentUser] = useState("");
  // Flag to display Individual, Organizational, Admin instead of SignIn or SignUp
  const [signedIn, setSignedIn] = useState(false);
  
  return (
    <div className="App">
      <h2>Firebase Authentication Proof of Concept</h2>
      <div className="signInHeader">
        {!signedIn ? (
          <div>
            <div className="headerLeftSide">BELA</div>

            <button
              onClick={() => {
                setUserSignIn(false);
              }}
            >
              SignUp
            </button>

            <button
              onClick={() => {
                setUserSignIn(true);
              }}
            >
              SignIn
            </button>

            <div>
              {userSignIn ? (
                <SignIn
                  setTypeOfCurrentUser={setTypeOfCurrentUser}
                  setSignedIn={setSignedIn}
                />
              ) : (
                <SignUp
                  setTypeOfCurrentUser={setTypeOfCurrentUser}
                  setSignedIn={setSignedIn}
                />
              )}
            </div>
          </div>
        ) : (
          <div>
            {typeOfCurrentUser === "individual" ? (
              <Individual setSignedIn={setSignedIn} />
            ) : (
              <div />
            )}
            {typeOfCurrentUser === "organiation" ? (
              <Organizational setSignedIn={setSignedIn} />
            ) : (
              <div />
            )}
            {typeOfCurrentUser === "admin" ? (
              <Admin setSignedIn={setSignedIn} />
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
