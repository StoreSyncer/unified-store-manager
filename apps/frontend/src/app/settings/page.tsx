'use client';

import React, { useState } from 'react';

// Mock data for team members
const mockTeam = [
  { id: '1', name: 'Admin User', email: 'admin@demo.com', role: 'Admin' },
  { id: '2', name: 'Jane Doe', email: 'jane@demo.com', role: 'Member' },
];

export default function SettingsPage() {
  const [team, setTeam] = useState(mockTeam);
  const [inviteEmail, setInviteEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback('Sending invite...');
    try {
      console.log(`Inviting ${inviteEmail}`);
      setTimeout(() => {
        setFeedback(`Invite sent to ${inviteEmail}`);
        setInviteEmail('');
      }, 1000);
    } catch (err) {
      setFeedback('Failed to send invite.');
    }
  };

  const handleRoleChange = (id: string, newRole: string) => {
    setTeam(team.map(member => member.id === id ? { ...member, role: newRole } : member));
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

      {/* Invite Team Member */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Invite Team Member</h2>
        <form onSubmit={handleInvite} className="flex gap-4">
          <input
            type="email"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="Enter member's email"
            required
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Send Invite
          </button>
        </form>
        {feedback && <p className="mt-4 text-sm text-gray-600">{feedback}</p>}
      </div>

      {/* Manage Team Members */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Manage Team</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {team.map(member => (
                <tr key={member.id} className="border-t">
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.email}</td>
                  <td className="py-3 px-4">
                    <select
                      value={member.role}
                      onChange={(e) => handleRoleChange(member.id, e.target.value)}
                      className="border border-gray-300 rounded-md px-2 py-1"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Member">Member</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 