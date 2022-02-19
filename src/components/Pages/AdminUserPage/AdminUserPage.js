import React from "react";
import { signOutUser } from "../../../firebase/firebase-utils";
export default function AdminUserPage(props) {
  function signOutFunc() {
    signOutUser();
    props.setSignedIn(false);
  }
  return (
    <div>
      <div>Admin Page</div>
      <button
        onClick={(ev) => {
          ev.preventDefault();
          signOutFunc();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
