"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { useState } from "react";

import { IoMdHeart } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function ProductDetails() {
  const [isWishlist, setIsWishlist] = useState(false); // State to manage wishlist color
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Product Details
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Product</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Product Details</p>
          </div>
        </div>
      </div>

      {/*Product Details Product Section*/}

      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg mt-20 lg:w-[1250px] lg:ml-[45px] lg:mt-[100px] p-4">
        {/* Image Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* 3 Small Images */}
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-3.5">
            <div>
              <img
                src="/images/PD-img1.jpg"
                alt="Product"
                className="rounded object-cover w-24 h-24 lg:w-32 lg:h-32"
              />
            </div>
            <div>
              <img
                src="/images/PD-img2.jpg"
                alt="Product"
                className="rounded object-cover w-24 h-24 lg:w-32 lg:h-32"
              />
            </div>
            <div>
              <img
                src="/images/PD-img3.jpg"
                alt="Product"
                className="rounded object-cover w-24 h-24 lg:w-32 lg:h-32"
              />
            </div>
          </div>

          {/* 1 Big Image */}
          <div className="mt-4 lg:mt-0">
            <img
              src="/images/PD-img4.jpg"
              alt="Product"
              className="rounded object-cover w-full h-64 lg:w-96 lg:h-96"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 mt-6 lg:mt-14 lg:pl-7">
          {/* Product Title and Colors */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">
              Playwood arm chair
            </h2>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
              <h3 className="text-slate-800 text-sm font-bold ml-1">(22)</h3>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mt-3">
            <p className="text-sm font-bold text-blue-900">$32.00</p>
            <del className="text-sm text-pink-500 line-through">$42.00</del>
          </div>

          {/* Product Description */}
          <p className="text-sm font-bold text-gray-800 mt-3">Color</p>
          <p className="text-gray-400 font-sans text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>

          {/* Icons Section */}
          <div className="flex space-x-4 mt-4 text-gray-500 items-center">
            {/* Add To Cart */}
            <button className="flex items-center font-sans font-medium text-blue-900">
              Add To Cart
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className={`flex items-center space-x-2 ${
                isWishlist ? "text-red-500" : ""
              }`}
            >
              <IoMdHeart className="w-5 h-5 mt-0.5" />
            </button>
          </div>

          {/* Categories and Tags */}
          <p className="text-sm font-bold text-blue-900 mt-6">Categories:</p>
          <p className="text-sm font-bold text-blue-900 mt-4">Tags</p>

          {/* Social Media Share */}
          <div className="flex items-center text-sm font-bold text-blue-900 mt-4">
            <span>Share</span>
            <a href="https://www.facebook.com/" className="ml-5">
              <FaFacebook className="w-4 h-4 text-blue-900" />
            </a>
            <a href="https://www.instagram.com/" className="ml-3">
              <AiFillInstagram className="w-5 h-5 text-pink-600" />
            </a>
            <a href="https://www.twitter.com/" className="ml-3">
              <FaTwitter className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-[#cde7ff] mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap items-center space-x-3 md:space-x-14 lg:space-x-20 font-sans pt-20">
            <h1 className="text-lg md:text-xl font-bold mb-4 sm:mb-0 border-b-2 border-black">
              Description
            </h1>
            <h1 className="text-lg md:text-xl font-bold mb-4 sm:mb-0 hover:border-b-2 border-black">
              Additional Info
            </h1>
            <h1 className="text-lg md:text-xl font-bold mb-4 sm:mb-0 hover:border-b-2 border-black">
              Reviews
            </h1>
            <h1 className="text-lg md:text-xl font-bold mb-4 sm:mb-0 hover:border-b-2 border-black">
              Video
            </h1>
          </div>

          <div className="mt-16">
            <h1 className="text-lg font-bold justify-center lg:ml-[137px]">
              Varius tempor.
            </h1>
            <p className="mt-4 text-sm text-gray-400 font-medium leading-relaxed flex lg:justify-center">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum.
              <br />
              Scelerisque a, risus ac ante. Velit consectetur neque, elit,
              aliquet. Non varius proin sed urna, egestas consequat laoreet diam
              tincidunt. Magna eget faucibus <br /> cras justo, tortor sed donec
              tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo
              netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-lg font-bold lg:ml-[137px]">More details</h1>
            <div className="space-y-3 mt-4 text-sm text-gray-400 font-medium">
              <p className="flex items-center lg:justify-center">
                <FaArrowRight className="text-black w-4 h-4 mr-3" />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
              <p className="flex items-center lg:justify-center">
                <FaArrowRight className="text-black w-4 h-4 mr-3" />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
              <p className="flex items-center lg:justify-center">
                <FaArrowRight className="text-blue-700 w-4 h-4 mr-3" />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
              <p className="flex items-center pb-20 lg:justify-center">
                <FaArrowRight className="text-black w-4 h-4 mr-3" />
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section>
        <div className="container px-5 mt-24 mx-auto">
          {/* Section Heading */}
          <h1 className="text-3xl font-bold text-black text-center md:text-left md:ml-[15px]">
            Related Products
          </h1>

          {/* Products Grid */}
          <div className="flex flex-wrap justify-center lg:justify-start">
            {/* Product 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-64 bg-gray-100"
                  src="/images/PD-RP-img1.jpg"
                />
              </a>
              <div className="mt-5 text-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-slate-700 title-font text-sm font-medium">
                    Mens Fashion Wear
                  </h2>
                  <div className="flex ml-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-500">★</span>
                  </div>
                </div>
                <p className="text-slate-800 mt-2 text-sm">$43.00</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-64 bg-gray-100"
                  src="/images/PD-RP-img2.jpg"
                />
              </a>
              <div className="mt-5 text-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-slate-700 title-font text-sm font-medium">
                    Women{`'`}s Fashion
                  </h2>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-800 mt-2 text-sm">$67.00</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-64 bg-gray-100"
                  src="/images/PD-RP-img3.jpg"
                />
              </a>
              <div className="mt-5 text-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-slate-700 title-font text-sm font-medium">
                    Wolx Dummy Fashion
                  </h2>
                  <div className="flex ml-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-500">★</span>
                  </div>
                </div>
                <p className="text-slate-800 mt-2 text-sm">$67.00</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-64 bg-gray-100"
                  src="/images/PD-RP-img4.jpg"
                />
              </a>
              <div className="mt-5 text-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-slate-700 title-font text-sm font-medium">
                    Top Wall Digital Clock
                  </h2>
                  <div className="flex ml-2">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="text-gray-500">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-800 mt-2 text-sm">$51.00</p>
              </div>
            </div>
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
