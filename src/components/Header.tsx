import React from 'react';
import { Search, PlusCircle, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              marketplace
            </Link>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <PlusCircle className="h-5 w-5" />
              <span>Post Ad</span>
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}