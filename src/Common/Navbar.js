import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import Logout from "./Logout";

export default function Navbar() {
  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(false);
  // const shownabar=""
// varaiable function
  // component will mount
  // component did update
  // component will unmount
  useEffect(()=>{
    console.log(typeof location.pathname)
    if(location.pathname === "/" || location.pathname === "/sign-up") 
      {
        console.log(location.pathname)
        setShowNavbar(true);
      }
  },[showNavbar])

  return (
    <div>
      <div className="container-fluid fixed-nav">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" to="/">
                  <h3>Digitologist</h3>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {!showNavbar && <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav offset-8 me-auto mb-2 mb-lg-0 header-icons d-none d-lg-flex">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        width="35"
                        viewBox="0 0 576 512"
                      >
                        <path
                          class="fa-secondary"
                          opacity=".4"
                          d="M170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411c2 4.2 3.5 8.8 4.4 13.5L170.7 288z"
                        />
                        <path
                          class="fa-primary"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c26.9 0 50 19.1 55 45.5l51.6 271c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        width="35"
                        viewBox="0 0 512 512"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        width="35"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                      </svg>
                    </li>
                  </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 my_account ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white "
                        to="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My Account
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" to="/Signin">
                            Sign In
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" to="SignUp">
                            Create Account
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <button className="btn btn-info" onClick={Logout}> 
                  <CiLogout />
                    Logout
                  </button>
                </div>}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
