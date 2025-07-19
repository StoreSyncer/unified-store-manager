import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Banner */}
      <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-800 mb-1">Welcome to Unified Store Manager!</h1>
          <p className="text-blue-700">Manage all your stores, products, and orders from one dashboard.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Add Store</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition">View Stores</button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-blue-600">0</div>
          <div className="text-gray-600 mt-2">Stores Connected</div>
        </div>
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-green-600">0</div>
          <div className="text-gray-600 mt-2">Products Synced</div>
        </div>
        <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <div className="text-3xl font-bold text-purple-600">0</div>
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
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">+ Add a new store</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">Sync all products</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 transition">View all orders</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
