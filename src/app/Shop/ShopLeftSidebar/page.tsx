"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdOutlineStar } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

export default function ShopLeftSidebar() {
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
            Shop Left Sidebar
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Shop</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Shop Left Sidebar</p>
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
        <div className="flex flex-col lg:flex-row lg:ml-20 mt-16 p-4 lg:p-0">
          {/* Left Side Filters Section */}
          <div className="w-full lg:w-1/4 p-4 rounded bg-gray-50 lg:bg-transparent mb-8 lg:mb-0">
            {/* Product Brand Section */}
            <h2 className="font-bold text-blue-900 text-lg mb-4 border-b-2 w-32 border-black">
              Product Brand
            </h2>
            <ul className="space-y-2">
              {[
                "Coaster Furniture",
                "Fusion Dot High Fashion",
                "Unique Furniture Restore",
                "Dream Furniture Flipping",
                "Young Repurposed",
                "Green DIY furniture",
              ].map((brand, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 text-sm"
                >
                  <TiTick
                    className={`${
                      index === 2
                        ? "bg-blue-900 text-white"
                        : "bg-gray-300 text-blue-900"
                    } w-4 mr-2`}
                  />
                  {brand}
                </li>
              ))}
            </ul>

            {/* Discount Offer Section */}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-32 border-black">
              Discount Offer
            </h2>
            <ul className="space-y-2">
              {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
                (offer, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-400 text-sm"
                  >
                    <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                    {offer}
                  </li>
                )
              )}
            </ul>

            {/* Rating Item Section */}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-28 border-black">
              Rating Item
            </h2>
            <ul className="space-y-2">
              {[
                { stars: 4, count: 2341 },
                { stars: 3, count: 1726 },
                { stars: 2, count: 258 },
                { stars: 2, count: 25 },
              ].map((rating, index) => (
                <li key={index} className="flex items-center">
                  <TiTick
                    className={`${
                      index === 1
                        ? "bg-yellow-400 text-white"
                        : "bg-yellow-100 text-yellow-400"
                    } w-4 mr-2`}
                  />
                  {[...Array(5)].map((_, i) => (
                    <MdOutlineStar
                      key={i}
                      className={`${
                        i < rating.stars ? "text-yellow-500" : "text-gray-500"
                      }`}
                    />
                  ))}
                  <h1 className="text-sm ml-1 font-bold">({rating.count})</h1>
                </li>
              ))}
            </ul>

            {/* Categories Section */}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-24 border-black">
              Categories
            </h2>
            <ul className="space-y-2">
              {[
                "Prestashop",
                "Magento",
                "Bigcommerce",
                "osCommerce",
                "3dcart",
                "Bags",
                "Accessories",
                "Jewellery",
                "Watches",
              ].map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 text-sm"
                >
                  <TiTick
                    className={`${
                      index === 2
                        ? "bg-pink-500 text-white"
                        : "bg-pink-200 text-pink-500"
                    } w-4 mr-2`}
                  />
                  {category}
                </li>
              ))}
            </ul>

            {/* Price Filter Section */}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-24 border-black">
              Price Filter
            </h2>
            <ul className="space-y-2">
              {[
                "$0.00 - $150.00",
                "$150.00 - $350.00",
                "$150.00 - $504.00",
                "$450.00 +",
              ].map((price, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-400 text-sm"
                >
                  <TiTick
                    className={`${
                      index === 2
                        ? "bg-pink-500 text-white"
                        : "bg-pink-200 text-pink-500"
                    } w-4 mr-2`}
                  />
                  {price}
                </li>
              ))}
              <li className="flex items-center pt-2">
                <input
                  type="search"
                  placeholder="$10.00 - $20000"
                  className="text-sm bg-white w-40 h-8 border-t-2 border-b-2 border-l-2"
                />
                <IoIosSearch className="bg-white text-gray-300 border-t-2 border-b-2 border-r-2 w-9 h-8 px-2" />
              </li>
            </ul>

            {/* Filter By Color Section */}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-24 border-black">
              Filter By Color
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <p className="bg-blue-600 rounded-full mr-1 w-3 h-3"></p>
                <p>Blue</p>
                <p className="bg-orange-600 rounded-full ml-4 mr-1 w-3 h-3"></p>
                <p>Orange</p>
                <p className="bg-yellow-600 rounded-full ml-4 mr-1 w-3 h-3"></p>
                <p>Brown</p>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <p className="bg-green-600 rounded-full mr-1 w-3 h-3"></p>
                <p>Green</p>
                <p className="bg-purple-600 rounded-full ml-1.5 mr-1 w-3 h-3"></p>
                <p>Purple</p>
                <p className="bg-cyan-400 rounded-full ml-5 mr-1 w-3 h-3"></p>
                <p>Sky</p>
              </li>
            </ul>
          </div>

          {/* Right Side Products Section */}
          <div className="w-full lg:w-3/4">
            {[
              {
                id: 1,
                image: "/images/SLS-img1.jpg",
                title: "Dictum morbi",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 2,
                image: "/images/RS-P2-img.jpg",
                title: "Sodales sit",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 3,
                image: "/images/SLS-img3.jpg",
                title: "Nibh varius",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 4,
                image: "/images/SLS-img4.jpg",
                title: "Mauris quis",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 5,
                image: "/images/SLS-img5.jpg",
                title: "Morbi sagittis",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 6,
                image: "/images/SLS-img6.jpg",
                title: "Ultricies venenatis",
                price: "$26.00",
                oldPrice: "$52.00",
                rating: 4,
              },
              {
                id: 7,
                image: "/images/SLS-img7.jpg",
                title: "Scelerisque dignissim",
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
