import React, { useState } from "react";
import "./SignUp.css";
import { USER_TYPES } from "../../service/USER_TYPES";
import { signUpUser } from "../../firebase/firebase-utils";
export default function SignUp({ setTypeOfCurrentUser, setSignedIn }) {
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	// const [companyCode, setCompanyCode] = useState("");
	const [email, setEmail] = useState({ text: "", isValid: false, message: "Email is empty"});
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState({text: "", isValid: false, message: "Confirm password is empty"});
	const [isEmployee, setIsEmployee] = useState(false);
	const [type, setType] = useState("");
	const [passwordShown, setPasswordShown] = useState(false);
	const [togglePasswordText, setTogglePasswordText] = useState("show password");

	//sample user object
	const userData = {
		email,
		name: {
			first,
			last,
		},
		username: email,
		has_purchased_certificate: false,
		// companyCode,
		jobTitle,
		type,
		isEmployee,
	};

	function signUpFunc() {
		if (email.isValid && confirmPassword.isValid ){
			signUpUser(userData.email, password, userData);
			setTypeOfCurrentUser(type);
			setSignedIn(false);
		}
		else{
			console.log(email.message)
			console.log(confirmPassword.message)
		}

		
		// else 
		// 
	}

	function togglePassword() {
		setPasswordShown(!passwordShown);
		//changing the text of the button toggle to show and hide the password
		if (passwordShown) {
			setTogglePasswordText("show password");
		} else {
			setTogglePasswordText("hide password");
		}
	}

	function validateEmail(data) {
		const inputData = data;
		const inputDomain = inputData.split("@")
		console.log(inputDomain[1])
		// If using one of the major email companies , ask them to use their work email
		switch (inputDomain[1]){
			case "yahoo.com" :
			case "gmail.com" :
			case "hotmail.com":
				setEmail({text: {inputData}, isValid: false, message: "Please use your work email"})
				
				break
			default:
				setEmail({text: {inputData}, isValid: true, message: "valid email"})
		}
		
	}

	function checkPasswordConfirmation(data){
		if (data === password){
			setConfirmPassword({text: {data}, isValid: true, message: "Passwords match"})
		}else{
			setConfirmPassword({text: {data}, isValid: false, message: "Passwords do not match"})
		}
	}

	return (
		<div className='signUpPage'>
			<div className='signUpBox'>
				<div> SignUp to BELA </div>
				<div className='signUpForm'>
					<div className='typeOfUserRow'>
						<button
							onClick={() => {
								setIsEmployee(true);
								setType(`${USER_TYPES.INDIVIDUAL}`);
							}}>
							Individual User
						</button>
						<button
							onClick={() => {
								setIsEmployee(false);
								setType(`${USER_TYPES.ORGANIZATION}`);
							}}>
							Organizational User
						</button>
						<button
							onClick={() => {
								setIsEmployee(false);
								setType(`${USER_TYPES.ADMIN}`);
							}}>
							Admin User
						</button>
					</div>
					<p>You're creating user type: {type}</p>
					<p>This user is an employee: {isEmployee ? "true" : "false"}</p>
					<input
						
						type='text'
						placeholder='First Name'
						onChange={ev => {
							setFirst(ev.target.value);
						}}
					/>
					<input
						type='text'
						placeholder='Last Name'
						onChange={ev => {
							setLast(ev.target.value);
						}}
					/>
					<input
						type='text'
						placeholder='Job Title'
						onChange={ev => {
							setJobTitle(ev.target.value);
						}}
					/>
					{/* <input
						type='text'
						placeholder='Company Code (optional)'
						onChange={ev => {
							setCompanyCode(ev.target.value);
						}}
					/> */}
					<input
						type='text'
						placeholder='Email'
						onChange={ev => {
							validateEmail(ev.target.value);
						}}
					/>
					<input
						type={passwordShown ? "text" : "password"}
						placeholder='Password'
						onChange={ev => {
							setPassword(ev.target.value);
						}}
					/>
					<input
						type={passwordShown ? "text" : "password"}
						placeholder='Confirm Password'
						onChange={ev => {
							checkPasswordConfirmation(ev.target.value);
						}}
					/>
					<button onClick={togglePassword}>{togglePasswordText}</button>
					<div className='consentRow'>
						<input type='checkbox' id='accept' name='accept' />
						<div>
							I consent that I have read and agreed to the Terms &amp;
							Conditions
						</div>
					</div>
					<div className='consentRow'>
						<input type='checkbox' id='accept' name='accept' />
						<div>
							I wish to receive promos, updates, and news letters from BELA and
							SpeakHabla
						</div>
					</div>
				</div>
				<button onClick={() => signUpFunc()}>Create Account</button>
			</div>
		</div>
	);
}
