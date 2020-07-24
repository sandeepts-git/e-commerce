import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { Link, useHistory } from 'react-router-dom';

const Cartpage = () => {

    const { state: { totalprice, cart }, decrementCounter, incrementCounter, deleteItem } = useContext(Context)
    const history = useHistory();
    return (
        <>
            {window.scrollTo(0, 0)}

            {cart.length > 0 ? (
                <div className="container">
                    <div class="row ">
                        <div class="col-8">
                            {cart.map((item, index) => {
                                return (
                                    <div class="row border bg-light shadow mt-2 p-2">
                                        <div class="col-4">
                                            <div><img class="d-block m-auto" src={item.src} width="150px" height="200px" /></div>
                                            <div class="d-flex justify-content-center mt-2">
                                                <button class="btn btn-secondary" onClick={() => decrementCounter(index)} disabled={item.quantity <= 1}><i class="fa fa-minus" ></i> </button>
                                                <div>
                                                    <span class="badge" style={{ padding: '10px' }}>{item.quantity}</span>
                                                </div>
                                                <button class="btn btn-secondary" onClick={() => incrementCounter(index)} disabled={item.quantity >= 3}><i class="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="mt-5">
                                                {item.name}
                            ({item.ram} ram)
                         </div>
                                        </div>
                                        <div class="col-2 d-flex align-items-center justify-content-center">

                                            price:<b>₹{Number(item.price) * item.quantity}/-</b>

                                        </div>
                                        <div class="col-2 d-flex align-items-center justify-content-center">
                                            <button class="btn btn-danger" onClick={() => deleteItem(index)} >Remove</button>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                        <div class="col-4  mt-2">
                            <div class="border bg-light shadow p-2">
                                <div><h4>Price Details</h4></div>
                                <hr></hr>
                                <div>
                                    <div class="text-primary font-weight-bold">
                                        <span style={{ width: '49%', display: 'inline-block' }}> Price({cart.length} items):</span>
                                        <span class="text-success">
                                            ₹{totalprice}
                                        </span>
                                    </div>
                                    <div class="mt-2">
                                        <span style={{ width: '49%', display: 'inline-block' }} > Delivery Cost:</span>
                                        <span class="text-success">FREE</span>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="text-primary font-weight-bold">
                                    <span style={{ width: '49%', display: 'inline-block' }} > Total Price:</span>
                                    <span class="text-success">
                                        ₹{totalprice}
                                    </span>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>




            ) : (
                    <div className="container text-center bg-light">
                        <p className="">your cart is empty</p>
                        <Link to="/"><p>Go to home</p></Link>
                        <img src="https://image.shutterstock.com/image-vector/vector-illustration-icon-shopping-concept-600w-502037047.jpg"></img>
                    </div>
                )}

        </>
    )
}

export default Cartpage
