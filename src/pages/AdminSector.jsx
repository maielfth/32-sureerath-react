import React from 'react';

const UserSector = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Generation Thailand Home - User Sector</h1>
      <div className="flex space-x-4 mb-8">
        <a href="/user-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">User Home Sector</a>
        <a href="/admin-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">Admin Home Sector</a>
      </div>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Position</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default UserSector;
