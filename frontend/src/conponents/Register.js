import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const [inputval, setInput] = useState({
        userName: "",
        email: "",
        password: ""
    })

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
        const { userName, email, password } = inputval;

        const data = {
            userName,
            email,
            password,
        }
        // console.log('data', data);

        const resp = await axios.post("http://127.0.0.1:3455/signup", data);
        
        // console.log(resp.data.user.userType, 'pppppppppppppppppppppppp');

    }

    return (
        <div className="container">
            <NavLink to={'/'}>If Have Account</NavLink>
            <form className="mt-5">
                <div className="row">
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">userName</label>
                        <input type="text" onChange={setInputValue} value={inputval.userName} name='userName' className="form-control" id="exampleInputPassword1" />
                    </div>
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

export default Register;
