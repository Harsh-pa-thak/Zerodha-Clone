import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isLoggedIn, loading, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <style>
        {`
          .custom-navbar {
            height: 80px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          }

          .custom-nav-link {
            font-size: 15px;
            margin-left: 24px;
            color: #555555 !important;
            font-weight: 400;
          }

          .custom-nav-link:hover {
            color: #387ed1 !important;
          }

          .custom-logo {
            width: 170px;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          .nav-btn-login {
            display: inline-block;
            margin-left: 24px;
            padding: 8px 20px;
            border: 1.5px solid #387ed1;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            color: #387ed1 !important;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .nav-btn-login:hover {
            background: #387ed1;
            color: #fff !important;
          }

          .nav-btn-signup {
            display: inline-block;
            margin-left: 10px;
            padding: 8px 20px;
            background: #387ed1;
            border: 1.5px solid #387ed1;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            color: #fff !important;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .nav-btn-signup:hover {
            background: #1a5fb4;
            border-color: #1a5fb4;
          }

          .nav-user-info {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 24px;
          }

          .nav-avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: linear-gradient(135deg, #387ed1, #1a5fb4);
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .nav-username {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }

          .nav-btn-logout {
            background: none;
            border: none;
            font-size: 14px;
            font-weight: 500;
            color: #e74c3c;
            cursor: pointer;
            padding: 0;
            margin-left: 4px;
            font-family: inherit;
          }

          .nav-btn-logout:hover {
            text-decoration: underline;
          }

          .nav-dashboard-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-left: 24px;
            padding: 8px 18px;
            background: #1a5fb4;
            color: #fff !important;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
          }

          .nav-dashboard-link:hover {
            background: #0d3d7a;
          }

          @media (max-width: 991px) {
            .custom-navbar { height: auto; padding: 15px 0; }
            .custom-nav-link { margin-left: 0; padding: 8px 0; }
            .nav-btn-login, .nav-btn-signup { margin-left: 0; margin-top: 8px; display: block; text-align: center; }
            .nav-user-info { margin-left: 0; margin-top: 8px; }
            .nav-dashboard-link { margin-left: 0; margin-top: 8px; display: inline-flex; }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src="/logo.svg" alt="Zerodha logo" className="custom-logo" />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-link" to="/support">Support</Link>
              </li>

              {!loading && (
                isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <a
                        href="http://localhost:5173"
                        className="nav-dashboard-link"
                      >
                        Kite Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="nav-user-info">
                        <div className="nav-avatar">
                          {user?.name?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <span className="nav-username">{user?.name?.split(' ')[0]}</span>
                        <button
                          id="navbar-logout-btn"
                          className="nav-btn-logout"
                          onClick={handleLogout}
                        >
                          Log out
                        </button>
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-btn-login" to="/login" id="navbar-login-btn">Log in</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-btn-signup" to="/signup" id="navbar-signup-btn">Sign up</Link>
                    </li>
                  </>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;