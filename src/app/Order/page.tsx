"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

import { TiTick } from "react-icons/ti";

export default function OrderCompleted() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Order Completed
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Page</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Order Completed</p>
          </div>
        </div>
      </div>

      {/*Order Completed Section*/}

      <div className="flex flex-col items-center justify-center mt-[200px] mb-[150px] p-6">
        {/* Icons Row */}
        <div className="flex flex-row w-full justify-between items-center mb-10 relative">
          {/* Left Img */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src="/images/OC-C-img1.png"
                alt="Left Icon"
                className="lg:ml-80"
              />
            </div>
          </div>

          {/* Borders (Hidden on Small Screens) */}
          <div className="hidden md:block lg:block absolute inset-0 flex items-center">
            {/* Horizontal Border (Left Image to Center Icon) */}
            <div
              style={{
                top: "50%",
                left: "150%",
                height: "2px",
                width: "29%",
                transform: "translate(-50%, -50%)",
              }}
              className="md:ml-[26%] lg:ml-[32%] md:mt-[4%] lg:mt-[2%] border-dotted border-t-2 border-gray-300"
            ></div>
            {/* Horizontal Border (Center Icon to Right Image) */}
            <div
              style={{
                top: "50%",
                left: "150%",
                height: "2px",
                width: "29%",
                transform: "translate(-50%, -50%)",
              }}
              className="md:ml-[73%] lg:ml-[68%] border-dotted border-t-2 border-gray-300"
            ></div>
          </div>

          {/* Center Icon */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <TiTick className="text-pink-500 w-20 h-20" />
            </div>
          </div>

          {/* Right Img */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src="/images/OC-B-img2.png"
                alt="Right Icon"
                className="lg:mr-80"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-400 mb-6 text-sm font-sans">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 <br className="hidden lg:block" />
            hours. You will receive an email confirmation when your order is
            completed.
          </p>
          <Link href={"/"}>
            <button className="bg-pink-500 text-white text-sm px-8 py-3 rounded-md font-medium hover:bg-pink-600 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

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
