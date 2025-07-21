import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // In a real app, you would:
  // 1. Generate a unique invite token
  // 2. Store the token with the email in your database
  // 3. Send an email with a signup link containing the token
  console.log(`Team invite sent to: ${email}`);

  res.status(200).json({ message: `Invite sent to ${email}` });
} 