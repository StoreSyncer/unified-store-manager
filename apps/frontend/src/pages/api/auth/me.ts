import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key';
const mockUser = {
  id: '1',
  email: 'admin@demo.com',
  name: 'Admin User',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { authToken } = req.cookies;
  if (!authToken) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(authToken, JWT_SECRET);
    // In a real app, you would fetch the user from the database
    res.status(200).json({ user: mockUser });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
} 