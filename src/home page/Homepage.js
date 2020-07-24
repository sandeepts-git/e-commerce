import React, { useContext } from 'react';
import './Homepage.css';
import { Context } from '../context/Context';
import Carousal from '../Caraousal/Carousal';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const { state: { latestmobiles, bestseller }, handleMobileDetails } = useContext(Context)
    return (
        <>
            {window.scrollTo(0, 0)}
            <Carousal></Carousal>
            <div class="container border  mt-4 border my-2 bg-light" >
                <h2 className="">Latest Mobiles</h2>
                <hr />
                <div class="row">

                    {latestmobiles.map(item => {
                        return (
                            <div class=" mt-3 mx-2 my-2 col-xl-3 col-lg-6 col-md-5 col-xs-12  pt-3 shadow" >
                                <div class="ribbon">
                                    <span class="text-white bg-dark">Most Popular</span></div>
                                <Link to="/mobiles/mobile" style={{ textDecoration: 'none' }}>
                                    <div onClick={(e) => handleMobileDetails(item)} >
                                        <img class="mx-auto d-block mobilelist_img" src={item.src}></img>
                                        <blockquote class="blockquote text-center">
                                            <p class="mb-0">{item.name}({item.ram})</p>
                                            <footer class="blockquote-footer">now  <cite title="Source Title">₹ {item.price}</cite></footer>
                                        </blockquote>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}


                    <div class=" mx-auto d-flex  align-items-center  ">

                        <Link to="/mobiles"> <button class="btn btn-primary">view All</button></Link>
                    </div>


                </div>

            </div>
            <div class="container border  mt-4 border my-2 bg-light " >
                <h2 className="">Best Seller</h2>
                <hr />
                <div class="row">

                    {bestseller.map(item => {
                        return (
                            <div class=" mt-3 mx-2 my-2 col-xl-3 col-lg-6 col-md-5 col-xs-12  pt-3 shadow">
                                <Link to="/mobiles/mobile" style={{ textDecoration: 'none' }}>
                                    <div onClick={(e) => handleMobileDetails(item)} >
                                        <img class="mx-auto d-block mobilelist_img" src={item.src}></img>
                                        <blockquote class="blockquote text-center">
                                            <p class="mb-0">{item.name}({item.ram})</p>
                                            <footer class="blockquote-footer">now  <cite title="Source Title">₹ {item.price}</cite></footer>
                                        </blockquote>
                                    </div>
                                </Link>
                            </div>


                        )
                    })}


                    <div class=" mx-auto d-flex  align-items-center  ">

                        <Link to="/mobiles"> <button class="btn btn-primary">view All</button></Link>
                    </div>


                </div>

            </div>


            <div class="container border my-2" style={{ backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)" }}>
                <h2>Top Brands</h2>
                <hr />
                <div class="row pb-4">

                    <img src="https://image01.realme.net/general/20181116/1542370102069.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    <img src="https://i.pinimg.com/236x/d3/0f/ec/d30fec7ce26c41155a556eae1c553f51.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    <img src="https://i.pinimg.com/236x/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    <img src="https://i.pinimg.com/236x/70/b9/bf/70b9bfd83ae93ae96c51d57cff1813c5.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    <img src="https://i.pinimg.com/236x/be/22/c2/be22c2e302aa22de5e8db6a1ab98c6ef.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                    <img src="https://i.pinimg.com/236x/22/73/86/227386d51e32ca650b0d27c7d20fc2af.jpg" class="cardclass border p-1 img-fluid col-2" height="150px" width="150px"></img>
                </div>
            </div>
        </>

    )
}

export default Homepage