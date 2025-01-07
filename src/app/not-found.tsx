"use client";

import Link from "next/link";
import Header from "./header/page";
import Footer from "./footer/page";

export default function NotFoundPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            404 Not Found
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">404 Not Found</p>
          </div>
        </div>
      </div>

      {/* 404 Section */}

      <div className="flex flex-col items-center mt-20 px-4">
        <img
          src="/images/404-img.png"
          alt="404 Not Found"
          className="max-w-full h-auto"
        />
        <h1 className="text-blue-900 text-center text-2xl font-sans font-bold mt-6">
          ooPs! The page you requested was not found!
        </h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 px-6 py-2.5 bg-pink-500 text-white font-medium font-sans rounded-md hover:bg-pink-600 transition"
        >
          Back To Home
        </button>
      </div>

      {/* As Seen In */}
      <div className="flex justify-center mt-14 px-4 sm:px-6 lg:px-8">
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
