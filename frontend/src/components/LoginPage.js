
import React, { useState } from 'react';
// import { useHistory } from "react-router-dom"

import { login } from "../utils/login";

export const LoginPage = (props) => {
    // const history = useHistory()
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { email, value} = e.target
        setUser({
            ...user,
            [email]:value
        })
    }

    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email}  onChange={handleChange}></input> 
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" >Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"  value={user.password}  onChange={handleChange}></input>
            </div>
            <button type="submit" class="btn btn-primary" onClick={login(user, props.func)}>Submit</button>
        </form>
    )
}