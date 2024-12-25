import React from 'react';

export default function ElectronicsFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium text-lg mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Any</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="sony">Sony</option>
            <option value="lg">LG</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Any</option>
            <option value="new">New</option>
            <option value="like-new">Like New</option>
            <option value="used">Used</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Any</option>
            <option value="no-warranty">No Warranty</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
            <option value="2-years">2 Years</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
}