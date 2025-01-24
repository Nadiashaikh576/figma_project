// "use client";
// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import product from "../../../sanity/schemaTypes/product";

// const sanity = sanityClient({
//   projectId: "ceq8w7at",
//   dataset: "production",
//   apiVersion: "2025-01-15",
//   useCdn: true,
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//       _type: "image";
//     };
//   };
//   tags: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `*[_type == "product"] {
//                 _id,
//                 title,
//                 price,
//                 description,
//                 discountPercentage,
//                 "imageUrl": image.asset->url,
//                 tags
//             }`;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   const truncateDescription = (description: string) => {
//   return description.length > 100 ? description.substring(0, 100) + "..." : description;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className= "text-[#3F509E] text-2xl font-bold text-center mb-6">
//         Products From API's Data
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border shadow-md rounded-lg gap-4 hover:shadow-lg transition-shadow duration-300"
//           >
//             <Image
//               src={product.imageUrl}
//               alt={`${product.title} - ${product.description}`}
//               width={200}
//               height={200}
//               className="w-full h-auto object-cover rounded-md"
//             />

//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="px-2 py-1 text-gray-500 mt-2">
//                 {truncateDescription(product.description)}
//               </p>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="px-2 py-1 font-bold text-slate-600">
//                    ${product.price}
//                   </p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm px-2 py-1 text-green-600">
//                       {product.discountPercentage}% off
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags?.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-2 py-1 bg-slate-400 text-sm text-black rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* {Add to cart functionality */}

//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Cart functionality */}

//       <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-black text-red-800">
//           Shopping Cart
//         </h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//               >
//                 <div>
//                   <p className="font-medium text-slate-900">{item.title}</p>
//                   <p className="text-sm text-blue-600">
//                   ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}
//                     {/* ${item.price.toFixed(2)} */}
//                   </p>
//                 </div>

//                 <Image
//                   src={item.imageUrl}
//                   alt={`${product.title}`}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />

//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-black">No items in the cart.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCards;

"use client";
import React, { useEffect, useState } from "react";
import { allProducts } from "../../sanity/lib/queries";
import { Product } from "../../types/products";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-[#3F509E] text-2xl font-bold text-center mb-6">
        Products From API's Data
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <Link href={`/product/${product.slug?.current}`}>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
