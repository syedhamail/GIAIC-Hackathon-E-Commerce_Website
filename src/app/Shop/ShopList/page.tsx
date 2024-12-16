"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

export default function ShopList() {
    
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best Match");
  const handleSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option); // Set selected option
    setIsOpen(false); // Close the dropdown
  };

  const [isWishlist, setIsWishlist] = useState(false); // State to manage wishlist color
  const [isWishlist2, setIsWishlist2] = useState(false);
  const [isWishlist3, setIsWishlist3] = useState(false);
  const [isWishlist4, setIsWishlist4] = useState(false);
  const [isWishlist5, setIsWishlist5] = useState(false);
  const [isWishlist6, setIsWishlist6] = useState(false);
  const [isWishlist7, setIsWishlist7] = useState(false);

  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Shop List</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Shop</p>
            <p className="ml-3 text-pink-400">Shop List</p>
          </h1>
        </span>
      </div>

      {/*Products Section*/}
      <section className=" mt-24 ">
        
        {/*Heading*/}
        <div className="flex">

          <span className="ml-24">
            <h1 className="text-xl font-bold text-gray-800">
              Ecommerce Accessories & Fashion Item
            </h1>
            <p className="text-gray-500 text-xs">
              About 9,620 results (0.62 seconds)
            </p>
          </span>

          <span className="pl-32 flex text-slate-600">
            <h1 className="flex items-center text-sm">
              Per Page:
              <input type="text" className="bg-white border w-14 h-6 ml-2" />
            </h1>

            <div className="flex ml-8 items-center">
              <h1 className="flex items-center text-sm">Sort By:</h1>
              <div className="relative inline-block text-left ml-2">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-between items-center w-44 h-7 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded shadow-sm hover:bg-gray-100 focus:outline-none"
                >
                  {selectedOption}
                  <svg
                    className="w-3 h-3 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Best Match")}
                    >
                      Best Match
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: Low to High")}
                    >
                      Price: Low to High
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: High to Low")}
                    >
                      Price: High to Low
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Newest")}
                    >
                      Newest
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="flex items-center ml-8 text-sm">
              View:
              <CgLayoutGrid className="w-6 h-6" />
              <FaListUl className="w-3" />
              <input type="text" className="bg-white border w-32 h-6 ml-4" />
            </h1>
          </span>
        </div>

        {/*Products*/}
        <div className="flex ml-40 mt-16">

        <div>
          {/*Product 1 */}
          <div className="RS-S flex bg-white rounded-lg shadow-md  mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/2c1d/b3b7/24a7cae44e8a12f53da7ba81086e5ae4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HmN~Rtpe7uPGs5UH7~tkDQTcOOGeqjmjpSpRgIVyFK00E2c~-25H3QuMVDrkR~AYXHYqtYSavKNXlvoWGtWcl0CVMqp1DnrYYKMBZ2pMoOE4Qo8VqigejsgTauOOJYQbdg2JJAzMgcbP54cUOaJNzZZ9yUjCNvERmTW329PHZrdJt2I4KROeFA8~LL9or0ppAi3UGUR7hH7HhWovgCJLtMs4pqPTv4sKRUTN8AnJ61NhepQjj3XeuvSkFV0eASrfnQFCWW~Z~1sJaMJhU6S0TVggYZeGx961SPxROyCa4bwwIG3naW8BoeyoP-b-0kY9cILQQuMsafZ-GXOb4rbYoA__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Accumsan tincidunt
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist(!isWishlist)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>
            
          {/*Product 2 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/829e/9cbc/ec6b908d17b9bc22c55476246eae33e4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2yn8~~4rZlFMwM0MAlAIHyZhSllTa1wPBfIclDmKtzO80DWdE~mNN6MtIimaa~Wxg1gmKCSX3fUUZmPQevdYaqyI70r6RuoalWqRyeMehlN4RTrzCCAeSCwbFZ-Rrm77Z0DbBWmBzTHNfpTW5KARSwWgA6bDl3xDDFjyY3zjYoGpKlHAAFwuYjqsWhp45Cuq91FdIcN6YSIGyK3DeD~h4gkop3Lmb~3bVER0voyS9hXTtnfgENnD-gDcN9F8y2C79-G2pn6vcL69bd4cwiSuTmTlu5NZNfhKm4nNfXqIriru3GHiIz8njyU82lPDls-XsaPf4NiwJoGHkbN8mLH9g__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                In nulla
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist2(!isWishlist2)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist2 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

          {/*Product 3 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/8f60/18bd/250e29c6efcb1348348d95cb6fa468ad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvU05S84a0KlIEWQmaEyoDj24Y-95bUVODRked7MhF7D49pt7PUzUQ54d2GTC7uwPM9kest~eryi~XZcT5mQSg0abh4kLwshfVf4t~Rtclc-qmZRNaD7xoLOLxrv2M-8wxIyTFLdyMTDmnKJ-UP9BUrbb8bcpuhVGphQ-axZ-V~uqUMXSnL6a5mGA98Ap5MYKACCdR5hCOsqc1Gbl6mBD7s3wSDBbw08Wrnx1~Asu5-2f3AmiXp-CgN96EDmDX6Cx~g9iyvpB3SmX0oL~mA0ArAjPyt~INPOO1B2V-SJrx9kSZImU~TuZT3SYaTJ9prclJ2gKNXr-9751WcO94o8ew__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Vel sem
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist3(!isWishlist3)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist3 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

          {/*Product 4 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/d29f/2932/bfa12ced19f8fc978547241abf5006c1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjok-MGCuAjy-yNegW4HYJwdPbYFqklbB~5XgkUBivtTvWK-FdUnBXgGbFvAswL5BToo5jTa-4pLPXO6LFLe~KYmSZ3eFjBArXv96wX96Dk31DeKZikbFAYd2SE~j34K3Augqk0BbWxU~cUaONKc-kThy2NLLSIJpfIvkKTXWKhBSG~KzA2MeoGwxhacbddawTqkazj4SoYZtzLZCn7R~G2dkQcr3nr9KZeNYQ5RBz3B9cbYhRf-5xGbUCELgkaZJVUfzywqABxZrsHhgNOZ~0vOHcncaTTyYRvrHFu4~TSnT5Zt761pxPl6oC3OmtsR0nWk7SutRB-saUeaB3OT7w__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Porttitor cum
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist4(!isWishlist4)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist4 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

          {/*Product 5 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/6aaa/84eb/7846d7d8e0089353a0b5c1675caecf62?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q7TkydENjvxi4W1OoNlQ47U46okV8FP6YlOVUlj7HqwtlMPrGSUXLuLZxpoxsLK0YMNFXtymUWYdah2hYCE8KoFuuTpodvSTNQ8m7y13DFNSJltmwHoiDZQDXcVuJrJfD4w~fqAr5p3GtT4xrvZXS0gVMSlYat4WITJ31EanmgHVcGDaPKdJ6Vo76Zvm8Ir2o732t6boLLxhRGbw-9wCjejVRs6dJhk9XOB4MyR3KfZY2ZU5527ezgFV7ah-TpzVs4-CWIlfbpN8xPBCDk1O1RvBIOgu8jHuOqwraxYBKyCW-9dts2qAqTdlu2n3auSnnd0UB3Ty82ZdxcfkG6A6nw__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Nunc in
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist5(!isWishlist5)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist5 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

          {/*Product 6 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/d5e2/b080/ab604b0a1374703cbdb110258990ecc2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcTZe-9Uw1AfDcrNOz-nOFY~7Qx1kzsWortg~~jbrGFpfpGAKtpJQM9uuFm6Ip4tpLqqzuSkLdN6mxkELH-tzi4eFFOVvP-IwICV1rMzbMq6bcjOzdrnv4xBvbFXT2I6QfjB4pQmqM6aWBCzTCvdbkcbEKok8KQ-d61sRD6DwerwGYpgwPWqqq5U0669uveK3Mf6yiwOziwGkxYJ7VJxpfH0vuATYjhZ5Vm~rk2yxcKB7-J9I50~4bQszU2EsPnK2V3hAVdFkj8txHclU-KROFEdL5sXC5h15TUC4nPr42JwxU4487JhbhMfnjpeW2mmCw1Rea0rSpw6L0gOjqS-zw__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Vitae facilisis
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist6(!isWishlist6)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist6 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

          {/*Product 7 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/15b1/f528/f65103dd0576c59df41fb55d46ced20b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NKKd6FYpY5pVlOVagchJqhK2acTG9uLegErpK6eI3q-jYMy8CsZsN0A32MzQ5vKY130EI8mRi2FG0o7nIo49KlxfonwGvh8DMWNEdjUmiDmFwMzqOTAr6oo0MBsrsrCCaLm~xdoFgrvvPUoIlR76gRGWunJeCPBy6qIsJc-AavpX3wo8RwtIFnBclZP2yqH7PLBzZpC326HITDXMmnI~EHHLPIfbwwp-ov1wuh5B2tUuVEUt8yUr~r~t0dUnqoExAIPqXmZAqgR7QSPu-VFldwAuc9d9roMv0wUSwLed--N-w~TB-ZJ0bG1fQgtKXfd9dHLQHJJjmWz29bShrJXKBQ__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Curabitur lectus
                </h2>
                <div className="flex space-x-2 ml-10">
                  <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                  <span className="w-3 h-3 rounded-full bg-red-600"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-sm font-bold text-gray-800">$26.00</p>
                <del className="text-sm text-pink-500 line-through">$52.00</del>
                <div className="flex space-x-1 pl-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-400">★</span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-400 font-sans text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 ml-2">
                {/*Cart*/}
                <button className="flex items-center space-x-2">
                  <FiShoppingCart />
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist7(!isWishlist7)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist7 ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-3" />
                </button>

                {/*Search*/}
                <button className="flex items-center space-x-2">
                  <FaSearchPlus className="ml-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        </div>

      </section>

      {/*As seen in*/}

      <div className="flex ml-7 mt-28">

        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtaRKpQa58WhEx4WrkNOgoy~DA7m~EQ8fu8mUxFJJfoEaDtCLkbgc85Ygc2VZoQs70W8Ug8Ug8Jw6a96P6VprhRBwfKdV-1AQXcHED382XyT06z7PZifBj1KO6xZ1C2ycZX73UBgXQabRkkKcr0UxuOg2wYx-BeQThti-Hk~gTepLRdGmeosHD4Q9c9nTCVua1PoE4h2BC0rmplIMUVB7f~48i4h5XU2MBkNg7Ur~6KsuqrUikMGwDv2aEOwU2MnLeEdLugQq0oZQBTdjszsEr7aCuS~GyJhrqqMIp7u21~YXEcpls9GBKu0wBI6IXy3eFDZ1VsenJsV6xY0o05UBQ__"
            alt="adidas"
            className="mt-14 ml-52"
            width={850}           
          />
        </div>
      </div>

      {/*Footer*/}

      <div className="mt-20">
      <Footer/>
      </div>

    </main>
  );
}
