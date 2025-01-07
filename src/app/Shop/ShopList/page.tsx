"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

export default function ShopList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best Match");
  const handleSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option); // Set selected option
    setIsOpen(false); // Close the dropdown
  };

  // Wishlist states for each product with proper type definition
  type Wishlist = {
    [key: number]: boolean; // Index signature for dynamic keys (number type)
  };

  const [wishlist, setWishlist] = useState<Wishlist>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  // Toggle wishlist function
  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId], // Dynamic key usage
    }));
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Shop List
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Shop</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Shop List</p>
          </div>
        </div>
      </div>

      {/*Products Section*/}
      <section className=" mt-24 ">
        {/* Heading Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 py-4">
          {/* Left Section */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-xl font-bold text-gray-800">
              Ecommerce Accessories & Fashion Item
            </h1>
            <p className="text-gray-500 text-xs mt-1">
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:ml-16">
            {/* Per Page Input */}
            <div className="flex items-center">
              <h1 className="text-sm text-slate-600">Per Page:</h1>
              <input
                type="text"
                className="bg-white border w-14 h-6 ml-2 px-2 text-sm rounded"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center">
              <h1 className="text-sm text-slate-600">Sort By:</h1>
              <div className="relative inline-block text-left ml-2">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-between items-center w-44 h-7 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded shadow-sm hover:bg-gray-100 focus:outline-none"
                >
                  {selectedOption}
                  <svg
                    className="w-3 h-3 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Best Match")}
                    >
                      Best Match
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: Low to High")}
                    >
                      Price: Low to High
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: High to Low")}
                    >
                      Price: High to Low
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Newest")}
                    >
                      Newest
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* View Options */}
            <div className="flex items-center">
              <h1 className="text-sm text-slate-600">View:</h1>
              <CgLayoutGrid className="w-6 h-6 ml-2 text-gray-600 cursor-pointer hover:text-pink-500" />
              <FaListUl className="w-4 h-4 ml-2 text-gray-600 cursor-pointer hover:text-pink-500" />
              <input
                type="text"
                className="bg-white border w-32 h-6 ml-4 px-2 text-sm rounded"
              />
            </div>
          </div>
        </div>

        {/*Products*/}
        <div className="flex flex-col lg:flex-row lg:mr-40 lg:ml-40 mt-16 p-4 ">
          {/* Products List */}
          <div className="w-full">
            {[
              {
                id: 1,
                image: "/images/SL-img1.jpg",
                title: "Accumsan tincidunt",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 2,
                image: "/images/SL-img2.jpg",
                title: "In nulla",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 3,
                image: "/images/SL-img3.jpg",
                title: "Vel sem",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 4,
                image: "/images/SL-img4.jpg",
                title: "Porttitor cum",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 5,
                image: "/images/SL-img5.jpg",
                title: "Nunc in",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 6,
                image: "/images/SL-img6.jpg",
                title: "Vitae facilisis",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 7,
                image: "/images/SL-img7.jpg",
                title: "Curabitur lectus",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
            ].map((product) => (
              <div
                key={product.id}
                className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md mt-5 p-4"
              >
                {/* Image Section */}
                <div className="w-full lg:w-[210px] lg:h-[160px] overflow-hidden rounded-lg flex">
                  <img
                    src={product.image}
                    alt="Product"
                    className="rounded-lg object-cover w-full h-48 lg:h-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/4 lg:pl-4 mt-4 lg:mt-0">
                  {/* Product Title and Colors */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-blue-900">
                      {product.title}
                    </h2>
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                      <span className="w-3 h-3 rounded-full bg-red-600"></span>
                      <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-sm font-bold text-gray-800">
                      {product.price}
                    </p>
                    <del className="text-sm text-pink-500 line-through">
                      {product.oldPrice}
                    </del>
                    <div className="flex space-x-1 pl-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`${
                            i < product.rating
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Description */}
                  <p className="text-gray-400 font-sans text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </p>

                  {/* Icons Section */}
                  <div className="flex space-x-4 mt-4 text-gray-500">
                    <button className="flex items-center space-x-2">
                      <FiShoppingCart />
                    </button>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`flex items-center space-x-2 ${
                        wishlist[product.id] ? "text-red-500" : ""
                      }`}
                    >
                      <IoMdHeart className="w-5 h-5" />
                    </button>
                    <button className="flex items-center space-x-2">
                      <FaSearchPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <div className="flex justify-center mt-5 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <img
            src="/images/AsSeenIn-img.png"
            alt="As Seen In"
            className="w-full h-auto mt-14"
          />
        </div>
      </div>

      {/*Footer*/}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
