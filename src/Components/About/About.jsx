import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../../img/icon/icon-2.png'
import img3 from '../../img/portfolio-5.jpg'
import img4 from '../../img/icon/icon-3.png'
import img5 from '../../img/icon/icon-4.png'
import img9 from '../../img/1.jpg'
import img10 from '../../img/2.jpg'
import img11 from '../../img/3.jpg'



function About() {
  return (
    <div>


      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0" style={{minHeight:"400px"}}>
                    <div className="position-relative h-100">
                      <img src={img3} className="position-absolute img-fluid w-100 h-100" style={{objectFit:'cover'}}/>
                    </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <div className="bg-success mb-3" style={{width:"60px" , height:'2px'}}></div>
                        <h1 className="display-5 mb-4">About Us</h1>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                            amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat
                            amet</p>
                        <div className="row g-4 mb-4 pb-3">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-white rounded-circle"style={{width:"64px" ,  height:"64px"}}>
                                        <img src={img2} className="img-fluid"/>
                                    </div>
                                    <div className="ms-4">
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="fw-medium text-success mb-0">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center">
                                    <div className="btn-square bg-white rounded-circle" style={{width:"64px" ,  height:"64px"}} >
                                      <img src={img4} className="img-fluid"/>
                                    </div>
                                    <div className="ms-4">
                                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                        <p className="fw-medium text-success mb-0">Projects Done</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link  className="btn btn-success rounded-pill py-3 px-5">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-4">
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="h-100 bg-light p-4 p-xl-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="btn-square rounded-circle" style={{width: 64, height: 64, background: '#f8f5f5'}}>
              <img className="img-fluid" src={img4} alt="Icon" />
            </div>
          </div>
          <h5>Home Security</h5>
          <hr className="w-25" />
          <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo
            clita et</span>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
        <div className="h-100 bg-light p-4 p-xl-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="btn-square rounded-circle" style={{width: 64, height: 64, background: '#f8f5f5'}}>
              <img className="img-fluid" src={img5} alt="Icon" />
            </div>
          </div>
          <h5>Access Control</h5>
          <hr className="w-25" />
          <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo
            clita et</span>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
        <div className="h-100 bg-light p-4 p-xl-5">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="btn-square rounded-circle" style={{width: 64, height: 64, background: '#f8f5f5'}}>
              <img className="img-fluid" src={img2} alt="Icon" />
            </div>
          </div>
          <h5>24/7 Support</h5>
          <hr className="w-25" />
          <span>Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum et diam justo
            clita et</span>
        </div>
      </div>
    </div>
  </div>
</div>






{/* team */}


<section id="team" className="bg-light overflow-hidden">
  <div className="container">
    <div className="section-head">
      <h3 className="text-center p-3">Our Team.</h3>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="team-item img-rounded">
          <div className="team-img overflow-hidden position-relative">
            <img src={img9} className="w-100" alt />
            <div className="over-lay3 d-flex justify-content-center align-items-center">
              <div className="team-social">
                <ul className="d-flex list-unstyled">
                  <li><Link href="#" className="text-reset text-decoration-none"><i className="fa fa-facebook" /></Link></li>
                  <li><Link href="#" className="text-reset text-decoration-none"><i className="fa fa-twitter" /></Link></li>
                  <li><Link href="#" className="text-reset text-decoration-none"><i className="fa fa-pinterest" /></Link></li>
                  <li><Link href="#" className="text-reset text-decoration-none"><i className="fa fa-linkedin" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-content text-center">
            <h4>John Doe</h4>
            <h5>FRONT-END DEVELOPER</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item img-rounded">
          <div className="team-img overflow-hidden position-relative">
            <img src={img10} className="w-100" alt />
            <div className="over-lay3 d-flex justify-content-center align-items-center">
              <div className="team-social">
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-pinterest" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-content text-center">
            <h4>Dave Wood</h4>
            <h5>BACK-END DEVELOPER</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="team-item img-rounded">
          <div className="team-img overflow-hidden position-relative">
            <img src={img11} className="w-100" alt />
            <div className="over-lay3 d-flex justify-content-center align-items-center">
              <div className="team-social">
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-pinterest" /></a></li>
                  <li><a href="#" className="text-reset text-decoration-none"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-content text-center">
            <h4>Claire Chedd</h4>
            <h5>BACK-END DEVELOPER</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
