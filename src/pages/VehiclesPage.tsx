import React from 'react';
import Header from '../components/Header';
import VehicleFilters from '../components/VehicleFilters';
import VehicleList from '../components/VehicleList';

export default function VehiclesPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="w-64">
            <VehicleFilters />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Vehicles</h1>
            <VehicleList />
          </div>
        </div>
      </main>
    </>
  );
}