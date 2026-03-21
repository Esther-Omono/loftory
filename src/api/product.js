import { toast } from 'sonner';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (page = 1, perPage = 12, filters = {}) => {
  try {
    let query = `?_page=${page}&_per_page=${perPage}`;
    let conditions = [];

    // Price Filter
    if (filters.price) {
      query += `&price_gte=${filters.price[0]}&price_lte=${filters.price[1]}`;
    }

    // Category Filter
    if (filters.category && filters.category.length > 0) {
      const orConditions = filters.category.map((cat) => ({
        category: { eq: cat },
      }));

      query += `&_where=${encodeURIComponent(
        JSON.stringify({ or: orConditions }),
      )}`;
    }

    // Availability Filter
    if (filters.inStock !== null) {
      conditions.push({
        inStock: { eq: filters.inStock },
      });
    }

    const response = await fetch(`${BASE_URL}/products${query}`);

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
