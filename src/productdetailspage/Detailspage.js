import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Detailspage = () => {
    const { state: { mobile }, handleCart } = useContext(Context)

    return (
        <>
            {window.scrollTo(0, 0)}
            <div className="container bg-light">
                <h1>{mobile.name}</h1>
                <hr />
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-12 col-md-12">
                        <img class="pt-4 ml-5" src={mobile.src}></img>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-sm-12 col-md-12">
                        <div className="bg-primary">
                            <h5>Key specs</h5>
                            <div className="bg-light pt-2 border">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="d-flex ml-4">
                                            <i class='fas fa-desktop mt-2 mr-2' style={{ fontsize: "24px" }}></i>
                                            <div >
                                                <span className="d-block">Display</span>
                                                <span className="d-block text-primary">{mobile.display}-inch</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex">
                                            <i class='fas fa-microchip mt-2 mr-2' style={{ fontsize: "36px" }}></i>
                                            <div >
                                                <span className="d-block">processor</span>
                                                <span className="d-block text-primary">{mobile.processor}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex">
                                            <i class='fa fa-camera mt-2 mr-2' style={{ fontsize: "24px" }}></i>
                                            <div >
                                                <span className="d-block">Front camera</span>
                                                <span className="d-block text-primary">{mobile["front camera"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-4">
                                    <div className="col-4">
                                        <div className="d-flex ml-4">
                                            <i class='fa fa-camera mt-2 mr-2' ></i>
                                            <div >
                                                <span className="d-block">Rear camera</span>
                                                <span className="d-block text-primary">{mobile["rear camera"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex">
                                            <i class='fas fa-memory mt-2 mr-2' style={{ fontsize: "24px" }}></i>
                                            <div >
                                                <span className="d-block">Ram</span>
                                                <span className="d-block text-primary">{mobile.ram}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex">
                                            <i class='fas fa-hdd mt-2 mr-2' style={{ fontsize: "30px" }}></i>
                                            <div >
                                                <span className="d-block">Battery Capacity</span>
                                                <span className="d-block text-primary">{mobile["battery capacity"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-4">
                                        <div className="d-flex ml-4">
                                            <i class='fa fa-battery-4 mt-2 mr-2' style={{ fontsize: "24px" }}></i>
                                            <div >
                                                <span className="d-block">Storage</span>
                                                <span className="d-block text-primary">{mobile.storage}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex">
                                            <i class="icon-android mt-2 mr-2" style={{ fontsize: "24px" }}></i>
                                            <div >
                                                <span className="d-block">Android</span>
                                                <span className="d-block text-primary">{mobile.os}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row my-4">
                                    <div className="col-6 text-center">
                                        <h4>Price :₹ {mobile.price}</h4>
                                    </div>
                                    <div className="col-6">
                                        {!mobile.incart ? (<button className="btn btn-success" onClick={() => handleCart(mobile)}>Add to Cart</button>) : (<div className="text-white"><p className="bg-primary d-inline p-2
                                        ">In cart</p></div>)}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container bg-light">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Full view</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Description</a>
                    </li>

                </ul>
                <div class="tab-content mt-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <img className="col-6" height="500px" src={mobile.fullviewimages.src1}></img>
                            <img className="col-6" height="500px" src={mobile.fullviewimages.src2}></img>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            <div className="col-6 border-right">
                                <p>
                                    {mobile.description1}
                                </p>
                            </div>
                            <div className="col-6">
                                <p>
                                    {mobile.description2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detailspage;