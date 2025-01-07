"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import {
  FaFacebookF,
  FaPenNib,
  FaRegCalendarAlt,
  FaTwitter,
} from "react-icons/fa";

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}

      <div className="bg-[#cde7ff] w-full py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            Blog Page
          </h1>

          {/* Breadcrumb */}
          <div className="flex justify-center md:justify-start mt-3 space-x-2 text-sm font-bold">
            <Link href="/" className="text-black hover:text-pink-400">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <p className="text-black">Blog</p>
            <span className="text-gray-500">/</span>
            <p className="text-pink-400">Blog Page</p>
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row mt-24 p-4 lg:p-0">
        {/* Blog Left Section */}
        <div className="w-full lg:w-2/3 lg:ml-10">
          {/* Blog 1 */}
          <div className="mb-10">
            <img
              src="/images/BP-img1.jpg"
              alt="Blog 1"
              className="rounded w-full h-auto"
            />
            <div className="flex items-center mt-8">
              <FaPenNib className="w-3 mb-1 text-pink-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Surf Auxion
              </h2>
              <FaRegCalendarAlt className="ml-10 mb-1 w-3 text-yellow-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Aug 09 2020
              </h2>
            </div>
            <h1 className="font-bold text-blue-900 text-2xl mt-7">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-sm font-sans text-gray-400 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <Link href={"/Blog/SingleBlog"}>
              <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
                Read More
                <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
              </h1>
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="mb-10">
            <img
              src="/images/BP-img2.jpg"
              alt="Blog 2"
              className="rounded w-full h-auto"
            />
            <div className="flex items-center mt-8">
              <FaPenNib className="w-3 mb-1 text-pink-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Surf Auxion
              </h2>
              <FaRegCalendarAlt className="ml-10 mb-1 w-3 text-yellow-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Aug 09 2020
              </h2>
            </div>
            <h1 className="font-bold text-blue-900 text-2xl mt-7">
              Aenean vitae in aliquam ultrices lectus. Etiam.
            </h1>
            <p className="text-sm font-sans text-gray-400 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
              Read More
              <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
            </h1>
          </div>

          {/* Blog 3 */}
          <div className="mb-10">
            <img
              src="/images/BP-img3.jpg"
              alt="Blog 3"
              className="rounded w-full h-auto"
            />
            <div className="flex items-center mt-8">
              <FaPenNib className="w-3 mb-1 text-pink-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Surf Auxion
              </h2>
              <FaRegCalendarAlt className="ml-10 mb-1 w-3 text-yellow-500" />
              <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                Aug 09 2020
              </h2>
            </div>
            <h1 className="font-bold text-blue-900 text-2xl mt-7">
              Sit nam congue feugiat nisl, mauris amet nisi.
            </h1>
            <p className="text-sm font-sans text-gray-400 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
              Read More
              <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
            </h1>
          </div>

          {/* Pagination */}
          <div className="flex mt-20 justify-center text-center space-x-5">
            <h1 className="bg-pink-500 px-3 py-1 pt-1 border-2 border-pink-500 text-xs text-white font bold rounded">
              1
            </h1>
            <h1 className="border-2 px-3 py-1 text-xs text-gray-400 font bold rounded">
              2
            </h1>
            <h1 className="border-2 px-3 py-1 text-xs text-gray-400 font bold rounded">
              3
            </h1>
            <h1 className="border-2 px-3 py-1 text-xs text-gray-400 font bold rounded">
              4
            </h1>
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
      </section>

      {/* As Seen In */}
      <div className="flex justify-center mt-5 px-4 sm:px-6 lg:px-8">
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
