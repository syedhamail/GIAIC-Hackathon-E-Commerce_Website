"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function FAQs() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            FAQs
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Pages</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">FAQs</p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="py-16 mt-5 lg:mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-40">
            {/* Left Section - General Info */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-blue-900 text-2xl font-sans font-bold">
                General Information
              </h1>

              {/* FAQ Items */}
              <div className="mt-10">
                <div className="mb-10">
                  <h1 className="text-blue-900 font-sans font-medium">
                    Eu dictumst cum at sed euismood condimentum?
                  </h1>
                  <p className="text-sm text-gray-400 font-sans font-medium mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>

                <div className="mb-10">
                  <h1 className="text-blue-900 font-sans font-medium">
                    Magna bibendum est fermentum eros.
                  </h1>
                  <p className="text-sm text-gray-400 font-sans font-medium mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>

                <div className="mb-10">
                  <h1 className="text-blue-900 font-sans font-medium">
                    Odio muskana hak eris conseekin sceleton?
                  </h1>
                  <p className="text-sm text-gray-400 font-sans font-medium mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>

                <div className="mb-10">
                  <h1 className="text-blue-900 font-sans font-medium">
                    Elit id blandit sabara boi velit gua mara?
                  </h1>
                  <p className="text-sm text-gray-400 font-sans font-medium mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Ask a Question */}
            <div className="w-full lg:w-1/2 bg-gray-50 mt-10 lg:mt-0">
              <div className="p-6 lg:p-10">
                <h1 className="text-blue-900 text-2xl font-sans font-bold">
                  Ask a Question
                </h1>

                {/* Form */}
                <div className="mt-10">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full h-11 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black rounded mb-6"
                  />

                  <input
                    type="text"
                    placeholder="Subject*"
                    className="w-full h-11 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black rounded mb-6"
                  />

                  <textarea
                    placeholder="Type Your Message*"
                    className="w-full h-40 pl-3 pt-3 text-sm font-sans bg-white border-2 border-gray-300 text-black rounded"
                  ></textarea>

                  <button className="bg-pink-500 text-white font-sans text-sm px-9 py-2.5 font-medium rounded mt-6 hover:bg-pink-600 transition duration-300">
                    Send Mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <div className="flex justify-center mt-10 px-4 sm:px-6 lg:px-8">
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
