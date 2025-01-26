"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/../types/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      title: `${product.name} added to cart`,
      icon: "success",
      showCancelButton: false,
      timer : 1000
    
    })
    addToCart(product);

  };

  return (
    <>
    <Header />
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-[#3F509E] text-2xl font-bold text-center mb-6">
        Products From API&apos;s Data
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out py-2 px-4 rounded-lg font-semibold shadow-md"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
      </div>
    <Footer />
    </>
  );
};

export default ProductsPage;