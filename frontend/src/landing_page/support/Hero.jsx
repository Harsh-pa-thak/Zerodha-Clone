import React from "react";

function Hero() {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
    fontSize: "16px",
    fontWeight: "400",
    marginRight: "22px",
    lineHeight: "2.2",
  };

  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        backgroundColor: "#387ed1",
        color: "#ffffff",
        minHeight: "520px",
        paddingTop: "55px",
        paddingBottom: "70px",
      }}
    >
      <div
        className="container"
        id="supportWrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "75px",
        }}
      >
        <h4
          style={{
            fontSize: "22px",
            fontWeight: "500",
            margin: "0",
          }}
        >
          Support Portal
        </h4>

        <a href="#" style={linkStyle}>
          Track Tickets
        </a>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "1.6",
                marginBottom: "28px",
                maxWidth: "650px",
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected..."
              style={{
                width: "100%",
                maxWidth: "620px",
                height: "70px",
                border: "none",
                borderRadius: "4px",
                padding: "0 28px",
                fontSize: "17px",
                outline: "none",
                color: "#444",
                marginBottom: "22px",
              }}
            />

            <div
              style={{
                maxWidth: "650px",
              }}
            >
              <a href="#" style={linkStyle}>
                Track account opening
              </a>

              <a href="#" style={linkStyle}>
                Track segment activation
              </a>

              <a href="#" style={linkStyle}>
                Intraday margins
              </a>

              <a href="#" style={linkStyle}>
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              style={{
                paddingLeft: "70px",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  marginBottom: "15px",
                }}
              >
                Featured
              </h1>

              <ol
                style={{
                  paddingLeft: "25px",
                  fontSize: "17px",
                }}
              >
                <li style={{ marginBottom: "15px" }}>
                  <a href="#" style={linkStyle}>
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>

                <li>
                  <a href="#" style={linkStyle}>
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;