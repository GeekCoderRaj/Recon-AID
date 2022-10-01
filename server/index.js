const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to DB"));

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		console.log("user registered!");
		res.json({ status: "ok" , user, token})
	} catch (error){
		console.log("user already exists!")
		res.json({ status: "error", error})
	}
	// const token  = jwt.sign(user, "akhil", {expiresIn: "600"})  
})

app.post('/api/login', async (req, res) => {

	const user = await User.findOne({
		email: req.body.email,
		password: req.body.password,
	})
	if (user) {
		console.log("logged in successfully!")

		const token = jwt.sign({
			name: user.name,
			email: user.email,
		}, 'secret123')

		return res.json({ status: "ok", user: true })
	} else {
		console.log("invalid credentials!")
		return res.json({ status: "error", user: false })
	}
})

app.listen(1337, () => {
	console.log("Server startetd on 1337")
}) 