import React, { useState, useEffect } from "react";

interface Store {
  id: string;
  name: string;
  type: string;
  status: string;
}

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    async function fetchStores() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/stores");
        if (!res.ok) throw new Error("Failed to fetch stores");
        const data = await res.json();
        setStores(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchStores();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Connected Stores</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition"
          onClick={() => setShowAddModal(true)}
        >
          + Add Store
        </button>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="py-8 text-center text-gray-400">Loading stores...</div>
        ) : error ? (
          <div className="py-8 text-center text-red-500">{error}</div>
        ) : (
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4">Store Name</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store.id} className="border-t">
                  <td className="py-3 px-4 font-medium">{store.name}</td>
                  <td className="py-3 px-4">{store.type}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        store.status === "Connected"
                          ? "bg-green-100 text-green-700"
                          : store.status === "Error"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {store.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      className="text-red-600 hover:underline text-sm"
                      // TODO: Implement remove store
                      disabled
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {stores.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 px-4 text-center text-gray-400">
                    No stores connected yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
      {/* Add Store Modal Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Add a New Store</h2>
            <p className="text-gray-500 mb-4">Store connection flow coming soon...</p>
            <button
              className="mt-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => setShowAddModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 