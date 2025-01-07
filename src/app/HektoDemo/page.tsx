"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

import { TiTick } from "react-icons/ti";

export default function HektoDemo() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Hekto Demo
          </h1>
        </div>
      </div>

      {/* Heckto Demo Section */}
      <section className="p-6">
        <div className="flex flex-col lg:flex-row lg:space-x-10 mt-10">
          {/* Heckto Demo Form */}
          <div className="lg:w-1/2">
            <h1 className="font-bold text-2xl text-blue-900 mb-2">
              Hekto Demo
            </h1>
            <p className="text-sm text-blue-900 mb-6">
              Cart / Information / Shipping / Payment
            </p>
            <div className="bg-gray-100 p-6 rounded">
              <div className="mb-6">
                <h1 className="font-semibold text-blue-900 mb-1">
                  Contact Information
                </h1>
                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link href="Login" className="text-blue-500">
                    Log in
                  </Link>
                </p>
              </div>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full border-b-2 border-gray-300 p-2 mb-6 text-sm"
              />
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <TiTick className="bg-green-500 text-white rounded-full mr-2" />
                Keep me up to date on news and exclusive offers
              </div>

              <h1 className="font-semibold text-blue-900 mb-4">
                Shipping Address
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full border-b-2 border-gray-300 p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border-b-2 border-gray-300 p-2 text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full border-b-2 border-gray-300 p-2 mb-4 text-sm"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border-b-2 border-gray-300 p-2 mb-4 text-sm"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border-b-2 border-gray-300 p-2 mb-4 text-sm"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border-b-2 border-gray-300 p-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border-b-2 border-gray-300 p-2 text-sm"
                />
              </div>
              <Link href="/">
                <button className="bg-pink-500 text-white text-sm py-2 px-6 rounded mt-6 w-full hover:bg-pink-600 transition">
                  Continue Shipping
                </button>
              </Link>
            </div>
          </div>

          {/* Product Summary Section */}
          <div className="lg:w-1/2 mt-10 lg:mt-20">
            <div className="bg-white shadow-md rounded overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 flex items-center">
                        <img
                          src={`/images/HD-img${index + 1}.jpg`}
                          alt={`Product ${index + 1}`}
                          className="w-16 h-16 rounded mr-4"
                        />
                        <div>
                          <p className="font-medium text-sm">
                            Ut diam consequat
                          </p>
                          <p className="text-xs text-gray-500">
                            Color: Brown <br />
                            Size: XL
                          </p>
                        </div>
                      </td>
                      <td className="p-4 text-sm">$32.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Subtotal Section */}
            <div className="bg-gray-100 p-6 mt-6 rounded">
              <div className="flex justify-between border-b pb-4 mb-4">
                <h1 className="font-semibold">Subtotals:</h1>
                <p className="text-sm">£219.00</p>
              </div>
              <div className="flex justify-between border-b pb-4 mb-4">
                <h1 className="font-semibold">Totals:</h1>
                <p className="text-sm">£325.00</p>
              </div>
              <div className="flex items-center text-xs text-gray-400 mb-6">
                <TiTick className="bg-green-500 text-white rounded-full mr-2" />
                Shipping & taxes calculated at checkout
              </div>
              <Link href="/Order">
                <button className="bg-green-500 text-white text-sm py-2 px-6 w-full rounded hover:bg-green-600 transition">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-40">
        <Footer />
      </div>
    </main>
  );
}
