import React from 'react'
import './SignIn.css'
export default function SignIn() {
    return (
        <div>
            
            <div className="signInPage">
                <div className="signInBox">
                    <div className="signInTitle"> Sign in to BELA </div>
                    <div>Email</div>
                    <input type="text"/>
                    <div>Password</div>
                    <input type="text"/>
                    <button>Sign In</button>
                    
                </div>
            </div>
        </div>
    )
}
