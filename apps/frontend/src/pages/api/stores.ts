import type { NextApiRequest, NextApiResponse } from 'next';

let stores = [
  {
    id: '1',
    name: 'My Shopify Store',
    type: 'Shopify',
    status: 'Connected',
  },
  {
    id: '2',
    name: 'My WooCommerce Shop',
    type: 'WooCommerce',
    status: 'Error',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(stores);
  } else if (req.method === 'POST') {
    const { name, type } = req.body;
    if (!name || !type) {
      return res.status(400).json({ error: 'Name and type are required' });
    }
    const newStore = {
      id: Date.now().toString(),
      name,
      type,
      status: 'Connected',
    };
    stores.push(newStore);
    res.status(201).json(stores);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Store id is required' });
    }
    stores = stores.filter((store) => store.id !== id);
    res.status(200).json(stores);
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
