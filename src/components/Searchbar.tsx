"use client";

import React, { useState, useEffect } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { Product, products } from '../../data/product';
import Image from 'next/image';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 

  // Use debounced value to delay the search function
  const debouncedQuery = useDebounce(searchQuery, 500); 

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter products when debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        (product.categories?.some((category) =>
          category.toLowerCase().includes(debouncedQuery.toLowerCase())
        )) ||
        (product.tags?.some((tag) =>
          tag.toLowerCase().includes(debouncedQuery.toLowerCase())
        ))
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); 
    }
  }, [debouncedQuery]);

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
    <input
      type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
      value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2">
        <RiSearchLine className="text-white text-xl" />
      </div>

      {/* Search Results - Show on typing */}
        {debouncedQuery && filteredProducts.length > 0 && (
          <div className="bg-white shadow-lg p-4 absolute w-full top-12 z-10 max-h-[300px] overflow-y-auto rounded-md">
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} className="p-2 hover:bg-gray-100">
                  <a href={`/product/${product.id}`} className="flex items-center">
                    {/* Use Next.js Image component */}
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={48} // Set width of the image
                      height={48} // Set height of the image
                    className="object-cover rounded-md mr-3"
                  />
                    <span>{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default SearchBar;


