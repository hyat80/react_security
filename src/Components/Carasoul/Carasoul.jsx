import React from 'react'
import img1  from "../../img/carousel-3.jpg";
import { Link } from 'react-router-dom';

function Carasoul() {
  return (
    <div>
       <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative">


            <div className="owl-carousel-item position-relative">
                <img className='img-fluid' src={img1}/>
                <div className="carousel-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 text-center">
                                <h1 className="display-3 text-white animated slideInDown mb-4"> Solution For Your Security
                                    System</h1>
                                <Link 
                                    className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft " style={{backgroundColor:"green"}}>Read
                                    More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Carasoul
