"use client";

import React from "react";
import Header from "./header/page";
import Footer from "./footer/page";
import Link from "next/link";

import { TbTruckDelivery } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/*Header Section*/}

      <Header />

      {/*Hero Section*/}

      <section className="bg-[#cde7ff] w-full relative h-auto md:h-[600px] overflow-hidden px-5 md:px-14 pb-20">
        {/* Hero Section Image */}
        <div className="flex justify-center md:justify-start md:-ml-10 lg:ml-16">
          <img
            className="h-40 md:h-48 object-contain"
            src="/images/HS-img1.png"
            alt="Furniture Image"
          />
        </div>

        {/* Hero Section Text */}
        <div className="mt-5 md:absolute md:top-1/4 md:left-1/4 text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <p className="text-pink-500 font-bold text-sm md:text-base font-sans">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-black font-bold text-xl md:text-4xl font-sans mt-2">
            New Furniture Collection
          </h1>
          <h1 className="text-black font-bold text-xl md:text-4xl font-sans mt-1">
            Trends in 2020
          </h1>
          <p className="text-gray-600 text-xs md:text-sm font-sans mt-3 max-w-xs md:max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          {/* Shop Now Button */}
          <button className="bg-pink-500 px-4 py-2 text-white font-sans rounded mt-5 hover:bg-pink-600 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Circular Background with Second Image (Right on Large Screens) */}
        <div className="md:mt-48 lg:-mt-4 relative mt-10 md:absolute md:top-1/4 md:right-10 md:w-1/2 md:flex md:justify-end">
          <div className="bg-gray-200 rounded-full w-60 h-60 md:w-60 md:h-60 lg:w-96 lg:h-96 mx-auto md:mx-0"></div>
          <div className=" absolute inset-0 flex items-center justify-center">
            <img
              className="w-48 h-48 md:w-48 md:h-48 lg:w-96 lg:h-96 md:ml-36 lg:ml-80 lg:-mt-5 object-contain"
              src="/images/HS-S.png"
              alt="Decorative Furniture"
            />
          </div>
        </div>

        {/* 50% Off Badge */}
        <div className="md:mt-44 lg:mt-0.5 absolute top-[55%] right-[22%] md:top-1/4 lg:top-1/4 md:right-20 right-5 bg-cyan-400 text-white font-bold text-sm rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <span>
            50%
            <br />
            off
          </span>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="bg-pink-400 w-2 h-2 rounded-full"></span>
          <span className="w-2 h-2 rounded-full border border-pink-400"></span>
          <span className="w-2 h-2 rounded-full border border-pink-400"></span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white">
        <div className="container px-5 py-12 md:py-24 mx-auto">
          {/* Section Title */}
          <div className="flex justify-center">
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-8">
              Featured Products
            </h2>
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center -mx-3">
            {/* Item 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/FP-img1.png"
                  />
                </Link>
                <div className="p-5 text-center hover:bg-blue-700 hover:shadow-xl transition-shadow group group-hover:text-white transition-colors">
                  <Link href="/">
                    <h3 className="text-pink-500 font-bold text-xl group-hover:text-white transition-colors">
                      Cantilever chair
                    </h3>
                  </Link>
                  <div className="flex justify-center mt-3">
                    <div className="bg-green-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-pink-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-purple-500 w-4 h-4 rounded-full mx-1"></div>
                  </div>
                  <p className="text-gray-500 font-bold mt-2 text-sm group-hover:text-white">
                    Code - Y523201
                  </p>
                  <p className="text-gray-500 font-semibold mt-2 group-hover:text-white">
                    $42.00
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 2"
                    className="object-cover object-center w-full h-full"
                    src="/images/FP-img2.png"
                  />
                </Link>
                <div className="p-5 text-center hover:bg-blue-700 hover:shadow-xl transition-shadow group group-hover:text-white transition-colors">
                  <Link href="/">
                    <h3 className="text-pink-500 font-bold text-xl group-hover:text-white transition-colors">
                      Cantilever chair
                    </h3>
                  </Link>
                  <div className="flex justify-center mt-3">
                    <div className="bg-green-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-pink-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-purple-500 w-4 h-4 rounded-full mx-1"></div>
                  </div>
                  <p className="text-gray-500 font-bold mt-2 text-sm group-hover:text-white">
                    Code - Y523201
                  </p>
                  <p className="text-gray-500 font-semibold mt-2 group-hover:text-white">
                    $42.00
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 3"
                    className="object-cover object-center w-full h-full"
                    src="/images/FP-img3.png"
                  />
                </Link>
                <div className="p-5 text-center hover:bg-blue-700 hover:shadow-xl transition-shadow group group-hover:text-white transition-colors">
                  <Link href="/">
                    <h3 className="text-pink-500 font-bold text-xl group-hover:text-white transition-colors">
                      Cantilever chair
                    </h3>
                  </Link>
                  <div className="flex justify-center mt-3">
                    <div className="bg-green-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-pink-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-purple-500 w-4 h-4 rounded-full mx-1"></div>
                  </div>
                  <p className="text-gray-500 font-bold mt-2 text-sm group-hover:text-white">
                    Code - Y523201
                  </p>
                  <p className="text-gray-500 font-semibold mt-2 group-hover:text-white">
                    $42.00
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 4"
                    className="object-cover object-center w-full h-full"
                    src="/images/FP-img4.png"
                  />
                </Link>
                <div className="p-5 text-center hover:bg-blue-700 hover:shadow-xl transition-shadow group group-hover:text-white transition-colors">
                  <Link href="/">
                    <h3 className="text-pink-500 font-bold text-xl group-hover:text-white transition-colors">
                      Cantilever chair
                    </h3>
                  </Link>
                  <div className="flex justify-center mt-3">
                    <div className="bg-green-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-pink-500 w-4 h-4 rounded-full mx-1"></div>
                    <div className="bg-purple-500 w-4 h-4 rounded-full mx-1"></div>
                  </div>
                  <p className="text-gray-500 font-bold mt-2 text-sm group-hover:text-white">
                    Code - Y523201
                  </p>
                  <p className="text-gray-500 font-semibold mt-2 group-hover:text-white">
                    $42.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10">
            <div className="bg-pink-500 w-6 h-2 rounded-full mx-1"></div>
            <div className="bg-pink-300 w-4 h-2 rounded-full mx-1"></div>
            <div className="bg-pink-300 w-4 h-2 rounded-full mx-1"></div>
            <div className="bg-pink-300 w-4 h-2 rounded-full mx-1"></div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="bg-white">
        <div className="container px-5 mx-auto py-12">
          {/* Section Title */}
          <div className="flex justify-center">
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-8">
              Latest Products
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center flex-wrap gap-4 md:gap-10 mt-2">
            <Link
              href="/"
              className="text-black font-bold hover:text-pink-400 hover:border-b-2 border-blue-600 transition-all"
            >
              New Arrival
            </Link>
            <Link
              href="/"
              className="text-black font-bold hover:text-pink-400 hover:border-b-2 border-blue-600 transition-all"
            >
              Best Seller
            </Link>
            <Link
              href="/"
              className="text-black font-bold hover:text-pink-400 hover:border-b-2 border-blue-600 transition-all"
            >
              Featured
            </Link>
            <Link
              href="/"
              className="text-black font-bold hover:text-pink-400 hover:border-b-2 border-blue-600 transition-all"
            >
              Special Offer
            </Link>
          </nav>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center mt-7 -mx-3">
            {/* Item 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 1"
                    className="object-cover object-center w-full h-full"
                    src="/images/LP-img1.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 2"
                    className="object-cover object-center w-full h-full"
                    src="/images/LP-img2.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 3"
                    className="object-cover object-center w-full h-full"
                    src="/images/FP-img1.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 4"
                    className="object-cover object-center w-full h-full"
                    src="/images/LP-img4.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 5"
                    className="object-cover object-center w-full h-full"
                    src="/images/LP-img5.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/" className="block relative h-60">
                  <img
                    alt="Product 6"
                    className="object-cover object-center w-full h-full"
                    src="/images/LP-img6.png"
                  />
                </Link>
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-slate-800 font-bold text-sm">
                    Comfort Handy Craft
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold">
                    $42.00 <del className="text-pink-500 ml-1">$65.00</del>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*What Shopex Offer*/}

      <section>
        <div className="mt-10 container px-6 py-5 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-5 font-bold">
              What Shopex Offer
            </span>
          </div>

          <div className="flex flex-wrap justify-center sm:ml-0 -mr-3">
            {/*Item 1*/}
            <div className="SO w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 m-5">
              <TbTruckDelivery className="w-28 h-28 mx-auto mb-3" />
              <div className="mt-5">
                <h2 className="text-slate-800 title-font font-bold text-xl text-center">
                  24/7 Support
                </h2>
                <h2 className="text-center text-gray-500 font-bold mt-4 mb-10 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 2*/}
            <div className="SO w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 m-5">
              <img
                className="w-28 h-28 mx-auto mb-3"
                src="images/SO-img2.png"
                alt=""
              />
              <div className="mt-5">
                <h2 className="text-slate-800 title-font font-bold text-xl text-center">
                  24/7 Support
                </h2>
                <h2 className="text-center text-gray-500 font-bold mt-4 mb-10 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 3*/}
            <div className="SO w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 m-5">
              <img
                className="w-28 h-28 mx-auto mb-3"
                src="images/SO-img3.png"
                alt=""
              />
              <div className="mt-5">
                <h2 className="text-slate-800 title-font font-bold text-xl text-center">
                  24/7 Support
                </h2>
                <h2 className="text-center text-gray-500 font-bold mt-4 mb-10 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 4*/}
            <div className="SO w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 m-5">
              <img
                className="w-28 h-28 mx-auto mb-3"
                src="images/SO-img4.png"
                alt=""
              />
              <div className="mt-5">
                <h2 className="text-slate-800 title-font font-bold text-xl text-center">
                  24/7 Support
                </h2>
                <h2 className="text-center text-gray-500 font-bold mt-4 mb-10 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="bg-[#cde7ff] h-[700px] md:h-[600px] relative py-24 mt-24">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          {/* Circular Background */}
          <div className="absolute top-7 left-18 md:left-[3%] md:top-[14%] lg:left-20 lg:top-[18%] bg-gray-200 rounded-full w-64 h-64 md:w-96 md:h-96"></div>

          {/* Image */}
          <div className="absolute top-0 left-22 md:left-[4%] md:top-[12%] lg:left-[7%] lg:top-[18%] w-64 h-96 md:w-96 md:h-96 mt-8 md:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/NS-img.png"
            />
          </div>

          {/* Text Content */}
          <div className="relative md:absolute top-0 md:top-1/2 left-0 md:left-1/2 transform md:-translate-y-1/2 text-center md:text-left mt-64 md:mt-0">
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Unique Features Of latest &<br />
              Trending Products
            </h1>

            {/* Features List */}
            <div className="text-sm text-gray-700 space-y-3">
              <div className="flex items-start">
                <div className="bg-pink-500 w-2 h-2 rounded-full mt-1 mr-3"></div>
                <p>All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 w-2 h-2 rounded-full mt-1 mr-3"></div>
                <p>
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-400 w-2 h-2 rounded-full mt-1 mr-3"></div>
                <p>Arms, backs and seats are structurally reinforced</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-8  flex items-center space-x-10 md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-pink-500 px-7 py-2 text-white hover:bg-pink-600 transition-colors">
                Add to Cart
              </button>
              <div className="text-left">
                <p className="font-bold -mt-3 md:mt-1">B&B Italian Sofa</p>
                <p className="font-normal">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="bg-white">
        <div className="container px-6 py-12 md:py-24 mx-auto">
          {/* Section Title */}
          <div className="flex justify-center">
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-8">
              Trending Products
            </h2>
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center -mx-3">
            {/* Item 1 */}
            <div className=" w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-cover rounded"
                    src="/images/TP-img1.png"
                    alt="Product 1"
                  />
                </Link>
                <div className="mt-4 text-center">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Cantilever chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-1">
                    $26.00 <del className="opacity-50 ml-2">$42.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className=" w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-cover rounded"
                    src="/images/TP-img2.png"
                    alt="Product 2"
                  />
                </Link>
                <div className="mt-4 text-center">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Cantilever chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-1">
                    $26.00 <del className="opacity-50 ml-2">$42.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-cover rounded"
                    src="/images/TP-img3.png"
                    alt="Product 3"
                  />
                </Link>
                <div className="mt-4 text-center">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Cantilever chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-1">
                    $26.00 <del className="opacity-50 ml-2">$42.00</del>
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-cover rounded"
                    src="/images/LP-img5.png"
                    alt="Product 4"
                  />
                </Link>
                <div className="mt-4 text-center">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Cantilever chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-1">
                    $26.00 <del className="opacity-50 ml-2">$42.00</del>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo Section */}
          <div className="flex flex-wrap justify-center mt-8 -mx-3">
            {/* Promo 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-pink-200 rounded-lg p-6 h-48 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">23% off in all products</h3>
                  <Link
                    href="/"
                    className="text-pink-500 font-bold mt-2 border-b-2 border-pink-500"
                  >
                    Shop Now
                  </Link>
                </div>
                <img
                  className="w-40 h-40 ml-auto -mt-12"
                  src="/images/TP-img5.png"
                  alt="Promo 1"
                />
              </div>
            </div>

            {/* Promo 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
              <div className="bg-blue-200 rounded-lg p-6 h-48 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">23% off in all products</h3>
                  <Link
                    href="/"
                    className="text-pink-500 font-bold mt-2 border-b-2 border-pink-500"
                  >
                    View Collection
                  </Link>
                </div>
                <img
                  className="w-40 h-40 ml-auto -mt-12"
                  src="/images/TP-img6.png"
                  alt="Promo 2"
                />
              </div>
            </div>

            {/* Promo 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 ">
              <div className=" p-6 ">
                <div className="flex items-center mb-4">
                  <img
                    className="w-14 h-14 bg-gray-200 rounded"
                    src="/images/TP-img7.png"
                    alt="Product 5"
                  />
                  <div className="ml-3">
                    <Link href="/" className="text-slate-800 font-bold text-sm">
                      Executive Seat chair
                    </Link>
                    <p className="text-gray-500 text-sm">
                      <del>$32.00</del>
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    className="w-14 h-14 bg-gray-200 rounded"
                    src="/images/TP-img8.png"
                    alt="Product 6"
                  />
                  <div className="ml-3">
                    <Link href="/" className="text-slate-800 font-bold text-sm">
                      Executive Seat chair
                    </Link>
                    <p className="text-gray-500 text-sm">
                      <del>$32.00</del>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-14 h-14 bg-gray-200 rounded"
                    src="/images/TP-img9.png"
                    alt="Product 7"
                  />
                  <div className="ml-3">
                    <Link href="/" className="text-slate-800 font-bold text-sm">
                      Executive Seat chair
                    </Link>
                    <p className="text-gray-500 text-sm">
                      <del>$32.00</del>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Items */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="relative w-full md:w-1/2 text-center md:text-left">
            {/* Title */}
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
              Discount Item
            </h1>

            {/* Navigation Links */}
            <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 mb-6">
              <Link
                href="/"
                className="text-pink-500 border-b-2 border-pink-500"
              >
                Wood Chair
              </Link>
              <Link href="/" className="text-gray-800 hover:text-pink-500">
                Plastic Chair
              </Link>
              <Link href="/" className="text-gray-800 hover:text-pink-500">
                Sofa Collection
              </Link>
            </div>

            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
              20% Discount Of All Products
            </h2>

            {/* Subheading */}
            <p className="text-pink-500 text-lg font-semibold mb-4">
              Eams Sofa Compact
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features List */}
            <div className="text-gray-600 text-sm space-y-3 mb-8">
              <div className="flex items-center">
                <TiTick className="text-gray-600 mr-2" />
                <p>Material expose like metals</p>
              </div>
              <div className="flex items-center">
                <TiTick className="text-gray-600 mr-2" />
                <p>Clear lines and geometric figures</p>
              </div>
              <div className="flex items-center">
                <TiTick className="text-gray-600 mr-2" />
                <p>Simple neutral colours.</p>
              </div>
              <div className="flex items-center">
                <TiTick className="text-gray-600 mr-2" />
                <p>Material expose like metals</p>
              </div>
            </div>

            {/* Shop Now Button */}
            <button className="bg-pink-500 px-8 py-3 text-white hover:bg-pink-600 transition-colors">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0">
            {/* Circular Background */}
            <div className="bg-gray-200 rounded-full w-64 h-64 md:w-96 md:h-96 mx-auto"></div>

            {/* Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-96 md:w-96 md:h-96">
              <img
                className="object-cover object-center rounded"
                alt="Discount Item"
                src="/images/DI-img.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-5">
          {/* Section Title */}
          <div className="flex justify-center">
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-8">
              Top Categories
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="flex flex-wrap justify-center -mx-3">
            {/* Item 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-contain rounded-full"
                    src="/images/TC-img1.png"
                    alt="Category 1"
                  />
                </Link>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Mini LCW Chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-2">$56.00</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-contain rounded-full"
                    src="/images/FP-img1.png"
                    alt="Category 2"
                  />
                </Link>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Mini LCW Chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-2">$56.00</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-contain rounded-full"
                    src="/images/TP-img1.png"
                    alt="Category 3"
                  />
                </Link>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Mini LCW Chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-2">$56.00</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
              <div className="bg-gray-100 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/">
                  <img
                    className="w-full h-48 object-contain rounded-full"
                    src="/images/TC-img1.png"
                    alt="Category 4"
                  />
                </Link>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="text-slate-800 font-bold text-lg hover:text-pink-500"
                  >
                    Mini LCW Chair
                  </Link>
                  <p className="text-gray-500 font-semibold mt-2">$56.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8">
            <div className="bg-pink-500 w-2 h-2 rounded-full mx-1"></div>
            <div className="w-2 h-2 rounded-full border border-pink-500 mx-1"></div>
            <div className="w-2 h-2 rounded-full border border-pink-500 mx-1"></div>
          </div>
        </div>
      </section>

      {/* Latest Update Section */}
      <section className="relative mt-14">
        {/* Background Image */}
        <div className="w-full h-[200px] md:h-auto">
          <img
            src="/images/LU-img1.jpg"
            alt="Latest Update"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get Latest Update By Subscribe <br />
            Our Newsletter
          </h1>

          {/* Shop Now Button */}
          <button className="bg-pink-500 px-8 py-3 text-white hover:bg-pink-600 transition-colors">
            Shop Now
          </button>
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

      {/* Latest Blog Section */}

      <section className="mt-20">
        <div>
          <h1 className="text-3xl text-slate-800 font-bold text-center">
            Latest Blog
          </h1>
        </div>

        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Blog 1 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mx-auto">
              <div className="h-full w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/LB-img1.jpg"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August, 2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top essential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mx-auto">
              <div className="h-full w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/LB-img2.jpg"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August, 2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top essential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full mx-auto">
              <div className="h-full w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/LB-img3.jpg"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August, 2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top essential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <Footer />
    </main>
  );
}
