"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function ContactUs() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Contact Us</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Contact</p>
            <p className="ml-3 text-pink-400">Contact Us</p>
          </h1>
        </span>
      </div>

      {/*Contact Us Section*/}

      <section>
        <div className="flex justify-center space-x-24">
          {/*Left Section*/}

          <div>
            <div className=" mt-20">
              {/*Information About us*/}

              <h1 className="text-blue-900 text-3xl font-sans font-bold">
                Information About us
              </h1>

              <p className="mt-4 text-sm text-gray-400 font-medium font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices <br />
                mattis aliquam, malesuada diam est. Malesuada sem tristique amet
                erat vitae <br />
                eget dolor lobortis. Accumsan faucibus vitae lobortis quis
                bibendum quam.
              </p>

              <span className="flex space-x-2.5 mt-9">
                <p className="w-6 h-6 bg-indigo-700 rounded-full"></p>
                <p className="w-6 h-6 bg-pink-500 rounded-full"></p>
                <p className="w-6 h-6 bg-cyan-400 rounded-full"></p>
              </span>

              {/*Get In Touch*/}

              <h1 className="text-blue-900 text-3xl font-sans font-bold mt-32">
                Get In Touch
              </h1>
              <p className="mt-5 text-sm text-gray-400 font-medium font-sans leading-[1.5] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices <br />
                tristique amet erat vitae eget dolor los vitae lobortis quis
                bibendum quam.
              </p>

              <div className="flex mt-7">
                <span className="flex items-center mt-3 ">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-56 h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black"
                  />
                </span>

                <span className="flex items-center mt-3 ml-12">
                  <input
                    type="text"
                    placeholder="Your E-mail"
                    className="w-56 h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black"
                  />
                </span>
              </div>

              <span className="flex items-center mt-8">
                <input
                  type="text"
                  placeholder="Subject*"
                  className="GIT-S-M h-10 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black"
                />
              </span>

              <span className="flex items-center mt-10">
                <input
                  type="text"
                  placeholder="Type Your Message*"
                  className="GIT-S-M h-40 pb-28 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black"
                />
              </span>

              <button className="bg-pink-500 text-white font-sans text-sm px-9 py-2.5 font-medium rounded mt-10 hover:bg-pink-600">
                Send Mail
              </button>
            </div>
          </div>

          {/*Right Section*/}

          <div>
            <div className="mt-20 ">
              <h1 className="text-blue-900 text-3xl font-sans font-bold">
                {" "}
                Contact Way
              </h1>

              <div className="mt-6 flex space-x-10">
                <span className="flex items-center font-sans text-gray-400 text-xs leading-[1.6] ">
                  <p className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></p>
                  Tel: 877-67-88-99 <br />
                  E-Mail: shop@store.com
                </span>
                <span className="flex items-center font-sans text-gray-400 text-xs leading-[1.6] ">
                  <p className="w-8 h-8 bg-pink-500 rounded-full mr-3"></p>
                  Support Forum <br />
                  For over 24hr
                </span>
              </div>
              <div className="mt-8 flex space-x-10">
                <span className="flex items-center font-sans text-gray-400 text-xs leading-[1.6] ">
                  <p className="w-8 h-8 bg-orange-400 rounded-full mr-3"></p>
                  20 Margaret st, London <br />
                  Great britain, 3NM98-LK
                </span>
                <span className="flex items-center font-sans text-gray-400 text-xs leading-[1.6] ">
                  <p className="w-8 h-8 bg-green-400 rounded-full mr-3"></p>
                  Free standard shipping <br />
                  on all orders.
                </span>
              </div>

              <img src="/images/CU-RS-img.png" alt="" className="mt-28" />
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-60">
        <Footer />
      </div>

    </main>
  );
}
