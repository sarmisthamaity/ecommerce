import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from 'axios';


const Login = () => {

    const [inputval, setInput] = useState({
        email: "",
        password: ""
    })
    const history = useHistory();

    const setInputValue = (e) => {
        const {name, value} = e.target;
        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const saveData = async(e) => {
        e.preventDefault();
        const { email, password } = inputval;

        const data = {
            email,
            password,
        }

        const resp = await axios.post("http://127.0.0.1:3455/login", data);
        // console.log('resp.data', resp.data)
        if(!(resp.data.login.token)) {
            history.push('/register')
        }
        if(resp.data.success === true) {
            localStorage.setItem('Token', resp.data.login.token)
            localStorage.setItem('isAuthenticated', true)
        }
        if(resp.data.login.existUser.userType === 'admin') {
            history.push('/admin')
        } else {
            history.push('/view')
        }
        setInput({
            email: "",
            password: ""
        })

    }

    return (
        <div className="container">
            <NavLink to={'/register'}>If Don't have account</NavLink>
            <form className="mt-5">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" onChange={setInputValue} name='email' value={inputval.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={setInputValue} name='password' value={inputval.password} className="form-control" id="exampleInputPassword1" />
                    </div>

                    
                    <button type="submit" className="btn btn-primary" onClick={(e) => saveData(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
