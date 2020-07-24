import React from 'react'

const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <img width="1668px" height="280px" src="https://rukminim1.flixcart.com/flap/1688/280/image/ca8755c7346ca496.jpg?q=50" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img width="1668px" height="280px" src="https://rukminim1.flixcart.com/flap/1668/280/image/312fc6bb475fe6ba.jpg?q=50" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img width="1668px" height="280px" src="https://rukminim1.flixcart.com/flap/1668/280/image/c2bef673e07b2837.jpg?q=50" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Carousal
