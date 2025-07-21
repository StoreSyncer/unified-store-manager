import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const mockUser = {
  id: '1',
  email: 'admin@demo.com',
  password: 'password123',
  name: 'Admin User',
};

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign(
      { userId: mockUser.id, email: mockUser.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.setHeader(
      'Set-Cookie',
      serialize('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/',
      })
    );

    res.status(200).json({
      user: { id: mockUser.id, email: mockUser.email, name: mockUser.name },
    });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
} 