import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetSlidersProducts = () => {
  return useQuery({
    queryKey: ['sliders-products'],
    queryFn: async () => {
      const res = await axios.get('products-sliders');
      return res.data;
    },
  });
};


export const useGetProductsByLimit = (limit = 10) => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: async () => {
      const res = await axios.get(`products-all/${limit}`);
      return res.data.data;
    },
  });
};

export const useGetProductsByCategory = (categoryName) => {
  return useQuery({
    queryKey: ['products', categoryName],
    queryFn: async () => {
      const res = await axios.get(`products-category/${categoryName}`);
      return res.data.data;
    },
    enabled: !!categoryName,
  });
};


export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ['products', 'all'],
    queryFn: async () => {
      const res = await axios.get('products');
      return res.data.data;
    },
  });
};