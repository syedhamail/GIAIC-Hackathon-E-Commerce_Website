"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function Login() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            My Account
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Login</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">My Account</p>
          </div>
        </div>
      </div>

      {/*Login Section*/}

      <section className="flex justify-center mt-28 p-4">
        <div className="LS bg-white shadow-md rounded-lg w-full max-w-md">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mt-4">Login</h1>
            <p className="text-gray-400 font-sans text-center mt-2">
              Please login using account detail below.
            </p>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email Address"
              className="text-sm w-full border-2 p-3 mt-8 rounded focus:outline-none focus:border-pink-500"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="text-sm w-full border-2 p-3 mt-6 rounded focus:outline-none focus:border-pink-500"
            />

            {/* Forgot Password Link */}
            <p className="text-sm text-gray-400 font-sans mt-3">
              Forgot your password?
            </p>

            {/* Sign In Button */}
            <button className="w-full mt-8 text-white font-medium font-sans bg-pink-500 py-3 px-5 rounded hover:bg-pink-600 transition">
              Sign In
            </button>

            {/* Create Account Link */}
            <p className="text-center text-gray-400 font-sans mt-6">
              Don’t have an Account?{" "}
              <span className="text-pink-500 cursor-pointer">
                Create account
              </span>
            </p>
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
