export type Category = 
  | "Furniture"
  | "Chairs"
  | "Tables"
  | "Living Room"
  | "Office"
  | "Luxury"
  | "Design"
  | "Decor"
  | "Dining"
  | "Sofas"
  | "Minimalist"
  | "Relaxation"
  | "Accessories"
  | "Bags"
  | "Watches"
  | "Electronics"
  | "Cameras"
  | "Headphones";  

  export type Tag = 
  | "Modern"
  | "Comfortable"
  | "Stylish"
  | "Versatile"
  | "Designer"
  | "Sleek"
  | "Chic"
  | "Elegant"
  | "Contemporary"
  | "Family"
  | "Dining"
  | "Relax"
  | "Lounge"
  | "High-Quality Sound"
  | "Premium"
  | "Noise Cancelling"
  | "Luxurious"
  | "High-Quality";  // Added High-Quality tag

export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    image: string;
    imageAlt: string;
    imageSrcset?: string;
    rating?: number;
    colors?: string[];
    description?: string;
    categories?: Category[];
    tags?: Tag[];
    createdAt?: string;
    isAvailable: boolean;
    ratingComments?: string[];
  }

  export const products: Product[] = [
    {
      id: 1,
      name: "ErgoComfort Modern Chair", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro1.png",
      imageAlt: "Comfortable modern chair",
      rating: 4.5,
      colors: ["Red", "Blue", "Green"],
      description: "A comfortable chair with a modern design, perfect for any living room.",
      categories: ["Furniture", "Chairs", "Living Room"],
      tags: ["Modern", "Comfortable", "Stylish"],
      createdAt: "2023-01-12",
      isAvailable: true,
      ratingComments: ["Great chair! Very comfortable.", "Stylish and durable."]
    },
    {
      id: 2,
      name: "SleekModern Sofa", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro2.png",
      imageAlt: "Modern sofa",
      rating: 4.2,
      colors: ["Black", "White"],
      description: "A stylish and comfortable sofa for your living room.",
      categories: ["Furniture", "Sofas", "Living Room"],
      tags: ["Modern", "Comfortable"],
      createdAt: "2023-01-15",
      isAvailable: true,
      ratingComments: ["Perfect for my living room.", "Sleek and comfortable."]
    },
    {
      id: 3,
      name: "ChicDesign Light Color Chair", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro3.png",
      imageAlt: "Light color chic chair",
      rating: 4.7,
      colors: ["Gray", "Blue"],
      description: "A chic and comfy chair with light colors, perfect for modern interiors.",
      categories: ["Furniture", "Chairs", "Design"],
      tags: ["Chic", "Designer"],
      createdAt: "2023-02-03",
      isAvailable: true,
      ratingComments: ["Amazing comfort and design.", "A perfect addition to my living room."]
    },
    {
      id: 4,
      name: "Elegant Versatile Bag", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro4.png",
      imageAlt: "Bag",
      rating: 4.0,
      colors: ["Brown", "Beige"],
      description: "A versatile and stylish bag for any occasion.",
      categories: ["Accessories", "Bags"],
      tags: ["Stylish", "Versatile"],
      createdAt: "2023-03-01",
      isAvailable: true,
      ratingComments: ["Great quality.", "Perfect for daily use."]
    },
    {
      id: 5,
      name: "Luxury Elegant Watch", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro5.png",
      imageAlt: "Watch",
      rating: 4.3,
      colors: ["Black", "Gold"],
      description: "A sleek and elegant watch designed for every occasion.",
      categories: ["Accessories", "Watches"],
      tags: ["Elegant", "Sleek"],
      createdAt: "2023-03-10",
      isAvailable: true,
      ratingComments: ["Stylish and accurate.", "Nice design."]
    },
    {
      id: 6,
      name: "Modern Trendy Watch", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro6.png",
      imageAlt: "Watch",
      rating: 4.6,
      colors: ["Red", "Orange"],
      description: "An elegant watch with modern features.",
      categories: ["Accessories", "Watches"],
      tags: ["Modern", "Stylish"],
      createdAt: "2023-04-04",
      isAvailable: true,
      ratingComments: ["Perfect timepiece.", "Looks great with my outfit."]
    },
    {
      id: 7,
      name: "High Quality Headphones", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro7.png",
      imageAlt: "Headphones",
      rating: 4.1,
      colors: ["White", "Gray"],
      description: "Comfortable headphones with high-quality sound.",
      categories: ["Accessories", "Headphones"],
      tags: ["Comfortable", "High-Quality Sound"],
      createdAt: "2023-04-10",
      isAvailable: true,
      ratingComments: ["Amazing sound quality.", "Very comfortable to wear."]
    },
    {
      id: 8,
      name: "Stylish Sofa for Living Room", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro8.png",
      imageAlt: "Modern sofa",
      rating: 4.4,
      colors: ["Black", "Silver"],
      description: "A modern sofa that adds style and comfort to any living room.",
      categories: ["Furniture", "Sofas", "Living Room"],
      tags: ["Stylish", "Comfortable"],
      createdAt: "2023-05-01",
      isAvailable: true,
      ratingComments: ["Very comfy.", "Looks great in my living room."]
    },
    {
      id: 9,
      name: "Versatile Elegant Watch", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro9.png",
      imageAlt: "Watch",
      rating: 4.8,
      colors: ["Brown", "Green"],
      description: "An elegant watch that suits both formal and casual wear.",
      categories: ["Accessories", "Watches"],
      tags: ["Elegant", "Versatile"],
      createdAt: "2023-05-12",
      isAvailable: true,
      ratingComments: ["Perfect for all occasions.", "Really stylish."]
    },
    {
      id: 10,
      name: "Premium Quality Camera", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro10.png",
      imageAlt: "Camera",
      rating: 4.0,
      colors: ["Blue", "White"],
      description: "A high-quality camera designed for capturing beautiful moments.",
      categories: ["Electronics", "Cameras"],
      tags: ["High-Quality", "Modern"],
      createdAt: "2023-06-01",
      isAvailable: true,
      ratingComments: ["Great camera for photography.", "Superb image quality."]
    },
    {
      id: 11,
      name: "Noise Cancelling Headphones", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro11.png",
      imageAlt: "Headphones",
      rating: 4.5,
      colors: ["Black", "Gold"],
      description: "Premium headphones with excellent sound quality and noise cancellation.",
      categories: ["Accessories", "Headphones"],
      tags: ["Premium", "Noise Cancelling"],
      createdAt: "2023-06-15",
      isAvailable: true,
      ratingComments: ["Great noise cancellation.", "Amazing sound."]
    },
    {
      id: 12,
      name: "Luxury Travel Bag", 
      originalPrice: 96,
      discountedPrice: 62,
      image: "/products/pro12.png",
      imageAlt: "Bag",
      rating: 4.0,
      colors: ["Brown", "Beige"],
      description: "A luxurious and durable bag for any occasion.",
      categories: ["Accessories", "Bags"],
      tags: ["Stylish", "Luxurious"],
      createdAt: "2023-06-20",
      isAvailable: true,
      ratingComments: ["Great for travel.", "Love the design."]
    },
  ];