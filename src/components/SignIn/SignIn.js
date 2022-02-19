import React, { useState } from "react";
import "./SignIn.css";
import { authenticateUser } from "../../firebase/firebase-utils";
export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInUser() {
    authenticateUser(email, password);

    //props.setTypeOfCurrentUser(user.type);
    props.setSignedIn(true);
  }
  return (
    <div>
      <div className="signInPage">
        <div className="signInBox">
          <div className="signInTitle"> Sign in to BELA </div>
          <div>Email</div>
          <input
            type="text"
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
          <div>Password</div>
          <input
            type="text"
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <button
            onClick={(ev) => {
              ev.preventDefault();
              signInUser();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
