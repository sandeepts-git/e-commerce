import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar'
import Homepage from './home page/Homepage';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detailspage from './productdetailspage/Detailspage';
import Mobilelist from './mobileslist/Mobilelist';
import Mobilestore from './store/Mobilestore';
import Cartpage from './cartpage/Cartpage';
import Register from './register/Register';
import Login from './login/Login';

function App() {
  return (


    <>
      <Router>
        <Navbar></Navbar>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/mobiles" exact component={Mobilelist}></Route>
        <Route path='/mobiles/mobile' component={Detailspage}></Route>
        <Route path="/cart" component={Cartpage}></Route>
        <Route path="/registrationPage" component={Register}></Route>
        <Route path="/LoginPage" component={Login}></Route>
      </Router>
      <Footer></Footer>


    </>
  );
}

export default App;
