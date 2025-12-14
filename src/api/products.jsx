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