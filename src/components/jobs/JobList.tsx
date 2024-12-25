import React from 'react';
import type { Job } from '../../types';

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    price: 0,
    location: 'Istanbul, Turkey',
    category: 'Jobs',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-10',
    type: 'Full Time',
    experience: 'Senior Level',
    salary: {
      min: 40000,
      max: 60000
    },
    remote: true
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'Global Brands Co.',
    price: 0,
    location: 'Ankara, Turkey',
    category: 'Jobs',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-09',
    type: 'Full Time',
    experience: 'Mid Level',
    salary: {
      min: 25000,
      max: 35000
    },
    remote: false
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'Creative Studio',
    price: 0,
    location: 'Remote',
    category: 'Jobs',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    date: '2024-03-08',
    type: 'Contract',
    experience: 'Mid Level',
    salary: {
      min: 30000,
      max: 45000
    },
    remote: true
  }
];

export default function JobList() {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex p-4">
            <img
              src={job.imageUrl}
              alt={job.company}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-blue-600">
                    ₺{job.salary.min.toLocaleString()} - ₺{job.salary.max.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">{job.type}</p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  {job.experience}
                </span>
                {job.remote && (
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-sm rounded">
                    Remote
                  </span>
                )}
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>{job.location}</span>
                <span>{job.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}