import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { Product } from '../types/types';

describe('ProductCard Component', () => {
  // Test data
  const validProduct: Product = {
    brandName: 'Apple',
    productLink: 'https://example.com/product',
    productTitle: 'iPhone 13 Pro',
    newPrice: '999€',
    imageUrl: 'https://example.com/iphone.jpg',
    usedPrice: '899€'
  };

  test('renders nothing when product is undefined', () => {
    render(<ProductCard product={undefined} />);
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

  test('renders nothing when product has missing required fields', () => {
    const incompleteProduct = {
      brandName: 'Apple',
      productTitle: 'iPhone 13 Pro',
      // Missing required fields
    };
    render(<ProductCard product={incompleteProduct as Product} />);
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });

  test('renders product information correctly with all fields', () => {
    render(<ProductCard product={validProduct} />);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('iPhone 13 Pro')).toBeInTheDocument();
    expect(screen.getByText('999€', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Neuf')).toBeInTheDocument();
    expect(screen.getByText('899€', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Occasion dès')).toBeInTheDocument();
    
    const image = screen.getByAltText('iPhone 13 Pro');
    expect(image).toHaveAttribute('src', 'https://example.com/iphone.jpg');
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/product');
  });

  test('renders product without used price when not provided', () => {
    const productWithoutUsedPrice = {
      ...validProduct,
      usedPrice: undefined
    };
    
    render(<ProductCard product={productWithoutUsedPrice} />);
    expect(screen.getByText('999€', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText('Occasion dès')).not.toBeInTheDocument();
  });
});