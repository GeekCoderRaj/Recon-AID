import {useState} from 'react'
// import './App.css'


function App() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event)
	{
		console.log("button clicked")
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method : 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body : JSON.stringify({
				email, password
			})
		})
		const data = await response.json()

		if(data.user) {
			alert("login successful")
			window.location.href = '/dashboard'
		} else {
			alert("please check your crendentials!")
		}

		console.log(data)
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value = {email}
					onChange = {(e) => setEmail(e.target.value)}
					type = "email"
					placeholder = "Email"
				/>
				<br />
				<input
					value = {password}
					onChange = {(e) => setPassword(e.target.value)}
					type = "password"
					placeholder = "Password"
				/>
				<br />
				<input type = "submit" value = "Login" />
			</form>
		</div>
	)
}

export default App