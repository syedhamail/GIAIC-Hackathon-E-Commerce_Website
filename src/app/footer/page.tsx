"use client";

import Link from "next/link";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    //Footer

    <footer className="bg-[#cde7ff]">
      <div className="container px-5 py-12 mx-auto flex flex-col md:flex-row flex-wrap">
        {/* Brand and Contact Info */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start"
          >
            <span className="font-bold text-2xl text-black">Hekto</span>
          </Link>
          <div className="mt-4 flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-48 md:w-56 h-10 bg-white text-sm text-center text-black border border-gray-300 rounded-l"
            />
            <button className="bg-pink-500 text-sm text-white w-28 md:w-32 h-10 rounded-r hover:bg-pink-600 transition-colors">
              Sign Up
            </button>
          </div>
          <div className="mt-6 text-gray-500 text-sm">
            <p>Contact Info</p>
            <p className="mt-2 text-xs">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* Categories, Customer Care, Pages */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-end space-x-0  md:space-x-8 lg:space-x-12">
          {/* Categories */}
          <div className="w-full md:w-auto p-4">
            <h2 className="text-black text-xl font-bold mb-4">Categories</h2>
            <nav className="list-none">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Laptops & Computers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Cameras & Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Smart Phones & Tablets
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Video Games & Consoles
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Waterproof Headphones
                </Link>
              </li>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="w-full md:w-auto p-4">
            <h2 className="text-black text-xl font-bold mb-4">Customer Care</h2>
            <nav className="list-none">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Discount
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Orders History
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Order Tracking
                </Link>
              </li>
            </nav>
          </div>

          {/* Pages */}
          <div className="w-full md:w-auto p-4">
            <h2 className="text-black text-xl font-bold mb-4">Pages</h2>
            <nav className="list-none">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Browse the Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Pre-Built Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  Visual Composer Elements
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 text-sm mt-2"
                >
                  WooCommerce Pages
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#e7f3ff]">
        <div className="container mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            ©Webecy - All Rights Reserved
          </p>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <a
              href="https://www.facebook.com/"
              className="text-blue-900 hover:text-blue-700"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-blue-900 hover:text-blue-700"
            >
              <AiFillInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="text-blue-900 hover:text-blue-700"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
