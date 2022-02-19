import React from 'react'

import {
    signOutUser
  } from "../../../firebase/firebase-utils";
export default function OrganizationalUserPage(props) {
    function signOutFunc (){
        signOutUser()
        props.setSignedIn(false)
    }
    return (
        <div>
            <div>
                Organizational User Page 
            </div>
            <button onClick={() => signOutFunc()}>Sign Out</button>
        </div>
    )
}
