import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function Product() {
  const img1 = "kite.png";
  const text1 = (
    <>
      <h1>Kite</h1>
      <br />
      <p style={{ fontSize: "20px" }}>
        Our ultra-fast flagship trading platform with streaming market data,
        advanced charts, an elegant UI, and more. Enjoy the Kite experience
        seamlessly on your Android and iOS devices.
      </p>
      <a href="/kite" className="text-primary text-decoration-none ">
        Try Kite demo<i className="fa-solid fa-arrow-right-long ml-5"></i>
      </a>

      <a href="/kite" className="text-primary text-decoration-none p-5 mr-5">
        Learn more <i className="fa-solid fa-arrow-right-long"></i>
      </a>
      <br />
      <br />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="appstoreBadge.svg"
        alt="appstore"
      />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="googlePlayBadge.svg"
        alt="playstore"
      />
    </>
  );

  const img2 = "console.png";
  const text2 = (
    <>
      <h1>Console</h1>
      <br />
      <p style={{ fontSize: "20px" }}>
        The central dashboard for your Zerodha account. Gain insights into your
        trades and investments with in-depth reports and visualisations.
      </p>
      <a href="/kite" className="text-primary text-decoration-none ">
        Learn more <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </>
  );

  const img3 = "coin.png";
  const text3 = (
    <>
      <h1>Coin</h1>
      <br />
      <p style={{ fontSize: "20px" }}>
        Buy direct mutual funds online, commission-free, delivered directly to
        your Demat account. Enjoy the investment experience on your Android and
        iOS devices.
      </p>
      <a href="/kite" className="text-primary text-decoration-none ">
        Coin <i className="fa-solid fa-arrow-right-long"></i>
      </a>
      <br />
      <br />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="appstoreBadge.svg"
        alt="appstore"
      />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="googlePlayBadge.svg"
        alt="playstore"
      />
    </>
  );

  const img4 = "kiteconnect.png";
  const text4 = (
    <>
      <h1>Kite Connect API</h1>
      <br />
      <p style={{ fontSize: "20px" }}>
        Build powerful trading platforms and experiences with our super simple
        HTTP/JSON APIs. If you are a startup, build your investment app and
        showcase it to our clientbase.
      </p>
      <a href="/kite" className="text-primary text-decoration-none ">
        Kite Connect <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </>
  );

  const img5 = "varsity.png";
  const text5 = (
    <>
      <h1>Varsity mobile</h1>
      <br />
      <p style={{ fontSize: "20px" }}>
        An easy to grasp, collection of stock market lessons with in-depth
        coverage and illustrations. Content is broken down into bite-size cards
        to help you learn on the go.
      </p>
      <br />
      <br />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="appstoreBadge.svg"
        alt="appstore"
      />
      <img
        style={{ width: "150px", marginLeft: "20px" }}
        src="googlePlayBadge.svg"
        alt="playstore"
      />
    </>
  );

  return (
    <>
      <Hero />
      <LeftSection img={img1} text={text1} />

      <RightSection text={text2} img={img2} />
      <LeftSection img={img3} text={text3} />
      <RightSection text={text4} img={img4} />
      <LeftSection img={img5} text={text5} />
      <Universe />
    </>
  );
}
export default Product;
