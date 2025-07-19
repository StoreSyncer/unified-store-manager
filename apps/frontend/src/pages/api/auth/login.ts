import type { NextApiRequest, NextApiResponse } from 'next';

const mockUser = {
  id: '1',
  email: 'admin@demo.com',
  password: 'password123', // In production, use hashed passwords!
  name: 'Admin User',
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    // In production, generate a secure session token (JWT, etc.)
    res.status(200).json({
      token: 'mock-session-token',
      user: { id: mockUser.id, email: mockUser.email, name: mockUser.name },
    });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
} 