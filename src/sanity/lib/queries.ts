import { groq } from 'next-sanity';

export const allProducts = groq`*[_type == "product"]`;

// export const four = groq`*[_type == "product"][0..3]`;


// Fetch the latest 6 products for the homepage
export const sixProductsQuery = groq`*[_type == "product"] | order(_createdAt desc)[0..5]`;

// Fetch all products (sorted by newest first)
export const allProductsQuery = groq`*[_type == "product"] | order(_createdAt desc)`;

// Fetch featured products
export const featuredProductsQuery = groq`*[_type == "product" && isFeaturedProduct == true] | order(_createdAt desc)`;

// Fetch products with discounts (only those with a discount greater than 0)
export const discountedProductsQuery = groq`*[_type == "product" && discountPercentage > 0] | order(discountPercentage desc)`;

// Fetch products based on category
export const chairProductsQuery = groq`*[_type == "product" && category == "Chair"]`;
export const sofaProductsQuery = groq`*[_type == "product" && category == "Sofa"]`;

// Fetch products that are in stock
export const inStockProductsQuery = groq`*[_type == "product" && stockLevel > 0]`;

// Fetch banners (modify if needed)
export const bannerQuery = groq`*[_type == "banner"]`;

// Fetch help section data
export const helpQuery = groq`*[_type == "help"]`;



// // /sanity/lib/queries.ts

// // Query for fetching all products
// export const ProductsList = `
//   *[_type == "product"]{
//     _id,
//     name,
//     price,
//     description,
//     discountPercentage,
//     stockLevel,
//     category,
//     "imageUrl": image.asset -> url
//   }
// `;

// // Query for fetching the product details by ID
// export const ProductDetailQuery = `
//   *[_type == "product" && _id == $id][0] {
//     _id,
//     name,
//     price,
//     description,
//     discountPercentage,
//     stockLevel,
//     category,
//     "imageUrl": image.asset -> url
//   }
// `;