import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .auth-page {
    min-height: 100vh;
    display: flex;
    font-family: 'Inter', sans-serif;
    background: #f8f9fa;
  }

  .auth-left {
    flex: 1;
    background: linear-gradient(135deg, #387ed1 0%, #1a5fb4 60%, #0d3d7a 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 48px;
    position: relative;
    overflow: hidden;
  }

  .auth-left::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    top: -150px;
    right: -150px;
  }

  .auth-left::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    bottom: -80px;
    left: -80px;
  }

  .auth-left-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: #fff;
  }

  .auth-left-logo {
    width: 180px;
    margin-bottom: 48px;
    filter: brightness(0) invert(1);
  }

  .auth-tagline {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
  }

  .auth-subtext {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.8;
    line-height: 1.6;
    max-width: 340px;
  }

  .auth-stats {
    display: flex;
    gap: 40px;
    margin-top: 56px;
  }

  .auth-stat {
    text-align: center;
  }

  .auth-stat-num {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .auth-stat-label {
    font-size: 0.78rem;
    opacity: 0.7;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .auth-right {
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 52px;
    background: #fff;
    box-shadow: -4px 0 30px rgba(0,0,0,0.06);
  }

  .auth-form-header {
    margin-bottom: 36px;
  }

  .auth-form-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
  }

  .auth-form-subtitle {
    font-size: 0.9rem;
    color: #6c757d;
    line-height: 1.5;
  }

  .auth-tabs {
    display: flex;
    background: #f0f4f9;
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 32px;
  }

  .auth-tab {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #6c757d;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Inter', sans-serif;
  }

  .auth-tab.active {
    background: #fff;
    color: #387ed1;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-label {
    display: block;
    font-size: 0.82rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.95rem;
    font-family: 'Inter', sans-serif;
    color: #1a1a2e;
    background: #fafafa;
    transition: all 0.2s ease;
    box-sizing: border-box;
    outline: none;
  }

  .form-input:focus {
    border-color: #387ed1;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(56,126,209,0.12);
  }

  .alert-error {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.88rem;
    margin-bottom: 20px;
  }

  .alert-success {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #16a34a;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.88rem;
    margin-bottom: 20px;
  }

  .btn-submit {
    width: 100%;
    padding: 13px;
    background: linear-gradient(135deg, #387ed1, #1a5fb4);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 0.97rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.3px;
    margin-top: 8px;
  }

  .btn-submit:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(56,126,209,0.4);
  }

  .btn-submit:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  .btn-submit .spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    vertical-align: middle;
    margin-right: 8px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .terms {
    font-size: 0.78rem;
    color: #9ca3af;
    text-align: center;
    margin-top: 20px;
    line-height: 1.6;
  }

  .terms a {
    color: #387ed1;
    text-decoration: none;
  }

  .terms a:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    .auth-left { display: none; }
    .auth-right { width: 100%; padding: 40px 28px; }
  }
`;

export default function AuthPage() {
  const { register, login } = useAuth();

  const [mode, setMode] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState('');

  const switchMode = (m) => {
    setMode(m);
    setApiError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setSuccess('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!name.trim()) {
          setApiError('Name is required.');
          setLoading(false);
          return;
        }
        await register({ name: name.trim(), email: email.trim(), password });
        setSuccess('Account created! Redirecting to dashboard...');
      } else {
        await login({ email: email.trim(), password });
        setSuccess('Login successful! Redirecting to dashboard...');
      }

      setTimeout(() => {
        window.location.href = 'http://localhost:5173';
      }, 1200);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="auth-page">
        <div className="auth-left">
          <div className="auth-left-content">
            <img src="/logo.svg" alt="Zerodha" className="auth-left-logo" />
            <p className="auth-tagline">India&apos;s largest<br />stock broker</p>
            <p className="auth-subtext">
              Trade smarter with zero brokerage on equity delivery.
              Trusted by over 1 crore investors.
            </p>
            <div className="auth-stats">
              <div className="auth-stat">
                <div className="auth-stat-num">1Cr+</div>
                <div className="auth-stat-label">Clients</div>
              </div>
              <div className="auth-stat">
                <div className="auth-stat-num">Rs 0</div>
                <div className="auth-stat-label">Delivery Brokerage</div>
              </div>
              <div className="auth-stat">
                <div className="auth-stat-num">15+</div>
                <div className="auth-stat-label">Years</div>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-header">
            <h1 className="auth-form-title">
              {mode === 'signup' ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="auth-form-subtitle">
              {mode === 'signup'
                ? 'Start your investment journey with Zerodha today.'
                : 'Log in to access your Kite dashboard.'}
            </p>
          </div>

          <div className="auth-tabs" role="tablist">
            <button
              className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => switchMode('signup')}
              role="tab"
              aria-selected={mode === 'signup'}
            >
              Sign Up
            </button>
            <button
              className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => switchMode('login')}
              role="tab"
              aria-selected={mode === 'login'}
            >
              Log In
            </button>
          </div>

          {apiError && (
            <div className="alert-error" role="alert">
              {apiError}
            </div>
          )}
          {success && (
            <div className="alert-success" role="status">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {mode === 'signup' && (
              <div className="form-group">
                <label htmlFor="auth-name" className="form-label">Full Name</label>
                <input
                  id="auth-name"
                  type="text"
                  className="form-input"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-email" className="form-label">Email Address</label>
              <input
                id="auth-email"
                type="email"
                className="form-input"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="auth-password" className="form-label">
                Password
                {mode === 'signup' && (
                  <span style={{ fontWeight: 400, textTransform: 'none', color: '#9ca3af' }}>
                    {' '}(min 6 chars)
                  </span>
                )}
              </label>
              <input
                id="auth-password"
                type="password"
                className="form-input"
                placeholder={mode === 'signup' ? 'Create a strong password' : 'Enter your password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              />
            </div>

            <button
              id="auth-submit-btn"
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading && <span className="spinner" />}
              {loading
                ? (mode === 'signup' ? 'Creating account...' : 'Logging in...')
                : (mode === 'signup' ? 'Create Account' : 'Log In')}
            </button>
          </form>

          {mode === 'signup' && (
            <p className="terms">
              By creating an account, you agree to Zerodha&apos;s{' '}
              <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </p>
          )}
        </div>
      </div>
    </>
  );
}