import React from 'react'
import './SignUp.css'
import {
    signUpUser
  } from "../../firebase/firebase-utils";
export default function SignUp() {
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
        <div className="signUpPage">
           
            <div className="signUpBox">
                
                    <div> SignUp to BELA </div>
                    <div className="signUpForm">
                        <div className="typeOfUserRow">
                            <button>Individual User</button>
                            <button>Organizational User</button>
                        </div>
                        
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Job Title"/>
                        <input type="text" placeholder="Company Code (optional)"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Password"/>
                        <input type="text" placeholder="Confirm Password"/>
                        <input type="checkbox" id="accept" name="accept"/> I consent that I have read and agreed to the Terms &amp; Conditions
                        <input type="checkbox" id="accept" name="accept"/> I wish to receive promos, updates, and news letters from BELA and SpeakHabla
                    </div>
                    <button onClick={() => signUpUser(sampleData.email, samplePassword, sampleData)}>Create Account</button>
                    
                
            </div>
        </div>
    )
}
