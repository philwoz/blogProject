
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { login } from "../utils/login";

export const LoginPage = (props) => {
    const navigate = useNavigate();
    const initialUserState = {
        email: "",
        password: "",
      };
    
      const [user, setUser] = useState(initialUserState);
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
    
      const login = () => {
        
        axios.post("http://localhost:5000/user/login", user)
        .then(res=>{alert(res.data.message)
        props.setLogOnUser(res.data.user)
        navigate.push('/')
        }).catch((error) => {
            console.log(error)
        })
        console.log(props.logOnUser)
        
      };
    
      return (
        <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={user.email}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                name="password"
              />
            </div>
    
            <button onClick={login} className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      );
    
};
