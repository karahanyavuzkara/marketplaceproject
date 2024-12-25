import React from 'react';
import type { RealEstate } from '../types';

const realEstates: RealEstate[] = [
  {
    id: '1',
    title: 'Modern Apartment with Sea View',
    price: 2500000,
    location: 'Istanbul, Turkey',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    size: 120,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Apartment',
    furnished: true
  },
  {
    id: '2',
    title: 'Luxury Villa with Pool',
    price: 5800000,
    location: 'Antalya, Turkey',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-09',
    size: 250,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'Villa',
    furnished: true
  },
  {
    id: '3',
    title: 'City Center Studio',
    price: 950000,
    location: 'Izmir, Turkey',
    category: 'Real Estate',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    size: 45,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'Apartment',
    furnished: false
  }
];

export default function RealEstateList() {
  return (
    <div className="space-y-4">
      {realEstates.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-48 h-48 object-cover rounded-l-lg"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{property.title}</h3>
                <p className="text-xl font-bold text-blue-600">₺{property.price.toLocaleString()}</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                <div>Size: {property.size}m²</div>
                <div>Type: {property.propertyType}</div>
                <div>Bedrooms: {property.bedrooms}</div>
                <div>Bathrooms: {property.bathrooms}</div>
                <div>Furnished: {property.furnished ? 'Yes' : 'No'}</div>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{property.location}</span>
                <span>{property.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}