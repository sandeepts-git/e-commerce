import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';


const Navbar = () => {
    const { state: { cart, ProfileName, Total }, changeProfileState } = useContext(Context)

    let user = ProfileName;

    async function logout() {

        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
            return err;
        });

        let path = "/LoginPage"
        history.push(path);
        user = ''
        changeProfileState();

    }



    const history = useHistory();

    return (
        <div>
            {/* <pre className="text-white"> {JSON.stringify(Total, null, 4)}</pre>
            {console.log(ProfileName)} */}
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                <img src="https://cdn.dribbble.com/users/2540859/screenshots/10485925/mychoice_4x.jpg" height="60px" width="100px"></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active ">
                            <Link to="/" style={{ textDecoration: "none" }}> <a class="nav-link text-light" ><i class="fa fa-home mr-1" style={{ fontSize: '20px' }}></i>Home </a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" >Contact</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/cart" style={{ textdecoration: "none" }}> <a class="nav-link text-light" ><i class="fa fa-shopping-cart mr-1" style={{ fontsize: "24px" }}></i><sup className="bg-warning text-dark px-1 rounded-circle">{cart.length}</sup></a></Link>
                        </li>

                        {user ? (
                            <>
                                <li class="nav-item">
                                    <a class="nav-link text-light" >{ProfileName}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" onClick={() => logout()} >Logout</a>
                                </li>
                            </>
                        ) : (
                                <li class="nav-item">
                                    <Link to="/LoginPage"> <a class="nav-link text-light" ><i class="fa fa-sign-in mr-1" style={{ fontsize: "24px" }}></i>Login</a></Link>
                                </li>
                            )}


                    </ul>
                    <form class="form-inline my-2 my-lg-0 " >
                        <input class="form-control mr-sm-2 ml-5" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
