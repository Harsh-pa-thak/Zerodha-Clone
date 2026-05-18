import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <h3 className="title">Orders</h3>

      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn btn-blue">
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
