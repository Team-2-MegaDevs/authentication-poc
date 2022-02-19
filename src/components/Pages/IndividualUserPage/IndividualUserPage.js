import React from 'react'
import {
    signOutUser
  } from "../../../firebase/firebase-utils";
export default function IndividualUserPage(props) {
    console.log("individual page")
    function signOutFunc (){
        signOutUser()
        props.setSignedIn(false)
    }
    return (
        <div>
            <div>
                Individual User Page 
            </div>
            <button onClick={() => signOutFunc()}>Sign Out</button>
            
        </div>
    )
}
