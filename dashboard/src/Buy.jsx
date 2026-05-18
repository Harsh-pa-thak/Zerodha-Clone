import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from "@mui/material";
import { useGeneralContext } from "./GeneralContext";

const API_BASE_URL = "http://localhost:8080";

const Buy = () => {
    const {
        isBuyOpen,
        selectedStock,
        closeBuyWindow,
    } = useGeneralContext();

    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        if (!isBuyOpen) return;
        setQuantity("");
        setPrice("");
    }, [isBuyOpen, selectedStock]);

    const quantityNum = Number(quantity);
    const priceNum = Number(price);

    const margin = useMemo(() => {
        if (!Number.isFinite(quantityNum) || !Number.isFinite(priceNum)) return 0;
        if (quantityNum <= 0 || priceNum <= 0) return 0;
        return quantityNum * priceNum;
    }, [quantityNum, priceNum]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!selectedStock) return;
        if (!Number.isFinite(quantityNum) || quantityNum <= 0) return;
        if (!Number.isFinite(priceNum) || priceNum <= 0) return;

        try {
            await axios.post(`${API_BASE_URL}/addOrder`, {
                name: selectedStock,
                qty: quantityNum,
                price: priceNum,
                mode: "BUY",
            });
            closeBuyWindow();
        } catch (err) {
            console.error("Buy order failed", err);
        }
    };

    return (
        <Dialog
            open={isBuyOpen}
            onClose={closeBuyWindow}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle>Buy {selectedStock}</DialogTitle>
            <form onSubmit={onSubmit}>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Quantity"
                        type="number"
                        inputProps={{ min: 1, step: 1 }}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <TextField
                        label="Price"
                        type="number"
                        inputProps={{ min: 0, step: 0.05 }}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <Typography variant="body2" color="text.secondary">
                        Margin required: <strong>₹ {margin.toFixed(2)}</strong>
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button onClick={closeBuyWindow}>Cancel</Button>
                    <Button type="submit" variant="contained">
                        Confirm Buy
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default Buy;
