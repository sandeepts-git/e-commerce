import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Context } from "../context/Context";

export const Login = () => {


    const history = useHistory();

    const routeChange = () => {
        let path = `/`;
        history.push(path);

    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
            routeChange();
            passDetailsToNav(u);
        }).catch((err) => {
            console.log(err);
        })

    }

    const { passDetailsToNav } = useContext(Context)
    return (
        <>
            <div className="container">

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
                <div >

                    <button type="button" class="btn btn-success" onClick={(e) => login(e)} >Submit</button>
                    <span className="text-light ml-4">newUser?</span>
                    <Link to="/registrationPage"> <button type="button" class="btn btn-primary"> Register</button></Link>
                </div>
            </div>
        </>
    )
}
export default Login;