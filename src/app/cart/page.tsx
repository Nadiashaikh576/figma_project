// 'use client';

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// // Define types for Cart Item
// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   color: string;
//   size: string;
//   image: string;
// };

// // Mock cartproducts data
// const initialCartProducts: CartItem[] = [
//   {
//     id: 1,
//     name: "Ut diam",
//     price: 30,
//     quantity: 2,
//     color: "Red",
//     size: "M",
//     image: "/images/cart1.png",
//   },
//   {
//     id: 2,
//     name: "faucibus posuere",
//     price: 45,
//     quantity: 1,
//     color: "Blue",
//     size: "L",
//     image: "/images/cart2.png",
//   },
//   {
//     id: 3,
//     name: "Ac vitae vestibulum",
//     price: 60,
//     quantity: 1,
//     color: "Green",
//     size: "S",
//     image: "/images/cart3.png",
//   },
//   {
//     id: 4,
//     name: "Elit massa dia",
//     price: 50,
//     quantity: 2,
//     color: "Yellow",
//     size: "M",
//     image: "/images/cart4.png",
//   },
//   {
//     id: 5,
//     name: "Proin pharetra",
//     price: 35,
//     quantity: 3,
//     color: "Black",
//     size: "L",
//     image: "/images/cart5.png",
//   },

// ];

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>(initialCartProducts);

//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
//           : item
//       )
//     );
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   const resetCart = () => {
//     setCartItems(initialCartProducts);
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Cart Items */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
//           {cartItems.length > 0 ? (
//             <div className="space-y-6">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
//                 >
//                   <div className="flex items-center space-x-4">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="w-20 h-20 rounded-lg object-cover"
//                     />
//                     <div>
//                       <p className="font-semibold text-[#1D3178]">{item.name}</p>
//                       <p className="text-sm text-gray-500">
//                         Color: {item.color}, Size: {item.size}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-6">
//                     <p className="text-[#1D3178]">${item.price.toFixed(2)}</p>
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(item.id, Number(e.target.value))
//                       }
//                       className="w-12 px-2 py-1 border rounded-md text-center"
//                       min="1"
//                     />
//                     <p className="font-bold text-[#1D3178]">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-[#1D3178] text-center mt-6">
//               Your cart is empty. Add some products!
//             </p>
//           )}

//           {/* Action Buttons */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={resetCart}
//               className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
//             >
//               Update Cart
//             </button>
//             <button
//               onClick={clearCart}
//               className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-sm hover:bg-pink-600"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>

//         {/* Cart Totals */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
//           <p className="flex justify-between text-[#1D3178]">
//             <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between mb-4 text-[#1D3178]">
//             <span>Shipping:</span> <span>$15.00</span>
//           </p>
//           <p className="flex justify-between font-bold text-lg text-[#1D3178]">
//             <span>Total:</span>{" "}
//             <span>${(calculateTotal() + 15).toFixed(2)}</span>
//           </p>
//           <li>
//                 <Link href="/checkout">
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
//             >
//               Proceed To Checkout
//             </button>
//             </Link>
//             </li>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Cart;

"use client";
import { Product } from "@/../types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/checkout"); // Redirect to checkout page
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <Header />
      <h1 className="text-[#3F509E] text-3xl font-bold text-center mt-8 mb-10">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.stockLevel}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">  Your cart is empty. Add some products!</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-[#FB2E86] text-white rounded-md hover:bg-pink-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
         <Footer />
    </div>
  );
};

export default CartPage;