import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import { TRENDII_BUSINESS_SECONDARY,TRENDII_BUSINESS_PRIMARY_WHITE } from '../../public/static/images'

const Header = () => {
 

  return (
   
      <div id="divheader" className="full-width-header">
        {" "}
        {/*  secondary-header */}
        <header className="header container-xl">
          <div className="row">
            <div className="col-auto left-part">
            
              <Navbar.Brand href="/" title="TRENDii">
                <img
                  className="primary-logo"
                  src={TRENDII_BUSINESS_PRIMARY_WHITE}
                  alt="TRENDii"
                />
                <img
                  className="secondary-logo"
                  src={TRENDII_BUSINESS_SECONDARY}
                  alt="TRENDii"
                />
              </Navbar.Brand>
              {/* End Logo */}
            </div>

            <div className="col right-part d-none">
              {/* Start Navbar Search Part */}
              <div className="search-form">
                <Button variant="link" className="icon-btn">
                  
                </Button>

                {/* <SearchBox
                  t={t}
                  OnSearch={this.HandleSearch}
                  type="header"
                  {...this.props}
                /> */}
              </div>
              {/* End Navbar Search Part */}

              <Button
                variant=" btn-outline-light"
                className="btn btn-iconic-text dual-icon btn-clear"
              >
               
                <span>Close</span>
              </Button>

              <div className="btn-part d-flex d-none">
                {true ? (
                  <Button
                    variant=" btn-outline-light"
                    className="rounded d-none d-md-inline-block"
                  >
                    Login
                  </Button>
                ) : (
                    ""
                  )}
                {true ? (
                  <Button
                    variant="primary"
                    className="rounded d-none d-md-inline-block"
                  >
                    SignUp
                  </Button>
                ) : (
                    <Dropdown alignRight>
                      <Dropdown.Toggle id="user-dropdown" className="profile-btn">
                      
                        <span>{"User name here"}</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="profile-menu bubble-top">
                      
                        <Dropdown.Item>Setting</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
              </div>
            </div>
          </div>
        </header>
      </div>

  );
};

export default Header;
