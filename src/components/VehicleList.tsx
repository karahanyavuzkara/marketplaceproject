import React from 'react';
import type { Vehicle } from '../types';

const vehicles: Vehicle[] = [
  {
    id: '1',
    title: '2020 BMW 3 Series 320i',
    price: 450000,
    location: 'Istanbul, Turkey',
    category: 'Vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    year: 2020,
    mileage: 45000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Black'
  },
  {
    id: '2',
    title: '2019 Mercedes-Benz C200',
    price: 520000,
    location: 'Ankara, Turkey',
    category: 'Vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-09',
    year: 2019,
    mileage: 62000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'White'
  },
  {
    id: '3',
    title: '2021 Volkswagen Golf',
    price: 380000,
    location: 'Izmir, Turkey',
    category: 'Vehicles',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    year: 2021,
    mileage: 28000,
    fuelType: 'Diesel',
    transmission: 'Manual',
    color: 'Blue'
  }
];

export default function VehicleList() {
  return (
    <div className="space-y-4">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.title}
              className="w-48 h-48 object-cover rounded-l-lg"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{vehicle.title}</h3>
                <p className="text-xl font-bold text-blue-600">₺{vehicle.price.toLocaleString()}</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                <div>Year: {vehicle.year}</div>
                <div>Mileage: {vehicle.mileage.toLocaleString()} km</div>
                <div>Fuel: {vehicle.fuelType}</div>
                <div>Transmission: {vehicle.transmission}</div>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{vehicle.location}</span>
                <span>{vehicle.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}