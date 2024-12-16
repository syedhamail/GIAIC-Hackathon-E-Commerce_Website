"use client";

import Link from "next/link";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default function Footer(){
    return(

        //Footer

    <footer className="footer">
    <div className=" container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  
      <div className="ml-10 flex-shrink-0 text-center md:text-left">
        <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="font-bold text-2xl text-black">Hekto</span>
        </Link>
        <br/>
        <span className="flex items-center">
          <input type="email" placeholder="Enter Email Address" className="w-48 h-7 bg-white text-sm text-center text-black"  />
          <button className=" bg-pink-500 text-sm text-center text-white w-28 h-7 rounded">Sign Up</button>
        </span>
  
        <h1 className="mt-7  text-gray-500 text-sm">
          Contact Info <br />
          <p className="mt-2 text-xs">17 Princess Road, London, Greater London NW1 8JR, UK</p>  
        </h1>
  
      </div>
  
      <div className="flex-grow flex flex-wrap md:pl-32 -mb-10 md:mt-0 mt-10 ml-3 md:text-left text-center">
  
        <div className="">
          <h2 className="title-font font text-black tracking-widest text-xl ">Categories</h2>
          <br/>
          <nav className="list-none ">
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm">Laptops & Computers</Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 mb-10 text-sm"><h1 className="mt-3">Cameras & Photography</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 text-sm"><h1 className="mt-3">Smart Phones & Tablets</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Video Games & Consoles</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Waterproof Headphones</h1></Link>
            </li>
          </nav>
        </div>
  
        <div className="ml-20">
          <h2 className="title-font font-medium text-black tracking-widest text-xl">Customer Care</h2>
          <br/>
          <nav className="list-none ">
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm">My Account</Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 mb-10 text-sm"><h1 className="mt-3">Discount</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 text-sm"><h1 className="mt-3">Returns</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Orders History</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Order Tracking</h1></Link>
            </li>
          </nav>
        </div>
  
        <div className="ml-20">
          <h2 className="title-font font-medium text-black tracking-widest text-xl">Pages</h2>
          <br/>
          <nav className="list-none ">
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm">Blog</Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 mb-10 text-sm"><h1 className="mt-3">Browse the Shop</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500 text-sm"><h1 className="mt-3">Category</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Pre-Built Pages</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">Visual Composer Elements</h1></Link>
            </li>
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500  text-sm"><h1 className="mt-3">WooCommerce Pages</h1></Link>
            </li>
          </nav>
        </div>
  
      </div>
    </div>
    
    <div className="footer2part">
      <div className="items-center  container mx-auto py-4 px-5 pt-2 pb-2 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 font-normal text-center text-sm ml-44">©Webecy - All Rights Reserved
        </p>
  
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mr-44 justify-center sm:justify-start"> 
        <a href="https://www.facebook.com/"><FaFacebook className="w-5 h-7 ml- text-blue-900"/></a>
        <a href="https://www.instagram.com/"><AiFillInstagram className="w-6 h-7 ml-3 text-blue-900" /></a>
        <a href="https://www.twitter.com/"><FaTwitter  className="w-5 h-7 ml-3 text-blue-900"/></a>      
        </span>
        
      </div>
    </div>
    </footer>

    )
}