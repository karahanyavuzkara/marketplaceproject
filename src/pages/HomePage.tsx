import React from 'react';
import CategoryList from '../components/CategoryList';
import FeaturedListings from '../components/FeaturedListings';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CategoryList />
      <FeaturedListings />
    </main>
  );
}