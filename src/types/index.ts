export interface Listing {
  id: string;
  title: string;
  price: number;
  location: string;
  category: string;
  imageUrl: string;
  date: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  path: string;
}

export interface Vehicle extends Listing {
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
}

export interface Electronic extends Listing {
  brand: string;
  condition: string;
  warranty: string;
  model: string;
}

export interface RealEstate extends Listing {
  size: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  furnished: boolean;
}

export interface Job extends Listing {
  company: string;
  type: string;
  experience: string;
  salary: {
    min: number;
    max: number;
  };
  remote: boolean;
}