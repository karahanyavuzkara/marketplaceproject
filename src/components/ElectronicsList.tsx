import React from 'react';
import type { Electronic } from '../types';

const electronics: Electronic[] = [
  {
    id: '1',
    title: 'MacBook Pro M2 Pro 16"',
    price: 82999,
    location: 'Istanbul, Turkey',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    brand: 'Apple',
    condition: 'New',
    warranty: '2 Years',
    model: 'MacBook Pro 2023'
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra',
    price: 64999,
    location: 'Ankara, Turkey',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-09',
    brand: 'Samsung',
    condition: 'New',
    warranty: '2 Years',
    model: 'S24 Ultra'
  },
  {
    id: '3',
    title: 'Sony PlayStation 5',
    price: 29999,
    location: 'Izmir, Turkey',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    brand: 'Sony',
    condition: 'New',
    warranty: '1 Year',
    model: 'PS5 Digital Edition'
  }
];

export default function ElectronicsList() {
  return (
    <div className="space-y-4">
      {electronics.map((electronic) => (
        <div key={electronic.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex">
            <img
              src={electronic.imageUrl}
              alt={electronic.title}
              className="w-48 h-48 object-cover rounded-l-lg"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{electronic.title}</h3>
                <p className="text-xl font-bold text-blue-600">₺{electronic.price.toLocaleString()}</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                <div>Brand: {electronic.brand}</div>
                <div>Model: {electronic.model}</div>
                <div>Condition: {electronic.condition}</div>
                <div>Warranty: {electronic.warranty}</div>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{electronic.location}</span>
                <span>{electronic.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}