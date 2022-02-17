import React from 'react'
import './AdminUserPage.css'
import {
    signOutUser
  } from "../../firebase/firebase-utils";
export default function AdminUserPage() {
    return (
        <div>
            <div>
                Admin Page 
            </div>
            <button onClick={() => signOutUser()}>Sign Out</button>
        </div>
    )
}
