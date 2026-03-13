import { toast } from 'sonner';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Could not load products. Please try again.');
    return null;
  }
};
