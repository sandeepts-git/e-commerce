import React, { useState } from 'react';

import firebase from "../firebase/Fire";



const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onRegister(e) {
        e.preventDefault();
        try {
            await firebase.register(name, email, password)

            alert(name + " you are Registered !!")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div className="container">
                <div class="form-group">
                    <label for="username" className="text-white">User Name</label>
                    <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" className="text-white">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" className="text-white">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" class="btn btn-primary" onClick={(e) => onRegister(e)}>Submit</button>
            </div>
        </>
    )
}
export default Register;