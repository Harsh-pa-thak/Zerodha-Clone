import React from "react";

function CreateTicket() {
  const categories = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Login Credentials",
        "Your Profile",
        "Account Modification and Segment Addition",
        "CMR and DP ID",
        "Nomination",
        "Transfer and Conversion of Shares",
      ],
    },
    {
      title: "Trading and Markets",
      icon: "fa-chart-line",
      links: [
        "Trading FAQs",
        "Kite",
        "Margins",
        "Product and Order Types",
        "Corporate Actions",
        "Kite Features",
      ],
    },
    {
      title: "Funds",
      icon: "fa-wallet",
      links: [
        "Fund Withdrawal",
        "Adding Funds",
        "Adding Bank Accounts",
        "DP Charges",
        "Payment Gateways",
      ],
    },
    {
      title: "Console",
      icon: "fa-desktop",
      links: [
        "Portfolio",
        "Reports",
        "Referral Program",
        "Account Statement and Ledger",
        "Verified P&L",
      ],
    },
    {
      title: "Coin and Mutual Funds",
      icon: "fa-coins",
      links: [
        "Understanding Mutual Funds and Coin",
        "Coin App",
        "Coin Web",
        "Transactions and Folios",
        "National Pension Scheme",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2>To create a ticket, select a relevant topic</h2>
        </div>
      </div>
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <h5 className="mb-3">
              <i
                className={`fa-solid ${cat.icon} me-2`}
                style={{ color: "#387ed1" }}
              ></i>
              {cat.title}
            </h5>
            <ul className="list-unstyled">
              {cat.links.map((link, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;