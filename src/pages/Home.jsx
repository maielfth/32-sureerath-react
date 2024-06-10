import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Generation Thailand React - Assessment</h1>
      <div className="flex space-x-4">
        <a href="/user-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">User Home Sector</a>
        <a href="/admin-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">Admin Home Sector</a>
      </div>
    </div>
  );
};

export default Home;
