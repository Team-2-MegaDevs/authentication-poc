import React from 'react'
import './IndividualUserPage.css'
import {
    signOutUser
  } from "../../../firebase/firebase-utils";
export default function IndividualUserPage() {
    return (
        <div>
            <div>
                Individual User Page 
            </div>
            <button onClick={() => signOutUser()}>Sign Out</button>
        </div>
    )
}
