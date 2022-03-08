import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 footer-item-wrap">
              <p>Who we are</p>
              <ul>
                <li>
                  <Link to="/OurStory" className="linkcolor">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="linkcolor">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/advisors" className="linkcolor">
                    Advisors
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="linkcolor">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="linkcolor">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 footer-item-wrap">
              <p>Resource Center</p>
              <ul>
                <li>
                  <Link to="/blogs" id="Blog-page" className="linkcolor">
                    Blogs{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="linkcolor">
                    Events and webinars{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="linkcolor">
                    FAQs{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12  footer-item-wrap">
              <p>Legal</p>
              <ul>
                <li>
                  <Link to="/terms" className="linkcolor">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="linkcolor">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/keyDisclosure" className="linkcolor">
                    Key Risks & Disclosure
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12  footer-item-wrap">
              <p>Land Depot Capital</p>
              <ul>
                <li>
                  <div className="StreetAdd-wrap">
                    <div className="StreetAdd-wrap-icon">
                      <i className="fas fa-map-marker-alt me-2 markIcon" />
                    </div>
                    <div className="StreetAdrs">
                      <label>
                        Unit 35- 1828 Blue Heron Drive, London, ON N6H 0B7
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+1 (647) 408-6929"
                    className="footer-detailsLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-phone-alt me-2" />
                    +1 (647) 408-6929
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@landdepotcapital.ca"
                    className="footer-detailsLink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-envelope me-2 " />
                    info@landdepotcapital.ca
                  </a>
                </li>
                <li>
                  <div className="social-wrapper_links">
                    <ul>
                      <li>
                        <a
                          className="social-link_links"
                          href="https://www.facebook.com/landdepotcapital"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="social-link"
                          href="https://www.instagram.com/ldc_proptech/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="social-link"
                          href="https://twitter.com/ldc_proptech"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/ldc-proptech"
                          target="_blank"
                          className="social-link"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="footer copyright-bg">
        <div className="container-fluid">
          <div className="container">
            <div className="footer-copyright py-3">
              <div className="footer-copy-wrapper text-center">
                © 2021 Land Depot Capital right reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
