import type { NextApiRequest, NextApiResponse } from 'next';

// This would trigger the connector events in a real app
const mockProducts = [
  { id: '1', name: 'Shopify Product 1', store: 'My Shopify Store', price: '$29.99' },
  { id: '2', name: 'WooCommerce Product A', store: 'My WooCommerce Shop', price: '$49.99' },
  { id: '3', name: 'Wix Product X', store: 'My Wix Store', price: '$19.99' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(mockProducts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 