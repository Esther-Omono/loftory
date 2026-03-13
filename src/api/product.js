import { toast } from 'sonner';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (page = 1, perPage = 12) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?_page=${page}&_per_page=${perPage}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const result = await response.json();

    const productsArray = Array.isArray(result.data) ? result.data : [];
    const totalItems = result.items || productsArray.length;

    return { data: productsArray, total: totalItems };
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Could not load products. Please try again.');
    return { data: [], total: 0 };
  }
};
