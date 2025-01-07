"use client";

import React from "react";
import Link from "next/link";
import Header from "../header/page";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../footer/page";

export default function AboutUs() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            About Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Page</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">About Us</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="relative mt-24">
        <div className="container mx-auto px-5 py-24">
          {/* Background Box */}
          <div className="absolute top-[78%] left-[48%] md:top-[78%] md:left-[28%] lg:top-[78%] lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 w-72 h-64 md:w-96 md:h-80 lg:w-96 lg:h-80 rounded-lg"></div>

          {/* Image */}
          <div className="absolute top-[75%] left-[50%] md:top-[75%] md:left-[29%] lg:top-[75%] lg:left-[31%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-64 md:w-96 md:h-80 lg:w-96 lg:h-80 rounded-lg overflow-hidden">
            <img
              className="object-cover object-center w-full h-full"
              alt="hero"
              src="/images/AU-img.jpg"
            />
          </div>

          {/* Text Content */}
          <div
            className="top-[185%] left-[45%] md:top-[23%] md:left-[71%] lg:top-[35%] lg:left-[65%] lg:text-center absolute transform -translate-x-1/2 -translate-y-1/2 text-blue-900 text-2xl md:text-3xl lg:text-4xl font-bold font-serif"
            style={{
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            <h1>
              Know About Our Ecommerce <br /> Business, History
            </h1>
          </div>

          {/* Description */}
          <div className="top-[240%] left-[45%] md:top-[93%] md:left-[71%] lg:top-[90%] lg:left-[65.5%] lg:text-center absolute transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xs md:text-sm font-sans">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="top-[290%] left-[35%] md:top-[155%] md:left-[65%] lg:top-[145%] lg:left-[65%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/ContactUs">
              <button className="bg-pink-500 px-7 py-2 text-white font-sans rounded hover:bg-pink-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Features Section */}

      <section className="mt-[450px] md:mt-56">
        <div className="container px-6 py-5 mx-auto">
          {/* Title */}
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-10 font-bold">
              Our Features
            </span>
          </div>

          {/* Features Grid */}
          <div className="flex flex-wrap md:grid-cols-2 justify-center">
            {/* Item 1 */}
            <div className="SO lg:w-1/5 sm:w-1/3 w-full m-5 hover:border-b-4 hover:border-yellow-500 text-center">
              <TbTruckDelivery className="w-16 h-16 mx-auto mb-3" />
              <div className="mt-5">
                <h2 className="text-slate-800 font-bold text-xl">
                  24/7 Support
                </h2>
                <p className="text-gray-500 font-bold mt-4 mb-6 text-sm">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. <br />
                  Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="SO lg:w-1/5 sm:w-1/3 w-full m-5 hover:border-b-4 hover:border-yellow-500 text-center">
              <img
                className="w-16 h-16 mx-auto mb-3"
                src="images/SO-img2.png"
                alt="Feature 2"
              />
              <div className="mt-5">
                <h2 className="text-slate-800 font-bold text-xl">
                  Secure Payment
                </h2>
                <p className="text-gray-500 font-bold mt-4 mb-6 text-sm">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. <br />
                  Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="SO lg:w-1/5 sm:w-1/3 w-full m-5 hover:border-b-4 hover:border-yellow-500 text-center">
              <img
                className="w-16 h-16 mx-auto mb-3"
                src="images/SO-img3.png"
                alt="Feature 3"
              />
              <div className="mt-5">
                <h2 className="text-slate-800 font-bold text-xl">
                  Fast Delivery
                </h2>
                <p className="text-gray-500 font-bold mt-4 mb-6 text-sm">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. <br />
                  Massa purus gravida.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="SO lg:w-1/5 sm:w-1/3 w-full m-5 hover:border-b-4 hover:border-yellow-500 text-center">
              <img
                className="w-16 h-16 mx-auto mb-3"
                src="images/SO-img4.png"
                alt="Feature 4"
              />
              <div className="mt-5">
                <h2 className="text-slate-800 font-bold text-xl">
                  Quality Products
                </h2>
                <p className="text-gray-500 font-bold mt-4 mb-6 text-sm">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. <br />
                  Massa purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Say Section */}
      <section className="py-16 bg-[#f7fbfe] mt-16">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-center">Our Client Say!</h1>

          {/* Client Images */}
          <div className="flex justify-center mt-12 space-x-3">
            <img
              src="/images/AU-OCS-img1.jpg"
              alt="Client 1"
              className="w-11 h-12 rounded"
            />
            <img
              src="/images/AU-OCS-img2.jpg"
              alt="Client 2"
              className="w-11 h-12 -mt-2 rounded"
            />
            <img
              src="/images/AU-OCS-img3.jpg"
              alt="Client 3"
              className="w-11 h-12 rounded"
            />
          </div>

          {/* Client Name and Role */}
          <h1 className="text-center font-semibold font-sans text-xl mt-5">
            Selina Gomez
          </h1>
          <p className="text-center text-xs font-sans text-gray-400 mt-0.5">
            Ceo At Webecy Digital
          </p>

          {/* Client Testimonial */}
          <p className="text-center text-gray-400 text-sm font-bold font-sans leading-relaxed mt-5 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-9 pb-16">
            <div className="bg-pink-300 w-5 h-1 rounded mx-1"></div>
            <div className="bg-pink-500 w-7 h-1 rounded mx-1"></div>
            <div className="bg-pink-300 w-5 h-1 rounded mx-1"></div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-60">
        <Footer />
      </div>
    </main>
  );
}
