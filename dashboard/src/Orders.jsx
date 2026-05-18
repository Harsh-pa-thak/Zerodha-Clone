import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGet, apiPut, apiDelete } from "./api";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [editQty, setEditQty] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const isEditOpen = useMemo(() => Boolean(editingOrder?._id), [editingOrder]);

  useEffect(() => {
    apiGet("/allOrders").then((data)=>{
        if (data) setOrders(data);
    });
  }, []);

  const openEdit = (order) => {
    setEditingOrder(order);
    setEditQty(String(order.qty ?? ""));
    setEditPrice(String(order.price ?? ""));
  };

  const closeEdit = () => {
    setEditingOrder(null);
    setEditQty("");
    setEditPrice("");
  };

  const saveEdit = async () => {
    if (!editingOrder?._id) return;
    const qtyNum = Number(editQty);
    const priceNum = Number(editPrice);
    if (!Number.isFinite(qtyNum) || qtyNum <= 0) return;
    if (!Number.isFinite(priceNum) || priceNum <= 0) return;

    try {
      const updated = await apiPut(`/orders/${editingOrder._id}`, {
        qty: qtyNum,
        price: priceNum,
      });

      if (updated) {
        setOrders((prev) => prev.map((o) => (o._id === updated._id ? updated : o)));
        closeEdit();
      }
    } catch (err) {
      console.error("Update order failed", err);
    }
  };

  const cancelOrder = async (order) => {
    if (!order?._id) return;
    const ok = window.confirm(`Cancel order for ${order.name}?`);
    if (!ok) return;

    try {
      await apiDelete(`/orders/${order._id}`);
      setOrders((prev) => prev.filter((o) => o._id !== order._id));
    } catch (err) {
      console.error("Cancel order failed", err);
    }
  };

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
              <th>Actions</th>
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
                <td>
                  <Button size="small" onClick={() => openEdit(order)}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => cancelOrder(order)}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={isEditOpen} onClose={closeEdit} fullWidth maxWidth="xs">
        <DialogTitle>Edit Order {editingOrder?.name}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Quantity"
            type="number"
            inputProps={{ min: 1, step: 1 }}
            value={editQty}
            onChange={(e) => setEditQty(e.target.value)}
            required
          />
          <TextField
            label="Price"
            type="number"
            inputProps={{ min: 0, step: 0.05 }}
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEdit}>Close</Button>
          <Button variant="contained" onClick={saveEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Orders;
