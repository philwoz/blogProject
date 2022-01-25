import React, { useState } from "react";
import axios from "axios";


export const RegPage = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
    }

    const register = () => {
        const { name, email, password } = user
        if (name && email && password) {
            axios.post("http://localhost:5000/user", user)
                .then(res => {
                    alert("successfully registered")
                    const userState = {
                        email: user.name,
                        password: user.password,
                    }
                    props.setLogOnUser(userState)
                    console.log(res)
                })
        }
        else {
            alert("invalid input")
        };
    }

    return (
        <div className="submit-form">
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={user.name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        required
                        value={user.email}
                        onChange={handleChange}
                        name="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                    />
                </div>

                <button onClick={register} className="btn btn-success">
                    Register
                </button>
            </div>

        </div>

    );

};