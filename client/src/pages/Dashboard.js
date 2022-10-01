import React, {useEffect} from 'react'
// import jwt from 'jsonwebtoken'
// import {useHistory} from 'react-router-dom'
import { isExpired, decodeToken } from "react-jwt";

const Dashboard = () => {
    
    // const history = useHistory() 
    useEffect(() => {
        const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("token", token1);
        const token = localStorage.getItem('token')
        if(token) {
            const user = decodeToken(token);
            if(!user) {
                localStorage.removeItem('token')
                // history.replace('/login')
            }
            else
            {
                console.log(user);
                console.log("HIHIHIHIHS")
            }

        }
    })

    return <h1>Dashboard</h1>
} 

export default Dashboard
