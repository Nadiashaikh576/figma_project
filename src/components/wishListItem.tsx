"use client";

import { useEffect, useState } from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define the type for the product object
interface Product {
  imageUrl: string;
  name: string;
  id: number;
  title: string;
  originalPrice?: number;
  price: number;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]); // Use the Product type here

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Helper function to safely format price
  const formatPrice = (price: string | number): string => {
    // Check if price is undefined or null
    if (price === undefined || price === null) {
      return "0.00"; // Return default value if price is undefined or null
    }

    const numericPrice = parseFloat(price.toString()); // Ensure it's a number

    // If price is not a valid number, return "0.00"
    if (isNaN(numericPrice)) {
      return "0.00";
    }

    return numericPrice.toFixed(2); // Return formatted price
  };

  return (
    <div className="max-w-7xl mx-auto py-16 bg-gray-50 px-8">
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-lg text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 px-16">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105"
            >
              {/* Image Section */}
              <div className="flex justify-center items-center bg-gray-100 group-hover:bg-green-50 transition duration-300 h-44 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={120}
                  height={120}
                  objectFit="contain"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <div className="flex flex-col justify-between items-center mb-1">
                  <h3 className="text-md font-semibold">{product.title}</h3>

                  {/* Price */}
                  <div className="flex gap-2 mt-2">
                    {product.originalPrice && !isNaN(product.originalPrice) && (
                      <p className="text-gray-400 line-through">
                        ${formatPrice(product.originalPrice)}
                      </p>
                    )}
                    <p className="text-pink-500 font-bold">
                      ${formatPrice(product.price)}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-4">
                    {/* View Button */}
                    <Link
                      href={`/product/${product.id}`}
                      className="bg-white text-gray-400"
                      aria-label={`View details of ${product.name}`}
                    >
                      <FaEye className="inline-flex" size={20} />
                    </Link>

                    {/* Remove from Wishlist Button */}
                    <button
                      className="text-red-600"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <FaRegHeart className="inline-flex" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

