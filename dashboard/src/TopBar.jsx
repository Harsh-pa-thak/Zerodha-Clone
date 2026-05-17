import Menu from "./Menu";

const TopBar = () => {
  const indices = [
    { name: "NIFTY 50", points: 20100.2, chg: 0.42 },
    { name: "SENSEX", points: 70100.2, chg: -0.12 },
  ];

  return (
    <div className="topbar-container">
      <div className="indices-container">
        {indices.map((idx) => (
          <div key={idx.name} className="index-item">
            <div className="index-name">{idx.name}</div>
            <div className="index-row">
              <div className="index-points">{idx.points.toFixed(1)}</div>
              <div className={idx.chg >= 0 ? "index-chg pos" : "index-chg neg"}>
                {idx.chg >= 0 ? "+" : ""}
                {idx.chg.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
