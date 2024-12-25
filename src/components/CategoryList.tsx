import React from 'react';
import { Car, Home, Laptop, Briefcase, ShoppingBag, Bike } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Category } from '../types';

const categories: Category[] = [
  { id: '1', name: 'Vehicles', icon: 'Car', count: 234567, path: '/vehicles' },
  { id: '2', name: 'Real Estate', icon: 'Home', count: 123456, path: '/real-estate' },
  { id: '3', name: 'Electronics', icon: 'Laptop', count: 78901, path: '/electronics' },
  { id: '4', name: 'Jobs', icon: 'Briefcase', count: 45678, path: '/jobs' },
  { id: '5', name: 'Shopping', icon: 'ShoppingBag', count: 89012, path: '/shopping' },
  { id: '6', name: 'Sports', icon: 'Bike', count: 34567, path: '/sports' },
];

const iconMap: Record<string, React.ElementType> = {
  Car, Home, Laptop, Briefcase, ShoppingBag, Bike
};

export default function CategoryList() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {categories.map((category) => {
        const Icon = iconMap[category.icon];
        return (
          <div
            key={category.id}
            onClick={() => navigate(category.path)}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <Icon className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
            <span className="text-xs text-gray-500">{category.count.toLocaleString()} listings</span>
          </div>
        );
      })}
    </div>
  );
}