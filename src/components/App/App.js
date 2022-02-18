
import React, { useState } from "react";
import "./App.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
function App() {
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
