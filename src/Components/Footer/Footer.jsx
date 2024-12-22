import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Address</h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
        <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
        <div className="d-flex pt-2">
          <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" ><i className="fab fa-twitter" /></Link>
          <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" ><i className="fab fa-facebook-f" /></Link>
          <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" ><i className="fab fa-youtube" /></Link>
          <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" ><i className="fab fa-linkedin-in" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Services</h5>
        <Link className="btn btn-link" >Business Security</Link>
        <Link className="btn btn-link" >Fire Detection</Link>
        <Link className="btn btn-link" >Alarm Systems</Link>
        <Link className="btn btn-link" >CCTV &amp; Video</Link>
        <Link className="btn btn-link" >Smart Home</Link>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Quick Links</h5>
        <Link className="btn btn-link" >About Us</Link>
        <Link className="btn btn-link" >Contact Us</Link>
        <Link className="btn btn-link" >Our Services</Link>
        <Link className="btn btn-link" >Terms &amp; Condition</Link>
        <Link className="btn btn-link" >Support</Link>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative w-100">
          <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
          <button type="button" className="btn btn-success py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
