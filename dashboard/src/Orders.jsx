import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res)=>{
        setOrders(res.data);
    });
  }, []);

  if (!orders?.length) {
    return (
      <div className="orders">
        <div className="no-orders">
          <h3 className="title">Orders</h3>
          <p>No orders yet.</p>
          <Link className="btn" to="/">
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id ?? `${order.name}-${order.qty}-${order.price}-${order.mode}`}
              >
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>
                  {typeof order.price === "number"
                    ? order.price.toFixed(2)
                    : order.price}
                </td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
