import React from 'react';
import Header from '../components/Header';
import ElectronicsFilters from '../components/ElectronicsFilters';
import ElectronicsList from '../components/ElectronicsList';

export default function ElectronicsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-64">
            <ElectronicsFilters />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Electronics</h1>
            <ElectronicsList />
          </div>
        </div>
      </main>
    </>
  );
}