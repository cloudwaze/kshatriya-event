// Types
export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo: string;
  website: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  amountPaid: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  createdAt: string;
  updatedAt: string;
}

// Mock data - In a real app, this would come from an API
const mockSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'TechCorp Industries',
    tier: 'platinum',
    logo: '/sponsors/placeholder-logo.svg',
    website: 'https://example.com',
    description: 'Leading technology solutions provider with over 20 years of industry experience.',
    contactName: 'Jane Smith',
    contactEmail: 'jane@techcorp.com',
    contactPhone: '+91 98765 43210',
    amountPaid: 50000,
    paymentStatus: 'paid',
    createdAt: '2024-02-15T10:30:00.000Z',
    updatedAt: '2024-02-15T10:30:00.000Z',
  },
  {
    id: '2',
    name: 'GlobalFinance Ltd',
    tier: 'gold',
    logo: '/sponsors/placeholder-logo.svg',
    website: 'https://example.com',
    description: 'International financial services company specializing in investment management.',
    contactName: 'Rahul Sharma',
    contactEmail: 'rahul@globalfinance.com',
    contactPhone: '+91 87654 32109',
    amountPaid: 15000,
    paymentStatus: 'partial',
    createdAt: '2024-02-18T14:45:00.000Z',
    updatedAt: '2024-02-20T09:15:00.000Z',
  },
  {
    id: '3',
    name: 'Innovate Solutions',
    tier: 'silver',
    logo: '/sponsors/placeholder-logo.svg',
    website: 'https://example.com',
    description: 'Software development and consulting firm focused on cutting-edge technologies.',
    contactName: 'Priya Patel',
    contactEmail: 'priya@innovatesolutions.com',
    contactPhone: '+91 76543 21098',
    amountPaid: 10000,
    paymentStatus: 'paid',
    createdAt: '2024-02-20T11:20:00.000Z',
    updatedAt: '2024-02-20T11:20:00.000Z',
  },
  {
    id: '4',
    name: 'EcoFriendly Products',
    tier: 'bronze',
    logo: '/sponsors/placeholder-logo.svg',
    website: 'https://example.com',
    description: 'Manufacturer of sustainable and environmentally conscious consumer goods.',
    contactName: 'Amit Kumar',
    contactEmail: 'amit@ecofriendly.com',
    contactPhone: '+91 65432 10987',
    amountPaid: 2500,
    paymentStatus: 'pending',
    createdAt: '2024-03-01T13:10:00.000Z',
    updatedAt: '2024-03-01T13:10:00.000Z',
  },
];

// Placeholder for localStorage key
const STORAGE_KEY = 'kshatriya-event-sponsors';

// Helper to initialize sponsors in localStorage
const initializeSponsors = () => {
  if (typeof window === 'undefined') return;
  
  // If no sponsors exist in localStorage, set the mock data
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockSponsors));
  }
};

// Helper to get sponsors from localStorage
const getLocalSponsors = (): Sponsor[] => {
  if (typeof window === 'undefined') return [];
  
  initializeSponsors();
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Helper to save sponsors to localStorage
const saveLocalSponsors = (sponsors: Sponsor[]) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sponsors));
};

// API Functions (placeholders for actual API calls)

// Get all sponsors
export const getSponsors = async (): Promise<Sponsor[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would be a fetch call to an API
  return getLocalSponsors();
};

// Get a single sponsor by ID
export const getSponsorById = async (id: string): Promise<Sponsor | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // In a real app, this would be a fetch call to an API
  const sponsors = getLocalSponsors();
  return sponsors.find(sponsor => sponsor.id === id) || null;
};

// Create a new sponsor
export const createSponsor = async (sponsorData: Omit<Sponsor, 'id' | 'createdAt' | 'updatedAt'>): Promise<Sponsor> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would be a POST request to an API
  const sponsors = getLocalSponsors();
  
  const newSponsor: Sponsor = {
    ...sponsorData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  sponsors.push(newSponsor);
  saveLocalSponsors(sponsors);
  
  return newSponsor;
};

// Update an existing sponsor
export const updateSponsor = async (id: string, sponsorData: Partial<Omit<Sponsor, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Sponsor | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would be a PUT/PATCH request to an API
  const sponsors = getLocalSponsors();
  const index = sponsors.findIndex(sponsor => sponsor.id === id);
  
  if (index === -1) return null;
  
  const updatedSponsor: Sponsor = {
    ...sponsors[index],
    ...sponsorData,
    updatedAt: new Date().toISOString(),
  };
  
  sponsors[index] = updatedSponsor;
  saveLocalSponsors(sponsors);
  
  return updatedSponsor;
};

// Delete a sponsor
export const deleteSponsor = async (id: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // In a real app, this would be a DELETE request to an API
  const sponsors = getLocalSponsors();
  const index = sponsors.findIndex(sponsor => sponsor.id === id);
  
  if (index === -1) return false;
  
  sponsors.splice(index, 1);
  saveLocalSponsors(sponsors);
  
  return true;
};

// Initialize sponsors data on module import (client-side only)
if (typeof window !== 'undefined') {
  initializeSponsors();
} 