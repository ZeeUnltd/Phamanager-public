import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from '../api/axios';

interface Product {
  id: string;
  name: string;
  // Add other product properties here, for example:
  price?: number;
  description?: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await Axios.get<Product[]>('/manager/inventory');
  return response.data;
};

const ProductList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000, // Data becomes stale after 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      {data?.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
