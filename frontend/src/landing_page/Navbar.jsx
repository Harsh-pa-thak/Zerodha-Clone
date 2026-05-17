import React from 'react';
function Navbar() {
  return (
    <>
      <style>
        {`
          .custom-navbar {
            height: 80px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .custom-nav-link {
            font-size: 16px;
            margin-left: 28px;
            color: #666666 !important;
            font-weight: 400;
          }

          .custom-nav-link:hover {
            color: #387ed1 !important;
          }

          .custom-logo {
            width: 170px;
          }

          .menu-icon {
            font-size: 30px;
            line-height: 1;
            color: #444444 !important;
            margin-left: 28px;
            margin-top: -4px;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          @media (max-width: 991px) {
            .custom-navbar {
              height: auto;
              padding: 15px 0;
            }

            .custom-nav-link {
              margin-left: 0;
              padding: 10px 0;
            }

            .menu-icon {
              margin-left: 0;
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="logo.svg"
              alt="Zerodha logo"
              className="custom-logo"
            />
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Signup
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link menu-icon" href="#">
                  ☰
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;