import React from 'react'
import './OrganizationalUserPage.css';
import {
    signOutUser
  } from "../../firebase/firebase-utils";
export default function OrganizationalUserPage() {
    return (
        <div>
            <div>
                Organizational User Page 
            </div>
            <button onClick={() => signOutUser()}>Sign Out</button>
        </div>
    )
}
