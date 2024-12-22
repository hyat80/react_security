import React from 'react'

function Contact() {
  return (
    <div>
       <div className="container-fluid bg-light overflow-hidden px-lg-0">
  <div className="container contact px-lg-0">
    <div className="row g-0 mx-lg-0">
      <div className="col-6 contact-text py-5 wow fadeIn">
        <div className="map mt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86992.92503978865!2d31.220492460763097!3d30.967851319364797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb4d2aa1877b%3A0x6b9caf7bbe867370!2z2KfZhNmF2K3ZhNipINin2YTZg9io2LHZidiMINin2YTZhdit2YTYqSDYp9mE2YPYqNix2YkgKNmC2LPZhSAyKdiMINmF2LHZg9iyINin2YTZhdit2YTZhyDYp9mE2YPYqNix2YnYjCDZhdit2KfZgdi42Kkg2KfZhNi62LHYqNmK2Kk!5e0!3m2!1sar!2seg!4v1712000867881!5m2!1sar!2seg" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
        <div className="p-lg-5 ps-lg-0">
          <div className="section-title text-start">
            <h1 className="display-5 mb-4">Contact Us</h1>
          </div>
          <p className="mb-4">The contact form is currently inactive. Get a functional and working contact
            form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and
            you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
          <form>
            <div className="row g-3">
              <div className="col-md">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-success w-100 py-3" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact
