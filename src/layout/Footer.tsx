import React from "react";
import { TRENDII_BUSINESS_SECONDARY,FB_ICON,INSTAGRAM_WHITE } from '../../public/static/images'

const Footer = () => {

  return (

      <footer className="footer">
        <div className="primary-footer">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-4">
                <a
                  title="TRENDii | Business"
                  href="/"
                  className="d-inline-block align-top mb-lg-4 mb-3 logo"
                >
                  <img
                    className="d-inline-block align-top"
                    src={
                      TRENDII_BUSINESS_SECONDARY
                    }
                    alt=""
                  />
                </a>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/wearetrendii"
                      title="Facebook"
                      target="_blank"
                    >
                      <img
                        src={FB_ICON}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/gettrendii"
                      title="Instagram"
                      target="_blank"
                    >
                      <img
                        src={
                         INSTAGRAM_WHITE
                        }
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg">
                <div className="row justify-content-between">
                  <div className="col-6 col-sm">
                    <p className="footer-heading">Explore</p>
                    <ul className="footer-links">
                      <li>
                        <a href="/" title="Home">
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.trendii.com/"
                          target="_blank"
                          title="Blog"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm">
                    <p className="footer-heading">Learn more</p>
                    <ul className="footer-links">
                      <li>
                        <a
                          href="https://trendii.com/"
                          target="_blank"
                          title="TRENDii Website"
                        >
                          <span className="cocogoose-semibold d-inline-block">
                            TREND<em className="lowercase">ii</em>
                          </span>{" "}
                          Website
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trendii.com/about"
                          target="_blank"
                          title=" About Us"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/brands-retailers" title="Brand Partnership">
                          Brand Partnership
                        </a>
                      </li>
                      <li>
                        <a href="/brands-retailers/advertising" title="Advertising">
                        Advertising
                        </a>
                      </li>
                      <li>
                        <a href="/publishers" title="Publishers">
                        Publishers
                        </a>
                      </li>
                      <li>
                        <a href="/news" title="News">
                        News
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm">
                    <p className="footer-heading">Legal</p>
                    <ul className="footer-links">
                      <li>
                        <a href="/terms" title="User terms">
                          Retailer Terms
                        </a>
                      </li>
                      <li>
                        <a href="/privacy" title="Privacy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm">
                    <p className="footer-heading">Help</p>
                    <ul className="footer-links">
                      <li>
                        <a
                          title="Contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="cocogoose-semibold d-inline-block">
              TREND<em className="lowercase">ii</em>
            </span>{" "}
            Business. All rights reserved.
          </p>
        </div>
      </footer>


  );
};

export default Footer;
