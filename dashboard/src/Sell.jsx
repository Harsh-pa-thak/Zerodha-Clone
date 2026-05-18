import React, { useEffect, useState } from "react";
import { apiPost } from "./api";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useGeneralContext } from "./GeneralContext";


const Sell = () => {
    const {
        isSellOpen,
        selectedStock,
        closeSellWindow,
    } = useGeneralContext();

    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        if (!isSellOpen) return;
        setQuantity("");
        setPrice("");
    }, [isSellOpen, selectedStock]);

    const quantityNum = Number(quantity);
    const priceNum = Number(price);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!selectedStock) return;
        if (!Number.isFinite(quantityNum) || quantityNum <= 0) return;
        if (!Number.isFinite(priceNum) || priceNum <= 0) return;

        try {
            await apiPost("/addOrder", {
                name: selectedStock,
                qty: quantityNum,
                price: priceNum,
                mode: "SELL",
            });
            closeSellWindow();
        } catch (err) {
            console.error("Sell order failed", err);
        }
    };

    return (
        <Dialog
            open={isSellOpen}
            onClose={closeSellWindow}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle>Sell {selectedStock}</DialogTitle>
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
                </DialogContent>

                <DialogActions>
                    <Button onClick={closeSellWindow}>Cancel</Button>
                    <Button type="submit" variant="contained" color="error">
                        Confirm Sell
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default Sell;

