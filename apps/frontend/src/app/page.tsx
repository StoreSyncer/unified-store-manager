'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Stats {
  stores: number;
  products: number;
  orders: number;
}

export default function Home() {
  const [stats, setStats] = useState<Stats>({ stores: 0, products: 0, orders: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [storesRes, productsRes, ordersRes] = await Promise.all([
          fetch('/api/stores'),
          fetch('/api/products'),
          fetch('/api/orders'),
        ]);
        const [storesData, productsData, ordersData] = await Promise.all([
          storesRes.json(),
          productsRes.json(),
          ordersRes.json(),
        ]);
        setStats({
          stores: storesData.length,
          products: productsData.length,
          orders: ordersData.length,
        });
      } catch (error) {
        console.error('Failed to fetch stats', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-1">Welcome to Unified Store Manager!</h1>
          <p className="text-blue-700">Manage all your stores, products, and orders from one dashboard.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/stores" className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">
            Add Store
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">{loading ? '...' : stats.stores}</div>
          <div className="text-gray-600 mt-2">Stores Connected</div>
        </div>
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-green-600">{loading ? '...' : stats.products}</div>
          <div className="text-gray-600 mt-2">Products Synced</div>
        </div>
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-purple-600">{loading ? '...' : stats.orders}</div>
          <div className="text-gray-600 mt-2">Orders Managed</div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="text-gray-500 text-sm space-y-2">
            <li>No recent activity yet.</li>
          </ul>
        </div>
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-2">
            <li><Link href="/stores/add" className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">+ Add a new store</Link></li>
            <li><Link href="/products" className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">Sync all products</Link></li>
            <li><Link href="/orders" className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">View all orders</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
