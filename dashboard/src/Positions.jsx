import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
const Positions = () => {
  let [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  const totalPnL = allPositions.reduce((sum, stock) => {
    const curVal = stock.price * stock.qty;
    const inv = stock.avg * stock.qty;
    return sum + (curVal - inv);
  }, 0);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.length === 0 ? (
              <tr>
                <td className="muted" colSpan={7}>
                  You don't have any open positions
                </td>
              </tr>
            ) : (
              allPositions.map((stock, index) => {
                const curVal = stock.price * stock.qty;
                const investment = stock.avg * stock.qty;
                const pnl = curVal - investment;

                const pnlClass = pnl >= 0 ? "chg pos" : "chg neg";
                const dayClass = stock.day?.startsWith("-")
                  ? "chg neg"
                  : "chg pos";

                return (
                  <tr key={index}>
                    <td>{stock.product}</td>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={pnlClass}>{pnl.toFixed(2)}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5 className={totalPnL >= 0 ? "chg pos" : "chg neg"}>
            {totalPnL.toFixed(2)}
          </h5>
          <p>Total P&L</p>
        </div>
      </div>
    </>
  );
};

export default Positions;
