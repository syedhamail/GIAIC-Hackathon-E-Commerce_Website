"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdOutlineStar } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

export default function ShopLeftSidebar() {
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
          <h1 className="ml-60 pt-24 text-4xl font-bold">Shop Left Sidebar</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Shop</p>
            <p className="ml-3 text-pink-400">Shop Left Sidebar</p>
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
        <div className="flex ml-20 mt-16">
          {/*Left Side Filters Section */}

          <div className="w-1/4 p-4 rounded">
            {/*Product Brand Section*/}
            <h2 className="font-bold text-blue-900 text-lg mb-4 border-b-2 w-32 border-black">
              Product Brand
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-gray-300 text-blue-900 w-4 mr-2" />
                Coaster Furniture
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-gray-300 text-blue-900 w-4 mr-2" />
                Fusion Dot High Fashion
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-blue-900 text-white w-4 mr-2" />
                Unique Furniture Restore
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-gray-300 text-blue-900 w-4 mr-2" />
                Dream Furniture Flipping
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-gray-300 text-blue-900 w-4 mr-2" />
                Young Repurposed
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-gray-300 text-blue-900 w-4 mr-2" />
                Green DIY furniture
              </li>
            </ul>

            {/*Discount Offer Section*/}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4  border-b-2 w-32 border-black">
              Discount Offer
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                20% Cashback
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                5% Cashback Offer
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                25% Discount Offer
              </li>
            </ul>

            {/*Rating Item Section*/}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-28 border-black">
              Rating Item
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <TiTick className="bg-yellow-100 text-yellow-400 w-4 mr-2" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-gray-500" />
                <h1 className="text-sm ml-1 font-bold">(2341)</h1>
              </li>
              <li className="flex items-center">
                <TiTick className="bg-yellow-400 text-white w-4 mr-2" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-gray-500" />
                <MdOutlineStar className="text-gray-500" />
                <h1 className="text-sm ml-1 font-bold">(1726)</h1>
              </li>
              <li className="flex items-center">
                <TiTick className="bg-yellow-100 text-yellow-400 w-4 mr-2" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-gray-500" />
                <MdOutlineStar className="text-gray-500" />
                <MdOutlineStar className="text-gray-500" />
                <h1 className="text-sm ml-1 font-bold">(258)</h1>
              </li>
              <li className="flex items-center">
                <TiTick className="bg-yellow-100 text-yellow-400 w-4 mr-2" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-yellow-500" />
                <MdOutlineStar className="text-gray-500" />
                <MdOutlineStar className="text-gray-500" />
                <MdOutlineStar className="text-gray-500" />
                <h1 className="text-sm ml-1 font-bold">(25)</h1>
              </li>
            </ul>

            {/* Categories Section*/}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4 border-b-2 w-24 border-black">
              Categories
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Prestashop
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Magento
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-500 text-white w-4 mr-2" />
                Bigcommerce
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                osCommerce
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                3dcart
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Bags
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Accessories
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Jewellery
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                Watches
              </li>
            </ul>

            {/*Price Filter Section*/}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4  border-b-2 w-24 border-black">
              Price Filter
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                $0.00 - $150.00
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                $150.00 - $350.00
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-500 text-white w-4 mr-2" />
                $150.00 - $504.00
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <TiTick className="bg-pink-200 text-pink-500 w-4 mr-2" />
                $450.00 +
              </li>
              <li className="flex items-center pt-2">
                <input
                  type="search"
                  placeholder="$10.00 - $20000 "
                  className="text-sm bg-white w-40 h-8 border-t-2 border-b-2 border-l-2 "
                />
                <IoIosSearch className="bg-white text-gray-300 border-t-2 border-b-2 border-r-2 w-9 h-8 px-2 " />
              </li>
            </ul>

            {/*Filter By Color Section*/}
            <h2 className="font-bold text-blue-900 text-lg mt-6 mb-4  border-b-2 w-24 border-black">
              Price Filter
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <p className="bg-blue-600 rounded-full mr-1 w-3 h-3"></p>
                <p>Blue</p>
                <p className="bg-orange-600 rounded-full ml-4 mr-1 w-3 h-3"></p>
                <p>Orange</p>
                <p className="bg-yellow-600 rounded-full ml-4 mr-1 w-3 h-3"></p>
                <p>Brown</p>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <p className="bg-green-600 rounded-full mr-1 w-3 h-3"></p>
                <p>Green</p>
                <p className="bg-purple-600 rounded-full ml-1.5 mr-1 w-3 h-3"></p>
                <p>Purple</p>
                <p className="bg-cyan-400 rounded-full ml-5 mr-1 w-3 h-3"></p>
                <p>Sky</p>
              </li>
            </ul>
          </div>

          {/*Right Side Section */}

        <div>
          {/*Right Side Product 1 */}
          <div className="RS-S flex bg-white rounded-lg shadow-md  mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/2798/77cf/d5ac5b61435d9eb1856f6203b2e4ca60?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDoGrZaOVZLJC6exx36oH39mVLDkXbeE20C7PimiJbGvuWxqAbFJdRi7uc0CKIl-f-amTrw7hmyQgt0VHP9t6vY0a88MOxwqAZ-zvHMqTruhjD-px52HLSv1l02MM-ETw9~34SkZl8I0MtDI1GjhOIMCATGIre5stKqlxwSioZorLk0t878WyDc3CNayVnYxhw5LX0b~snhZGxThn0rf2Bz8d23X1nOXlA1A5Wt5I3wL6ACbKf-8VBi07-LrxluAwh~Ae-VvADW8cc9n7~wEXpfTi5DuwqX8a9B4LfQ4FHV52PlT7OT5ga6rXTLtE4A4L8I2j-KRPNqEgFh0v7nqVg__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                  Dictum morbi
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
            
          {/*Right Side Product 2 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="/images/RS-P2-img.jpg"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Sodales sit
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

          {/*Right Side Product 3 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/9821/f938/4214ad603d74e99f5c18f3b963d1f053?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ecv5Cvy7S4vYjTVDjOE9eQsbWtNotUm279eRL-FpsNVrqRsrwRANJ6jU~IFjTsAatOLW2KHMjHx5qHXIABcskmaiGb3Bkli~UziOTvNHdrUdFJ8LNDmYTUSzkHNt8R5HPa9FdSyNIbk866F6AFOOFgrsARduT334aMLXIgiH~cxvxYYjs56iA8Y3D8gObR1iuGz07uHhyX~LefEa46cMWJCwi4foWgIVFDrfRBtrTpWaLwThsD4tyZ5IHTYIpx1SLW9PJgUCy25Tael7~Vohd8~1Q6pV1QosPQnRtcCuF~KdgTa6qMrbvEvrB4D1zvj9JvRSe9DFp~eiaGs1U4uT3w__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Nibh varius
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

          {/*Right Side Product 4 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4">
              <img
                src="https://s3-alpha-sig.figma.com/img/95d3/c0bd/ec2f0d4ea7d38e50758422c175bc0622?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hdCWvLjzQJj9VpTw81mVNOhK1j-vM6qaeRkEzB3k~Obc0P85d6V9dPwj4NSa41c3LoIPmotl5ICm7nVDC3ZhuvH-O0YaNeBfike5HTCQNiPyakGieY1C4KEmdNGLLFcwRQbqbcbBCFrlWSts14v-0M2QLXH1Wrjo9E66hbI9x8WPLN2g03eYjmc-LqyfX9Pce25KV846jHZoVzxSXizu-ppWd--FdnosMVz~pDe7eOEt2KtqRWfwJ6sjNhhHnk0~-LIJjm3mwHTrgqvENc3MSY0aIk~2ljCpvUxMvpKP4oAZ3~Pl9Qq1w7QpFea5cjaqcgI7~x-MM6X9rJCUTenlOA__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Mauris quis
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

          {/*Right Side Product 5 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/6fb6/f3b4/fef960e347563088a94ea7812920ab86?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QxpUMtkWh~MMED5TLrowQHuyPYSxl9uoFgJCjjWIAbTjNIKisyJJh0EhxsKrQwnekbJ4~rT-AZNww96LhpdwqaHAFxPCZQaUONcVFyDtWG3N57xjO16cJDdORx16Xa3r~MdGP36Z~bOq6~tAX-eJ-dFPGWOtXtJe-2O8lPuzlCG0JFYNihUVdtE8XUqSPupXepBtlZB1SAcHikoSyDwdJfwgs~qe613zXX0KKRhbmYKZT914qRMiy2FqUEz9Jpr4kc7NA8PhxE7XauefC732ATCVRS31Q2dMpXmkOQnSKFVJ35k7UMdB2SmQRuso2N4LBAA-ektgkc1lyLqrGRpkuQ__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Morbi sagittis
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

          {/*Right Side Product 6 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/0dda/7e5e/91ce04688d47d30605254fba321c2ac4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c4fNPI1Ekii99g-OEXkZcF-J8sKQ7m-vMfed3kUMJostVNA9NMepiub6SuVUdy9ZBoZRTvuJM6h2sw~884hSB~RQ7j~TMc4KowU9KpYQ0dEEFflNdjV8mqUDtItQU~onmsZXhVFxYxli87-2HH0AJxSbWnfQkhoXv6VjE0fb8FCBiSPaLEVgHBw42vO-rhUGuLBIZzIwJxv~U1yam17uxEkJdChiwuLSLBjIh1Nz17AvDzrseOUuWYxLSQTQCCGOZ1soKFtjkwvmNmGd9lO0mI6Mx~30dFJ8rhDxo~I8mvU6ZZA7qtVjXmX6XG3lP1G4RENNuheYOwOtSXHhsTXNJA__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Ultricies venenatis
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

          {/*Right Side Product 7 */}
          <div className="RS-S  flex bg-white rounded-lg shadow-md mt-5 p-4 items-start space-x-4">
            {/* Image Section */}
            <div className="w-1/4 ">
              <img
                src="https://s3-alpha-sig.figma.com/img/25e4/5c3e/19fd44bb09bd3e7a5aadae479bd37523?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdVkq5nPJGkIkiS5SXKT8zzY882ocfXuMYyLH3QbfTjdTgwa5BhTRDjx546UgG-q4FOPZBjZ5F7wOSm39e39P3w14DjdXQzYRCJARPgGnMp8ahU~pSMn7YO7pzYZYk0fbGqyd3GwhOPlGqNI-bsrozurTW6TNG0x7FJf-ITuK8FYa~K78Ml3pb7BvE0IvRsck7lnbnSjpAX0B5nts6Vj2Yz~ACWZTCxHoAjKdlodCM7GuTV9gHzo86iqhi~ph93jTHh1GNkxCv6u5kSCHz1o2yttqjrisjvAcrSS80T687z28bHbxrg-48xlFgx7grDVD0XqOExisE5OmOc7w17Bzw__"
                alt="Product"
                className="rounded-lg object-cover RS-P-img"
              />
            </div>

            {/* Content Section */}
            <div className="w-2/3">
              {/* Product Title and Colors */}
              <div className="flex justify-betwee items-center">
                <h2 className="text-lg font-bold text-blue-900">
                Scelerisque dignissim
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
