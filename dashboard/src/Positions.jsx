import React from "react";
import { positions } from "./data/data.js";


const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

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
            {positions.lenght==0 ?(
              <tr>
                <td className="muted" colSpan={8}>
                  No holdings data
                </td>
              </tr>
            ):(
              positions.map((stock,index) => {
                const curVal = stock.price * stock.qty;
                const investment = stock.avg * stock.qty;
                const pnl = curVal - investment;

                const pnlClass = pnl >= 0 ? "chg pos" : "chg neg";
                const netClass = stock.net?.startsWith("-") ? "chg neg" : "chg pos";
                const dayClass = stock.day?.startsWith("-") ? "chg neg" : "chg pos";

                return (
                  <tr key={index}>
                    <td>
                      <stock className="product">{stock.product}</stock>
                      
                    </td>
                    <td>
                      <stock className="name">{stock.name}</stock>
                    </td>
                    <td>
                      <stock className="product">{stock.qty}</stock>
                      
                    </td>
                    <td>
                      <stock className="product">{stock.avg}</stock>
                      
                    </td>
                    <td>
                      <stock className="product">{stock.price}</stock>
                      
                    </td>
                    <td>
                      <stock className={pnlClass}>{pnl.toFixed(2)}</stock>
                      
                    </td>
                     <td className={dayClass}>{stock.day}</td>
                  </tr>
                )
              })
            )
          }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
