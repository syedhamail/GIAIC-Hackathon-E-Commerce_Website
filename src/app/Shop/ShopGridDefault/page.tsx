"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";

export default function ShopGridDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best Match");
  const handleSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option); // Set selected option
    setIsOpen(false); // Close the dropdown
  };
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Shop Grid Default
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Shop</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Shop Grid Default</p>
          </div>
        </div>
      </div>

      {/*Products Section*/}
      <section className="mt-24">
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

        {/* Products Section */}
        <section>
          <div className="container px-5 mt-24 mx-auto">
            <div className="flex flex-wrap justify-center -mx-2">
              {/* Product 1 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img1.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Vel elit euismod
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img2.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Ultricies condimentum imperdiet
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img3.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Vitae suspendisse sed
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img4.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Sed at fermentum
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img5.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Fusce pellentesque at
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img6.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Vestibulum magna laoreet
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 7 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img7.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Sollicitudin amet orci
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 8 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img8.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Ultrices mauris sit
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 9 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img9.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Pellentesque condimentum ac
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 10 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img10.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Cras scelerisque velit
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 11 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img11.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Lectus vulputate faucibus
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>

              {/* Product 12 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-64 bg-gray-100"
                    src="/images/SGD-img12.png"
                  />
                </a>
                <div className="mt-5 text-center">
                  <h2 className="text-slate-800 text-sm font-medium">
                    Purus risus, ut
                  </h2>
                  <div className="flex space-x-2 justify-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="flex mt-3 text-sm items-center justify-center space-x-3">
                    <p className="text-slate-800">$26.00</p>
                    <del className="text-pink-400">$42.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
