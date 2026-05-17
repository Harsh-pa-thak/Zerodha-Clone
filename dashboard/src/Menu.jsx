import { NavLink } from "react-router-dom";

const Menu = () => {
  const handleProfileClick = () => {
    // Placeholder for profile actions; keeps UI clickable without backend/auth.
  };

  return (
    <div className="menu-container">
      <img className="kite-logo" src="/logo.png" alt="Kite" />
      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/holdings"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Holdings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Positions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funds"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Funds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
            >
              Apps
            </NavLink>
          </li>
        </ul>
        <hr />
        <button
          type="button"
          className="profile"
          onClick={handleProfileClick}
          aria-label="Profile"
        >
          <div className="avatar">ZU</div>
          <p className="profile-name">USERID</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;
