import React from "react";
import axios from "axios";

export const RegPage = (props) => {
    // const [user, setUser] = useState({
    //     name: "",
    //     email: "",
    //     password: ""
    // })
    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    // const register = () => {
    //     const {name, email, password} = user

    // }



    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputUser1" class="form-label">User Name</label>
                <input type="UserName" class="form-control" id="exampleInputUser1" aria-describedby="userlHelp"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    )
}