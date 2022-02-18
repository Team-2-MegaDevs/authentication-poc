import React from 'react'
import './SignIn.css'
import {
    signUpUser
  } from "../../firebase/firebase-utils";
export default function SignIn() {
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
        <div>
            
            <div className="signInPage">
                <div className="signInBox">
                    <div className="signInTitle"> Sign in to BELA </div>
                    <div>Email</div>
                    <input type="text"/>
                    <div>Password</div>
                    <input type="text"/>
                    <button onClick={() => signUpUser(sampleData.email, samplePassword, sampleData)}>Sign In</button>
                </div>
            </div>
        </div>
    )
}
