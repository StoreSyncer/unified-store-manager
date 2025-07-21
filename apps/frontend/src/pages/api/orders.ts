import type { NextApiRequest, NextApiResponse } from 'next';

// This would trigger the connector events in a real app
const mockOrders = [
  { id: '101', customer: 'John Doe', store: 'My Shopify Store', total: '$129.99', status: 'Fulfilled' },
  { id: '102', customer: 'Jane Smith', store: 'My WooCommerce Shop', total: '$79.99', status: 'Processing' },
  { id: '103', customer: 'Sam Wilson', store: 'My Wix Store', total: '$49.99', status: 'Fulfilled' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(mockOrders);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 