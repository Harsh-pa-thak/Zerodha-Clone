import React from "react";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions (2)</h3>

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
            <tr>
              <td className="muted" colSpan={7}>
                No positions data (frontend-only)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
