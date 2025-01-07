"use client";

import Footer from "@/app/footer/page";
import Header from "@/app/header/page";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import {
  FaFacebookF,
  FaPenNib,
  FaRegCalendarAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaComment } from "react-icons/fa6";

export default function SingleBlog() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Single Blog
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Blog</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Single Blog</p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row mt-24">
          {/* Blog Left Section */}
          <div className="lg:w-2/3 lg:ml-10">
            <div className="w-full mt-4 rounded">
              {/* Blog Image */}
              <img
                src="/images/BP-img1.jpg"
                alt="Blog Post"
                className="rounded w-full"
              />

              {/* Blog Meta */}
              <div className="flex flex-wrap items-center mt-8">
                <FaPenNib className="w-3 mb-1 text-pink-500" />
                <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                  Surf Auxion
                </h2>
                <FaRegCalendarAlt className="ml-4 lg:ml-10 mb-1 w-3 text-yellow-500" />
                <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                  Aug 09 2020
                </h2>
              </div>

              {/* Blog Title */}
              <h1 className="font-bold text-blue-900 text-2xl mt-7">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>

              {/* Blog Content */}
              <p className="text-sm font-sans text-gray-400 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              {/* Additional Content */}
              <p className="text-sm font-sans text-gray-400 mt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              {/* Blockquote */}
              <p className="flex justify-center bg-gray-100 text-sm font-sans font-medium py-6 italic text-gray-400 border-l-2 border-pink-500 leading-[2] mt-12">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                consequat toamk risusu”
              </p>

              {/* Video and Image Section */}
              <div className="flex flex-col lg:flex-row justify-between items-center mt-12">
                <video className="w-full lg:w-1/2" controls muted>
                  <source src="/video/SingleBlogVideo.webm" type="video/webm" />
                </video>
                <img
                  src="/images/SB-img.jpg"
                  alt="Side Image"
                  className="w-full h-auto lg:h-[195px] lg:w-1/2 mt-6 lg:mt-0 lg:ml-6"
                />
              </div>

              {/* Products Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                {/* Product 1 */}
                <div>
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="/images/SB-S-img1.jpg"
                    />
                  </a>
                  <div className="mt-2">
                    <h2 className="text-blue-900 text-center title-font text-lg font-medium">
                      Quam sed
                    </h2>
                    <div className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <div className="flex ml-3">
                        {[...Array(4)].map((_, i) => (
                          <p key={i} className="text-yellow-500 text-xs">
                            ★
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs">★</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div>
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="/images/SB-S-img2.jpg"
                    />
                  </a>
                  <div className="mt-2">
                    <h2 className="text-blue-900 text-center title-font text-lg font-medium">
                      Tristique sed
                    </h2>
                    <div className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <div className="flex ml-3">
                        {[...Array(4)].map((_, i) => (
                          <p key={i} className="text-yellow-500 text-xs">
                            ★
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs">★</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div>
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="/images/SB-S-img3.jpg"
                    />
                  </a>
                  <div className="mt-2">
                    <h2 className="text-blue-900 text-center title-font text-lg font-medium">
                      A etiam
                    </h2>
                    <div className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <div className="flex ml-3">
                        {[...Array(4)].map((_, i) => (
                          <p key={i} className="text-yellow-500 text-xs">
                            ★
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs">★</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 4 */}
                <div>
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full md:h-[235px] lg:h-[115px] block bg-gray-100"
                      src="/images/SB-S-img4.jpg"
                    />
                  </a>
                  <div className="mt-2">
                    <h2 className="text-blue-900 text-center title-font text-lg font-medium">
                      Mi nisi
                    </h2>
                    <div className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <div className="flex ml-3">
                        {[...Array(4)].map((_, i) => (
                          <p key={i} className="text-yellow-500 text-xs">
                            ★
                          </p>
                        ))}
                        <p className="text-gray-500 text-xs">★</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <p className="text-sm font-sans text-gray-400 mt-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              {/* Additional Content */}
              <p className="text-sm font-sans text-gray-400 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center mt-16">
                <span className="inline-flex space-x-4">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF className="w-6 h-6 px-2 py-1 text-white bg-indigo-700 rounded-full" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiFillInstagram className="w-6 h-6 px-1 py-1 text-white bg-pink-500 rounded-full" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <FaTwitter className="w-6 h-6 px-1 py-1 text-white bg-blue-400 rounded-full" />
                  </a>
                </span>
              </div>

              {/* Previous/Next Post */}
              <div className="flex justify-between px-5 py-2 bg-gray-100 mt-5">
                <h1 className="flex items-center text-gray-400 font-sans font-medium">
                  <FaLongArrowAltLeft className="mr-1" />
                  Previous Post
                </h1>
                <h1 className="flex items-center text-gray-400 font-sans font-medium">
                  Next Post
                  <FaLongArrowAltRight className="ml-1" />
                </h1>
              </div>

              {/* Blog Posts */}
              <div className="mt-20">
                {/* Blog Post 1 */}
                <div className="md:w-[660px] px-3.5 py-3.5 bg-white shadow-lg mb-5">
                  <div className="flex items-center">
                    <img
                      src="/images/SB-B1-img1.jpg"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <div className="flex items-center space-x-4">
                        <h1 className="font-medium text-xl font-sans text-blue-900">
                          Sapien ac
                        </h1>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          Jan 09 2020
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="md:w-[660px] px-3.5 py-3.5 bg-white shadow-lg mb-5">
                  <div className="flex items-center">
                    <img
                      src="/images/SB-B2-img2.jpg"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <div className="flex items-center space-x-4">
                        <h1 className="font-medium text-xl font-sans text-blue-900">
                          Augue conva
                        </h1>
                        <p className="text-xs text-gray-400 font-sans mt-0.5">
                          Aug 18 2020
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div className="mt-28">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="relative flex items-center">                  
                    <FaUser className="absolute text-gray-400 w-4 h-4 ml-3" />
                    <input
                      type="text"
                      placeholder="Your Name*"
                      className="w-full lg:w-72 h-10 text-sm font-sans bg-white border-2 border-gray-300 text-black pl-10 focus:outline-none"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <MdEmail className="absolute text-gray-400 w-4 h-4 ml-3" />
                    <input
                      type="text"
                      placeholder="Write Your Email*"
                      className="w-full lg:w-72 h-10 text-sm font-sans bg-white border-2 border-gray-300 text-black pl-10 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="relative flex mt-10">
                  <FaComment className="absolute text-gray-400 w-4 h-4 ml-3 mt-5" />
                  <textarea
                    placeholder="Write your comment*"
                    className="w-full lg:w-[593px] h-48 text-sm font-sans bg-white border-2 border-gray-300 text-black pl-10 focus:outline-none pt-3.5 "
                  />
                </div>

                <div className="flex items-center mt-5">
                  <input type="checkbox" className="mr-2" />
                  <p className="text-xs text-gray-400 font-sans">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>

                <button className="bg-pink-500 text-white font-sans px-8 py-2.5 font-medium rounded mt-10 hover:bg-pink-600">
                  Continue Shipping
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 lg:ml-10 lg:mr-5 mt-10 lg:mt-3">
            {/* Search Section */}
            <div>
              <h1 className="text-blue-900 font-semibold text-lg font-sans">
                Search
              </h1>
              <span className="flex items-center mt-3">
                <input
                  type="search"
                  placeholder="Search For Posts"
                  className="w-full lg:w-48 h-7 text-xs pl-2 bg-white border-t border-b border-l border-gray-300 text-black"
                />
                <p className="bg w-10 h-7 flex justify-center border-t border-b border-r border-gray-300 items-center">
                  <CiSearch className="text-gray-300 font-bolder w-6 h-4" />
                </p>
              </span>
            </div>

            {/* Categories Section */}
            <div className="mt-10">
              <h1 className="text-blue-900 font-semibold text-lg font-sans">
                Categories
              </h1>
              <div className="grid grid-cols-2 gap-2 mt-6 ">
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Hobbies (14)
                </button>
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Women (21)
                </button>
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Women (21)
                </button>
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Women (21)
                </button>
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Women (21)
                </button>
                <button className="text-sm font-sans text-blue-900 py-2 hover:bg-pink-500 hover:text-white rounded">
                  Women (21)
                </button>
              </div>
            </div>

            {/* Recent Post Section */}
            <div className="mt-8">
              <h1 className="text-blue-900 font-semibold text-lg font-sans">
                Recent Post
              </h1>
              {[
                {
                  id: 1,
                  img: "/images/BP-RP-img1.jpg",
                  title: "It is a long established fact",
                  date: "Aug 09 2020",
                },
                {
                  id: 2,
                  img: "/images/BP-RP-img2.jpg",
                  title: "It is a long established fact",
                  date: "Aug 09 2020",
                },
                {
                  id: 3,
                  img: "/images/BP-RP-img3.jpg",
                  title: "It is a long established fact",
                  date: "Aug 09 2020",
                },
                {
                  id: 4,
                  img: "/images/BP-RP-img4.jpg",
                  title: "It is a long established fact",
                  date: "Aug 09 2020",
                },
              ].map((post) => (
                <div key={post.id} className="mt-6">
                  <div className="flex items-center">
                    <img
                      src={post.img}
                      alt={`Product ${post.id}`}
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sale Product Section */}
            <div className="mt-8">
              <h1 className="text-blue-900 font-semibold text-lg font-sans">
                Sale Product
              </h1>
              {[
                {
                  id: 1,
                  img: "/images/BP-SP-img1.jpg",
                  title: "Elit ornare in enim mauris.",
                  date: "Aug 09 2020",
                },
                {
                  id: 2,
                  img: "/images/BP-SP-img2.jpg",
                  title: "Viverra pulvinar et enim.",
                  date: "Aug 09 2020",
                },
                {
                  id: 3,
                  img: "/images/BP-SP-img3.jpg",
                  title: "Mattis varius donec fdsfd",
                  date: "Aug 09 2020",
                },
              ].map((product) => (
                <div key={product.id} className="mt-6">
                  <div className="flex items-center">
                    <img
                      src={product.img}
                      alt={`Product ${product.id}`}
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        {product.title}
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        {product.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer Product Section */}
            <div className="mt-8">
              <h2 className="text-blue-900 font-semibold text-lg font-sans">
                Offer Product
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-2 mt-8">
                {[
                  {
                    id: 1,
                    img: "/images/BP-OP-img1.jpg",
                    title: "Duis lectus est.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    id: 2,
                    img: "/images/BP-OP-img2.jpg",
                    title: "Sed placerat.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    id: 3,
                    img: "/images/BP-OP-img3.jpg",
                    title: "Netus proin.",
                    price: "$12.00 - $15.00",
                  },
                  {
                    id: 4,
                    img: "/images/BP-OP-img4.jpg",
                    title: "Platea in.",
                    price: "$12.00 - $15.00",
                  },
                ].map((offer) => (
                  <div key={offer.id}>
                    <img
                      src={offer.img}
                      alt={`Offer ${offer.id}`}
                      className="rounded w-36 md:w-[140px] h-20"
                    />
                    <h1 className="text-sm text-blue-900 font-semibold font-sans mt-2">
                      {offer.title}
                    </h1>
                    <p className="text-xs text-gray-400 font-sans font-medium">
                      {offer.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Section */}
            <div className="mt-8">
              <h2 className="text-blue-900 font-semibold text-lg font-sans">
                Follow
              </h2>
              <div className="mt-4">
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start bg-white shadow-md px-2 py-1">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF className="w-6 h-6 px-2 py-1 text-white bg-indigo-700 hover:bg-indigo-800 rounded-full" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiFillInstagram className="w-6 h-6 px-1 py-1 text-white bg-pink-500 hover:bg-pink-600 rounded-full ml-3" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <FaTwitter className="w-6 h-6 px-1 py-1 text-white bg-blue-400 hover:bg-blue-500 rounded-full ml-3" />
                  </a>
                </span>
              </div>

              {/* Tags Section */}
              <div className="mt-8">
                <h2 className="text-blue-900 font-semibold text-lg font-sans">
                  Tags
                </h2>
                <div className="flex flex-wrap mt-4 gap-10">
                  {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map(
                    (tag) => (
                      <p
                        key={tag}
                        className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 hover:text-pink-500 hover:border-pink-500"
                      >
                        {tag}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <div className="flex justify-center mt-5 lg:mt-14 px-4 sm:px-6 lg:px-8">
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
