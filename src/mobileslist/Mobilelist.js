import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './Mobile.css';
import { Link } from 'react-router-dom';

const Mobilelist = () => {
    const { state: { mobiles }, handleMobileDetails } = useContext(Context)
    return (
        <>
            {window.scrollTo(0, 0)}
            <div className="row bg-light pt-3">
                {mobiles.map((item) => {
                    return (

                        <div className="col-xl-3 col-lg-3 col-sm-12 col-md-12 ">
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


            </div >
        </>
    )
}

export default Mobilelist;
