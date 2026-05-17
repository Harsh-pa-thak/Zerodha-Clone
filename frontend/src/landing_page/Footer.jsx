import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #fbfbfb;
            padding: 45px 0 20px;
            border-top: 1px solid #eee;
            color: #666;
          }

          .footer-logo {
            width: 155px;
            margin-bottom: 20px;
          }

          .footer-copy {
            font-size: 14px;
            line-height: 1.8;
            color: #666;
          }

          .footer-socials {
            display: flex;
            gap: 28px;
            margin: 22px 0;
            font-size: 22px;
          }

          .footer-socials a {
            color: #666;
            text-decoration: none;
          }

          .footer-socials a:hover {
            color: #387ed1;
          }

          .footer-divider {
            border: none;
            border-top: 1px solid #e5e5e5;
            margin: 25px 0;
          }

          .store-buttons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .store-badge {
            width: 150px;
            height: auto;
            display: block;
          }

          .store-badge:hover {
            opacity: 0.85;
          }

          .footer-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 20px;
          }

          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links li {
            margin-bottom: 14px;
          }

          .footer-links a {
            text-decoration: none;
            color: #666;
            font-size: 15px;
          }

          .footer-links a:hover {
            color: #387ed1;
          }

          .footer-text {
            margin-top: 45px;
            font-size: 12px;
            line-height: 1.9;
            color: #999;
          }

          .footer-text a {
            color: #387ed1;
            text-decoration: none;
            font-weight: 500;
          }

          .footer-bottom-links {
            display: flex;
            justify-content: center;
            gap: 35px;
            flex-wrap: wrap;
            margin-top: 25px;
          }

          .footer-bottom-links a {
            color: #888;
            text-decoration: none;
            font-size: 14px;
          }

          .footer-bottom-links a:hover {
            color: #387ed1;
          }

          @media (max-width: 768px) {
            .footer {
              padding: 35px 20px 20px;
            }

            .footer-title {
              margin-top: 30px;
            }

            .footer-socials {
              gap: 20px;
            }

            .footer-bottom-links {
              gap: 18px;
              justify-content: flex-start;
            }

            .store-badge {
              width: 140px;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Left section */}
            <div className="col-lg-3 col-md-6">
              <img src="logo.svg" alt="Zerodha logo" className="footer-logo" />
              <p className="footer-copy">
                © 2010 - 2026, Zerodha Broking Ltd.
                <br />
                All rights reserved.
              </p>
              <div className="footer-socials">
                <a href="#">𝕏</a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <hr
                className="footer-divider"
                style={{
                  width: "240px",
                  border: "none",
                  borderTop: "1px solid #150d0d",
                  margin: "25px 0",
                }}
              />{" "}
              <div className="footer-socials">
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>
              <div className="store-buttons">
                <a href="#">
                  <img
                    src="googlePlayBadge.svg"
                    alt="Get it on Google Play"
                    className="store-badge"
                  />
                </a>

                <a href="#">
                  <img
                    src="appstoreBadge.svg"
                    alt="Download on the App Store"
                    className="store-badge"
                  />
                </a>
              </div>
            </div>

            {/* Account */}
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Account</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Open demat account</a>
                </li>
                <li>
                  <a href="#">Minor demat account</a>
                </li>
                <li>
                  <a href="#">NRI demat account</a>
                </li>
                <li>
                  <a href="#">HUF demat account</a>
                </li>
                <li>
                  <a href="#">Commodity</a>
                </li>
                <li>
                  <a href="#">Dematerialisation</a>
                </li>
                <li>
                  <a href="#">Fund transfer</a>
                </li>
                <li>
                  <a href="#">MTF</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Support</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Support portal</a>
                </li>
                <li>
                  <a href="#">How to file a complaint?</a>
                </li>
                <li>
                  <a href="#">Status of your complaints</a>
                </li>
                <li>
                  <a href="#">Bulletin</a>
                </li>
                <li>
                  <a href="#">Circular</a>
                </li>
                <li>
                  <a href="#">Z-Connect blog</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-lg-2 col-md-6">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Philosophy</a>
                </li>
                <li>
                  <a href="#">Press & media</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Zerodha Cares (CSR)</a>
                </li>
                <li>
                  <a href="#">Zerodha.tech</a>
                </li>
                <li>
                  <a href="#">Open source</a>
                </li>
                <li>
                  <a href="#">Referral program</a>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-title">Quick links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Upcoming IPOs</a>
                </li>
                <li>
                  <a href="#">Brokerage charges</a>
                </li>
                <li>
                  <a href="#">Market holidays</a>
                </li>
                <li>
                  <a href="#">Economic calendar</a>
                </li>
                <li>
                  <a href="#">Calculators</a>
                </li>
                <li>
                  <a href="#">Markets</a>
                </li>
                <li>
                  <a href="#">Sectors</a>
                </li>
                <li>
                  <a href="#">Gift Nifty</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Long text */}
          <div className="footer-text">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India.
            </p>

            <p>
              For any complaints pertaining to securities broking please write
              to <a href="#">complaints@zerodha.com</a>, for DP related to{" "}
              <a href="#">dp@zerodha.com</a>. Please ensure you carefully read
              the Risk Disclosure Document as prescribed by SEBI | ICF.
            </p>

            <p>
              Procedure to file a complaint on <a href="#">SEBI SCORES</a>:
              Register on SCORES portal. Mandatory details for filing complaints
              on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system. Update your e-mail and phone number with your stock broker
              / depository participant and receive OTP directly from depository
              on your e-mail and/or mobile number to create pledge.
            </p>

            <p>
              India's largest broker based on networth as per NSE.{" "}
              <a href="#">NSE broker factsheet</a>
            </p>
          </div>

          {/* Bottom links */}
          <div className="footer-bottom-links">
            <a href="#">NSE</a>
            <a href="#">BSE</a>
            <a href="#">MCX</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Policies & procedures</a>
            <a href="#">Privacy policy</a>
            <a href="#">Disclosure</a>
            <a href="#">For investor's attention</a>
            <a href="#">Investor charter</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
