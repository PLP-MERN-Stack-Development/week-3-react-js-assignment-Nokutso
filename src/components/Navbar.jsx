import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">PLP Task Manager</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Tasks</a>
          <a href="#" className="hover:underline">About</a>
        </div>
      </div>
    </nav>
  );
}