"use client";

import Link from "next/link";
import { useState } from "react";

import { CiSearch, CiMail, CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <main className="page mb-7">
      {/* Top Navigation */}
      <div className="bg-purple-600 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-2">
        {/* Contact Info */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-white text-sm font-sans">
          <h1 className="flex items-center">
            <CiMail className="mr-2" /> hamailsyed139@gmail.com
          </h1>
          <h1 className="flex items-center">
            <FaPhoneAlt className="mr-2" /> +92 3363351905
          </h1>
        </div>

        {/* Language, Currency, Login, Wishlist, Cart */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-white text-sm font-sans">
          <h1 className="flex items-center">
            English <IoIosArrowDown className="ml-1" />
          </h1>
          <h1 className="flex items-center">
            USD <IoIosArrowDown className="ml-1" />
          </h1>
          <Link href="/Login" className="flex items-center hover:text-pink-400">
            Login <FiUser className="ml-1" />
          </Link>
          <h1 className="flex items-center">
            Wishlist <CiHeart className="ml-1" />
          </h1>
          <Link href="/ShoppingCart" className="flex items-center hover:text-pink-400">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white text-sm py-4">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Logo and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold whitespace-nowrap">
              Hekto
            </Link>

            {/* Search Bar */}
            <div className="flex w-full sm:w-auto sm:max-w-md">
              <input
                type="search"
                placeholder="Search"
                className="flex-grow w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-l focus:outline-none"
              />
              <button className="bg-pink-500 px-4 py-2 text-white rounded-r hover:bg-pink-600 transition-colors">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap ml-1 md:justify-center lg:-mt-7 space-x-4 sm:space-x-6 mt-4 sm:mt-6">
            {/* Home Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Home
              </button>
              {isOpen && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    href="/HektoDemo"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Hekto Demo
                  </Link>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Pages
              </button>
              {isOpen2 && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <Link
                    href="/ShoppingCart"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Shopping Cart
                  </Link>
                  <Link
                    href="/AboutUs"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/faqs"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>

            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Product
              </button>
              {isOpen3 && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <Link
                    href="/Product/ProductDetails"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Product Details
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen4(!isOpen4)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Blog
              </button>
              {isOpen4 && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  <Link
                    href="/Blog/BlogPage"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Blog Page
                  </Link>
                </div>
              )}
            </div>

            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen5(!isOpen5)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Shop
              </button>
              {isOpen5 && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10 right-0 sm:left-0">
                  <Link
                    href="/Shop/ShopGridDefault"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Shop Grid Default
                  </Link>
                  <Link
                    href="/Shop/ShopList"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Shop List
                  </Link>
                  <Link
                    href="/Shop/ShopLeftSidebar"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Shop Left Sidebar
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen6(!isOpen6)}
                className="text-black hover:text-pink-400 font-bold"
              >
                Contact
              </button>
              {isOpen6 && (
                <div className="absolute mt-2 w-40 bg-white border rounded shadow-lg z-10 right-0 sm:left-0">
                  <Link
                    href="/ContactUs"
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </main>
  );
}
