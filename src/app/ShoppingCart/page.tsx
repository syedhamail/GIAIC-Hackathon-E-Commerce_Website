"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";
import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    /*Product 1*/
    {
      id: 1,
      name: "Ut diam consequat",
      image: "/images/SC-img1.jpg",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 2*/
    {
      id: 2,
      name: "Vel faucibus posuere",
      image: "/images/SC-img2.jpg",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 3*/
    {
      id: 3,
      name: "Ac vitae vestibulum",
      image: "/images/SC-img3.jpg",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 4*/
    {
      id: 4,
      name: "Elit massa diam",
      image: "/images/SC-img4.jpg",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 5*/
    {
      id: 5,
      name: "Proin pharetra elementum",
      image: "/images/SC-img5.jpg",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },
  ]);

  const updateCart = () => {
    alert("Cart updated!");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Shopping Cart
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Page</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Shopping Cart</p>
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-center mt-28 p-6">
        {/* Shopping Cart Table */}
        <div className="w-full lg:w-2/3">
          <div className="container">
            <table className="w-full ml-1 text-left border-collapse">
              <thead>
                <tr>
                  <th className=" md:p-4">Product</th>
                  <th className="md:p-4">Price</th>
                  <th className="p-4 md:p-4">Quantity</th>
                  <th className="md:p-4">Total</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 -ml-8 md:ml-0 flex items-center">
                      {/* Product Image */}
                      <div className="w-16 h-auto mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="md:w-16 md:h-16 rounded"
                      />
                      </div>

                      {/* Product Details */}
                      <div>
                        <p className="font-medium text-xs ">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Color: {item.color} <br />
                          Size: {item.size}
                        </p>
                      </div>
                    </td>

                    {/* Price */} 
                    <td className="md:p-4 text-sm">${item.price.toFixed(2)}</td>
                      {/*Quantity*/}
                    <td className="p-4 text-sm">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="w-16 border text-center"
                        onChange={(e) =>
                          setCartItems((prev) =>
                            prev.map((cartItem) =>
                              cartItem.id === item.id
                                ? {
                                    ...cartItem,
                                    quantity: Number(e.target.value),
                                  }
                                : cartItem
                            )
                          )
                        }
                      />
                    </td>
                    {/* Total */}
                    <td className="md:p-4 text-sm">
                      £{(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Actions */}
            <div className="mt-6 text-sm flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                onClick={updateCart}
              >
                Update Cart
              </button>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Cart Total & Calculate Shipping */}
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0 lg:ml-8">
          {/* Cart Totals */}
          <div>
            <h1 className="font-bold text-lg">Cart Totals</h1>
            <div className="bg-gray-100 p-6 mt-5 rounded">
              <div className="flex justify-between border-b-2 border-gray-400 pb-4">
                <h1 className="font-semibold">Subtotals:</h1>
                <p className="text-sm">£32.00</p>
              </div>
              <div className="flex justify-between mt-4 border-b-2 border-gray-400 pb-4">
                <h1 className="font-semibold">Totals:</h1>
                <p className="text-sm">£160.00</p>
              </div>

              <p className="flex items-center text-xs mt-6">
                <TiTick className="bg-green-500 text-white rounded-full mr-2" />
                Shipping & taxes calculated at checkout
              </p>

              <Link href={"/Order"}>
                <button className="bg-green-500 text-sm text-white font-sans w-full mt-6 py-2 rounded hover:bg-green-600">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>

          {/* Calculate Shipping */}
          <div className="mt-8">
            <h1 className="font-bold text-lg">Calculate Shipping</h1>
            <div className="bg-gray-100 p-6 mt-5 rounded">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full p-2 mb-4 text-sm bg-transparent border-b-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full p-2 mb-4 text-sm bg-transparent border-b-2 border-gray-300"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 mb-4 text-sm bg-transparent border-b-2 border-gray-300"
              />

              <button className="bg-pink-500 text-sm text-white font-sans w-full py-2 rounded hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-28">
        <Footer />
      </div>
    </main>
  );
};

export default ShoppingCart;
