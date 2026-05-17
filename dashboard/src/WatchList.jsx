const WatchList = () => {
  const items = [
    { symbol: "INFY", ltp: 1543.2, chg: 0.82 },
    { symbol: "TCS", ltp: 4021.6, chg: -0.31 },
    { symbol: "HDFCBANK", ltp: 1675.4, chg: 0.12 },
    { symbol: "RELIANCE", ltp: 2932.1, chg: -0.44 },
    { symbol: "SBIN", ltp: 842.9, chg: 1.05 },
  ];

  return (
    <aside className="watchlist-container" aria-label="Watchlist">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {items.map((item) => (
          <li key={item.symbol} className="watch-item">
            <span className="symbol">{item.symbol}</span>
            <span className="ltp">{item.ltp.toFixed(2)}</span>
            <span className={item.chg >= 0 ? "chg pos" : "chg neg"}>
              {item.chg >= 0 ? "+" : ""}
              {item.chg.toFixed(2)}%
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default WatchList;
