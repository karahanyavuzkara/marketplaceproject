import React from 'react';
import type { Listing } from '../types';

const featuredListings: Listing[] = [
  {
    id: '1',
    title: '2020 BMW 3 Series 320i',
    price: 450000,
    location: 'Istanbul, Turkey',
    category: 'Vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Apartment with Sea View',
    price: 2500000,
    location: 'Izmir, Turkey',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-09',
    featured: true
  },
  {
    id: '3',
    title: 'MacBook Pro M2',
    price: 45000,
    location: 'Ankara, Turkey',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    featured: true
  }
];

export default function FeaturedListings() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">{listing.title}</h3>
              <p className="text-xl font-bold text-blue-600 mb-2">
                ₺{listing.price.toLocaleString()}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{listing.location}</span>
                <span>{listing.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}