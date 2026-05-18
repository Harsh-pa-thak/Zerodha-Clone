import React from "react";
import { holdings } from "./data/data.js";

const Holdings = () => {
  const format2 = (value) =>
    value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const totalCurrentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPct =
    totalInvestment === 0 ? 0 : (totalPnL / totalInvestment) * 100;

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.length === 0 ? (
              <tr>
                <td className="muted" colSpan={8}>
                  You don't have any holdings
                </td>
              </tr>
            ) : (
              holdings.map((stock) => {
                const curVal = stock.price * stock.qty;
                const investment = stock.avg * stock.qty;
                const pnl = curVal - investment;

                const pnlClass = pnl >= 0 ? "chg pos" : "chg neg";
                const netClass = stock.net?.startsWith("-")
                  ? "chg neg"
                  : "chg pos";
                const dayClass = stock.day?.startsWith("-")
                  ? "chg neg"
                  : "chg pos";

                return (
                  <tr key={stock.name}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{format2(curVal)}</td>
                    <td className={pnlClass}>{format2(pnl)}</td>
                    <td className={netClass}>{stock.net}</td>
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
          <h5>{format2(totalInvestment)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{format2(totalCurrentValue)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "chg pos" : "chg neg"}>
            {format2(totalPnL)} ({totalPnLPct >= 0 ? "+" : ""}
            {totalPnLPct.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
