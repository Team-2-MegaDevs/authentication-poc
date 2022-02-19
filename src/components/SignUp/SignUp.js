import React, { useState } from "react";
import "./SignUp.css";
import { USER_TYPES } from "../../service/USER_TYPES";
import { signUpUser } from "../../firebase/firebase-utils";
export default function SignUp({ setTypeOfCurrentUser, setSignedIn }) {
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [companyCode, setCompanyCode] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isEmployee, setIsEmployee] = useState(false);
	const [type, setType] = useState("");
	//sample user object
	const userData = {
		email,
		name: {
			first,
			last,
		},
		username: email,
		has_purchased_certificate: false,
		companyCode,
		jobTitle,
		type,
		isEmployee,
	};

	function signUpFunc() {
		signUpUser(userData.email, password, userData);
		setTypeOfCurrentUser(type);
		setSignedIn(false);
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
							}}
						>
							Individual User
						</button>
						<button
							onClick={() => {
								setIsEmployee(false);
								setType(`${USER_TYPES.ORGANIZATION}`);
							}}
						>
							Organizational User
						</button>
						<button
							onClick={() => {
								setIsEmployee(false);
								setType(`${USER_TYPES.ADMIN}`);
							}}
						>
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
					<input
						type='text'
						placeholder='Company Code (optional)'
						onChange={ev => {
							setCompanyCode(ev.target.value);
						}}
					/>
					<input
						type='text'
						placeholder='Email'
						onChange={ev => {
							setEmail(ev.target.value);
						}}
					/>
					<input
						type='text'
						placeholder='Password'
						onChange={ev => {
							setPassword(ev.target.value);
						}}
					/>
					<input
						type='text'
						placeholder='Confirm Password'
						onChange={ev => {
							setConfirmPassword(ev.target.value);
						}}
					/>
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
