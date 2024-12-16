"use client";

import Link from "next/link";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {

  /*Home*/
  
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const handleSelectHome = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Home") {
      window.location.href = "/";
    } else if (value === "Hekto Demo") {
      window.location.href = "/HektoDemo";
    }
  };
  
    /*Pages*/
  
  const [isOpen2, setIsOpen2] = useState(false); // State to toggle dropdown visibility
  const handleSelectPage = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Shopping Cart") {
      window.location.href = "/ShoppingCart";
    } else if (value === "About Us") {
      window.location.href = "/AboutUs";
    } else if (value === "FAQs") {
      window.location.href = "/faqs";
    }
  };

  /*Product*/
  
  const [isOpen3, setIsOpen3] = useState(false);
  const handleSelectProduct = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Product Details") {
      window.location.href = "/Product/ProductDetails";
    }
  };

  /*Blog*/
  
  const [isOpen4, setIsOpen4] = useState(false);
  const handleSelectBlog = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Blog Page") {
      window.location.href = "/Blog/BlogPage";
    }
  };
 
  /*Shop*/

  const [isOpen5, setIsOpen5] = useState(false);
  const handleSelectShop = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Shop Grid Default") {
      window.location.href = "/Shop/ShopGridDefault";
    } else if (value === "Shop List") {
      window.location.href = "/Shop/ShopList";
    } else if (value === "Shop Left Sidebar") {
      window.location.href = "/Shop/ShopLeftSidebar";
    }
  };

  /*Contact*/

  const [isOpen6, setIsOpen6] = useState(false);
  const handleSelectContact = (value: string) => {
    // Handle navigation based on selected value
    if (value === "Contact") {
      window.location.href = "/ContactUs";
    }
  };

  return (
    <main className="page">

      {/*Navigation*/}
      <div className="bg-purple-600 w-full h-10 flex justify-center items-center">
        <span className="flex">
          <h1 className="flex items-center text-white text-sm font-sans">
            <CiMail className="text-white mr-2" />
            hamailsyed139@gmail.com
          </h1>
          <h1 className="flex items-center text-white text-sm font-sans">
            <FaPhoneAlt className="text-white mr-2 ml-10" />
            +92 3363351905
          </h1>
        </span>

        <span className="flex text-white text-sm font-sans">

          <h1 className="flex items-center ml-40">
            English
            <IoIosArrowDown className="ml-0.5" />
          </h1>
          <h1 className="flex items-center ml-5">
            USD
            <IoIosArrowDown className="ml-0.5" />
          </h1>
          
          <Link href={"/Login"}>
          <h1 className="flex items-center ml-5">
            Login
            <FiUser className="ml-0.5" />
          </h1>
          </Link>

          <h1 className="flex items-center ml-5">
            Wishlist
            <CiHeart className="ml-0.5" />
          </h1>
          <Link href={"/ShoppingCart"} className="flex items-center ml-8">
            <AiOutlineShoppingCart className="w-4 h-5" />
          </Link>
        </span>
      </div>

      {/*Header*/}

      <header className="flex justify-center bg-white text-sm">
        <div className="flex p-5">
          <Link href={"/"}>
            <h1 className="ml-7 text-xl font-bold md:py-1">Hekto</h1>
          </Link>

          <nav className="flex md:mr-auto md:ml-14 md:py-2">

            {/*Home*/}
            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Home
              </button>

              {/* Dropdown Options */}
              {isOpen && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectHome("Home")}
                  >
                    Home
                  </div>
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectHome("Hekto Demo")}
                  >
                    Hekto Demo
                  </div>
                </div>
              )}
            </div>

            {/*Pages*/}
            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Pages
              </button>

              {/* Dropdown Options */}
              {isOpen2 && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectPage("Shopping Cart")}
                  >
                    Shopping Cart
                  </div>
                  <div
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectPage("About Us")}
                  >
                    About Us
                  </div>
                  <div
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectPage("FAQs")}
                  >
                    FAQs
                  </div>
                </div>
              )}
            </div>

            {/*Product*/}
            
            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Product
              </button>

              {/* Dropdown Options */}
              {isOpen3 && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectProduct("Product Details")}
                  >
                    Product Details
                  </div>
                </div>
              )}
            </div>

            {/*Blog*/}
            
            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen4(!isOpen4)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Blog
              </button>

              {/* Dropdown Options */}
              {isOpen4 && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectBlog("Blog Page")}
                  >
                    Blog Page
                  </div>
                </div>
              )}
            </div>

            {/*Shop*/}

            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen5(!isOpen5)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Shop
              </button>

              {/* Dropdown Options */}
              {isOpen5 && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectShop("Shop Grid Default")}
                  >
                    Shop Grid Default
                  </div>
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectShop("Shop List")}
                  >
                    Shop List
                  </div>
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectShop("Shop Left Sidebar")}
                  >
                    Shop Left Sidebar
                  </div>
                </div>
              )}
            </div>

            {/*Contact*/}

            <div className="relative inline-block">
              {/* Dropdown Label */}
              <button
                onClick={() => setIsOpen6(!isOpen6)}
                className="mr-7 text-black hover:text-pink-400 font-bold"
              >
                Contact
              </button>

              {/* Dropdown Options */}
              {isOpen6 && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                  <div
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-pink-500 cursor-pointer"
                    onClick={() => handleSelectContact("Contact")}
                  >
                    Contact Us
                  </div>
                </div>
              )}
            </div>

            <span className="flex items-center pl-28">
              <input
                type="search"
                className="w-48 h-7 bg-white border border-gray-300 text-black"
              />
              <p className="bg-pink-500 w-10 h-7 flex justify-center items-center">
                <CiSearch className="text-white font-bolder w-8 h-5 " />
              </p>
            </span>

          </nav>
        </div>
      </header>
    </main>
  );
}
