import express from 'express';
import jwt from 'jsonwebtoken';
import { createRequire } from 'module';
import userModel from '../Models/userModel.js';
import { verifyToken } from '../middleware/verifyToken.js';

const require = createRequire(import.meta.url);
const passport = require('passport');

const router = express.Router();

const COOKIE_OPTIONS = {
  httpOnly: false,
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

function signToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    }

    const user = new userModel({ name, email });
    const registered = await userModel.register(user, password);
    const token = signToken(registered);

    res.cookie('zd_token', token, COOKIE_OPTIONS);

    res.status(201).json({
      message: 'Account created successfully.',
      token,
      user: { id: registered._id, name: registered.name, email: registered.email },
    });
  } catch (err) {
    if (err.name === 'UserExistsError') {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info?.message || 'Invalid credentials.' });
    }

    const token = signToken(user);

    res.cookie('zd_token', token, COOKIE_OPTIONS);

    res.json({
      message: 'Logged in successfully.',
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  })(req, res, next);
});

router.get('/me', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

router.post('/logout', (_req, res) => {
  res.clearCookie('zd_token');
  res.json({ message: 'Logged out successfully.' });
});

export default router;
