import React from 'react';

export default function JobFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium text-lg mb-4">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Any</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Any</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
            <option value="executive">Executive</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="remote"
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="remote" className="ml-2 text-sm text-gray-700">
            Remote Only
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
}