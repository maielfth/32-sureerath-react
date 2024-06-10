import React from 'react';

const AdminSector = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Generation Thailand Home - Admin Sector</h1>
      <div className="flex space-x-4 mb-8">
        <a href="/user-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">User Home Sector</a>
        <a href="/admin-sector" className="bg-white py-2 px-4 rounded shadow hover:bg-gray-100">Admin Home Sector</a>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Create User Here</h2>
        <form className="flex space-x-4">
          <input type="text" placeholder="Name" className="border px-4 py-2 rounded"/>
          <input type="text" placeholder="Last Name" className="border px-4 py-2 rounded"/>
          <input type="text" placeholder="Position" className="border px-4 py-2 rounded"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </form>
      </div>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default AdminSector;

