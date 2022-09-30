import React, {useEffect} from 'react'
import jwt from 'jsonwebtoken'
// import {useHistory} from 'react-router-dom'

const Dashboard = () => {

    // const history = useHistory() 

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token')
                // history.replace('/login')
            }
        }
    })

    return <h1>Dashboard</h1>
} 

export default Dashboard
