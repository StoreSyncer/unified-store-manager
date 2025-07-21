import type { NextApiRequest, NextApiResponse } from 'next';

// Mock database
let team = [
  { id: '1', name: 'Admin User', email: 'admin@demo.com', role: 'Admin' },
  { id: '2', name: 'Jane Doe', email: 'jane@demo.com', role: 'Member' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, role } = req.body;
    if (!id || !role) {
      return res.status(400).json({ error: 'User ID and role are required' });
    }
    team = team.map(member => member.id === id ? { ...member, role } : member);
    res.status(200).json({ message: 'Role updated successfully' });
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 