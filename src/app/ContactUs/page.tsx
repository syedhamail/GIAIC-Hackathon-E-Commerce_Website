"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function ContactUs() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Contact</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Contact Us</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="px-5 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-blue-900 text-3xl font-sans font-bold">
              Information About us
            </h1>
            <p className="mt-4 text-sm text-gray-400 font-medium font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices
              <br />
              mattis aliquam, malesuada diam est. Malesuada sem tristique amet
              erat vitae
              <br />
              eget dolor lobortis. Accumsan faucibus vitae lobortis quis
              bibendum quam.
            </p>
            <div className="flex space-x-2.5 mt-9">
              <span className="w-6 h-6 bg-indigo-700 rounded-full"></span>
              <span className="w-6 h-6 bg-pink-500 rounded-full"></span>
              <span className="w-6 h-6 bg-cyan-400 rounded-full"></span>
            </div>

            <h1 className="text-blue-900 text-3xl font-sans font-bold mt-12 lg:mt-32">
              Get In Touch
            </h1>
            <p className="mt-5 text-sm text-gray-400 font-medium font-sans leading-[1.5]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form className="mt-7 space-y-5">
              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full lg:w-1/2 h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black"
                />
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full lg:w-1/2 h-10 pl-3 mt-5 lg:mt-0 text-sm font-sans bg-white border-2 border-gray-300 text-black"
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black"
              />
              <textarea
                placeholder="Type Your Message*"
                className="w-full h-40 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black resize-none"
              ></textarea>
              <button className="bg-pink-500 text-white font-sans text-sm px-9 py-2.5 font-medium rounded hover:bg-pink-600 transition">
                Send Mail
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h1 className="text-blue-900 text-3xl font-sans font-bold">
              Contact Way
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-start space-x-3 text-gray-400 text-xs font-sans leading-[1.6]">
                <div className="w-8 h-8 bg-indigo-700 rounded-full"></div>
                <div>
                  Tel: 877-67-88-99 <br />
                  E-Mail: shop@store.com
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-xs font-sans leading-[1.6]">
                <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
                <div>
                  Support Forum <br />
                  For over 24hr
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-xs font-sans leading-[1.6]">
                <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                <div>
                  20 Margaret st, London <br />
                  Great britain, 3NM98-LK
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-xs font-sans leading-[1.6]">
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                <div>
                  Free standard shipping <br />
                  on all orders.
                </div>
              </div>
            </div>
            <img
              src="/images/CU-RS-img.png"
              alt=""
              className="mt-20 lg:mt-[150px] w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
