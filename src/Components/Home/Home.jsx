import React from "react";
import Navbar from "../Navbar/Navbar";
import Carasoul from "../Carasoul/Carasoul";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Service from "../Service/Service";
import icon1 from "../../img/icon/icon-7.png"
import icon2 from "../../img/icon/icon-10.png"
import icon3 from "../../img/icon/icon-3.png"
import icon4 from "../../img/icon/icon-2.png"
import icon5 from "../../img/feature.jpg"
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";




function Home() {
  return (
    <div>
      <Navbar />
      <Carasoul />
      <About />
      <Service />
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 feature-text py-5 wow fadeIn"data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="bg-success mb-3" style={{ width: 60, height: 2 }}/>
                <h1 className="display-5 mb-5">Why Choose Us</h1>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet</p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                        <img className="img-fluid" src={icon1} alt="Icon"/>
                      </div>
                      <div className="ms-4">
                        <p className="text-success mb-2">Trusted</p>
                        <h5 className="mb-0">Security</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                        <img className="img-fluid" src={icon2} alt="Icon" />
                      </div>
                      <div className="ms-4">
                        <p className="text-success mb-2">Quality</p>
                        <h5 className="mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-square bg-white rounded-circle"  style={{ width: 64, height: 64 }}>
                        <img className="img-fluid" src={icon3} alt="Icon"/>
                      </div>
                      <div className="ms-4">
                        <p className="text-success mb-2">Smart</p>
                        <h5 className="mb-0">Systems</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div className="btn-square bg-white rounded-circle"style={{ width: 64, height: 64 }}>
                        <img  className="img-fluid"  src={icon4} alt="Icon"/>
                      </div>
                      <div className="ms-4">
                        <p className="text-success mb-2">24/7 Hours</p>
                        <h5 className="mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src={icon5} style={{ objectFit: "cover" }} alt/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact/>
    

    
    <Link  className="btn btn-lg btn-success btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></Link>

    </div>
  );
}

export default Home;
