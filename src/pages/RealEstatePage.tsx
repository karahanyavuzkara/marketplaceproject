import React from 'react';
import Header from '../components/Header';
import RealEstateFilters from '../components/RealEstateFilters';
import RealEstateList from '../components/RealEstateList';

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-64">
            <RealEstateFilters />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Real Estate</h1>
            <RealEstateList />
          </div>
        </div>
      </main>
    </>
  );
}