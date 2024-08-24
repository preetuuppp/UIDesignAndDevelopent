import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5>About Us</h5>
            <p>
              We are a leading company providing top-quality products and
              services. Our commitment to excellence drives us to deliver the
              best for our customers.
            </p>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Custom Solutions</a>
              </li>
              <li>
                <a href="#">Training</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <p>
              Address: 1234 Main St, Anytown, USA <br />
              Phone: (123) 456-7890 <br />
              Email: info@company.com
            </p>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="social-icon">
                FB
              </a>
              <a href="#" className="social-icon">
                TW
              </a>
              <a href="#" className="social-icon">
                IG
              </a>
              <a href="#" className="social-icon">
                LI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
