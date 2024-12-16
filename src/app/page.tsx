"use client";

import React from "react";
import Header from "./header/page";
import Footer from "./footer/page";
import Link from "next/link";

import { TbTruckDelivery } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main> 
      {/*Header Section*/}

      <Header />

      {/*Hero Section*/}

      <section className="HS">
        <div>
          <img
            className="ml-32 h-48"
            src="https://page.themespride.com/carpenter-workshop/wp-content/themes/carpenter-workshop-pro/assets/images/slider/slide-lamp.png"
            alt=""
          />
        </div>

        {/*Hero Section-Text*/}
        <div
          style={{
            position: "absolute",
            top: "36%",
            left: "20%",
            color: "rgb(234, 22, 149)",
            fontSize: "13px",
            fontWeight: "bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          Best Furniture For Your Castle...
        </div>

        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            color: "black",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          <h1>New Furniture Collection</h1>{" "}
          <h1 className="-mt-2">Trends in 2020</h1>
        </div>

        <div
          style={{
            position: "absolute",
            top: "59%",
            left: "20%",
            color: "black",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing <br />
          in phasellus non in justo.
        </div>

        {/*Hero Section-Shop now Button*/}
        <div
          style={{
            position: "absolute",
            top: "68%",
            left: "20%",
            color: "black",
            fontSize: "11px",
            fontWeight: "bold",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          }}
        >
          <button className="bg-pink-500 px-7 py-2.5 text-white ">
            Shop Now
          </button>
        </div>

        {/*Hero Section-2nd Img Bg*/}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "55%",
            backgroundColor: "rgb(233, 233, 233)",
            borderRadius: "50%",
            overflow: "hidden",
            width: "380px",
            height: "380px",
          }}
        ></div>

        {/*Hero Section-2nd Img*/}
        <div
          style={{
            position: "absolute",
            top: "26%",
            left: "52%",
            width: "480px",
            height: "600px",
          }}
        >
          <img className="w-full" src="/images/HS-S.png" alt="" />
        </div>

        {/*Hero Section-50%off text*/}

        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "77%",
            width: "85px",
            height: "85px",
            backgroundColor: "aqua",
            borderRadius: "50%",
            overflow: "hidden",
            font: "bold",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <h1 className="flex justify-center text-center mt-4">
            50% <br />
            off
          </h1>
        </div>

        {/*Hero Section-3 dots*/}
        <div
          style={{
            position: "absolute",
            top: "90%",
            left: "47%",
            flex: "center",
          }}
        >
          <span className="flex">
            <h1 className="bg-pink-400 w-2 h-2 rounded"></h1>
            <h1 className="w-2 h-2 ml-1.5 rounded border border-pink-400"></h1>
            <h1 className="w-2 h-2 ml-1.5 rounded border border-pink-400"></h1>
          </span>
        </div>
      </section>

      {/*Featured Products*/}

      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-3 font-bold">
              Featured Products
            </span>
          </div>

          <div className="flex flex-wrap ml-10 -mr-3">
            {/*Item 1*/}
            <div className="item-bg lg:w-1/5 lg:h-2/6 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-70 h-70 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1ASbX5PQ2xgkZQUVT7fty3DynXlxANL8qO7IW9wlpV268-RxQDtE0hx8rHqWqchih~We1J7ct41jlqizDklTOyDwJf5rNeexRN0TQ4ofReelqg8AAuSqkLUmt5CRUl0gMtBipAaF6qgJHFfXKsXhYeLJ3xkLNjy3YHciF5OtkD~ion-eT4JSywJ14Llo~WekPvS9oB6Vcrrf66ItGWDKcZ0Q36qjQDhv96sBH~gPG~xVzO8N7RWSWdqDTVd-k6DvfIpRZGhEIM-Xq4SzNW0Zg85v9CcuqGx~kqQtYx9qngixxXg3moXFnASwQurY8uP7m3xjVf7nYkMx-KrVER0oA__"
                />
              </Link>
              <div className="mt-5">
                <Link href={"/"}>
                  <h2 className=" text-pink-500 title-font font-bold text-xl flex justify-center hover:text-white">
                    Cantilever chair
                  </h2>
                </Link>

                <span className="flex  mt-2">
                  <div className="bg-green-500 w-4 pb-1.5 rounded ml-24"></div>
                  <div className="bg-pink-500 w-4 pb-1.5 rounded ml-2"></div>
                  <div className="bg-purple-500 w-4 pb-1.5 rounded ml-2"></div>
                </span>

                <h2 className=" text-gray-500 font-bold mt-2 text-sm flex justify-center">
                  Code - Y523201
                </h2>

                <p className=" mt-2 flex justify-center ml- text-gray-500 font-semibold pb-10">
                  $42.00
                </p>
              </div>
            </div>

            {/*Item 2*/}
            <div className="item-bg lg:w-1/5 lg:h-2/6 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-70 full rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-60 block"
                  src="https://s3-alpha-sig.figma.com/img/db5f/e91e/81f40d5069977639c120b46b02efd85d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GboJek~DN13nVfBwMPMzJD0e05J9~EjxRxU97-8tABYs-uGN2qEB0ez~QWWItTQHzb0yUmFm04d9yvSbauLegwnMgwwPQIDBOHM3EBEqQnGA2lO5XCCTnILUZnykm3uWWsiQONR8OZXKKJwDIRh7Z~XEvKn9e1V0IqY0MDJFldpyPVD-gsAGJlGTu9phA05u7S~cMFunQ~FPaf8ppJu9JB-7qYhxRjPaqR3t~DSHzhjL7iwyPMw4PMjHW8D6sTDhO5fhsGW87K7AO1TwOtQyUbUpiDwIdco6AqqTEZvRCiZOigp4qhSfNYlUU8RdhUwjjjCaw09UK9To~ITvjJDvXw__"
                />
              </Link>

              <div className=" mt-5 ">
                <Link href={"/"}>
                  <h2 className=" text-pink-500 title-font font-bold text-xl flex justify-center hover:text-white">
                    Cantilever chair
                  </h2>
                </Link>
                <span className="flex  mt-2">
                  <div className="bg-green-500 w-4 pb-1.5 rounded ml-24"></div>
                  <div className="bg-pink-500 w-4 pb-1.5 rounded ml-2"></div>
                  <div className="bg-purple-500 w-4 pb-1.5 rounded ml-2"></div>
                </span>

                <h2 className=" text-gray-500 font-bold mt-2 text-sm flex justify-center">
                  Code - Y523201
                </h2>

                <p className=" mt-2 flex justify-center ml- text-gray-500 font-semibold pb-10">
                  $42.00
                </p>
              </div>
            </div>

            {/*Item 3*/}
            <div className="item-bg lg:w-1/5 lg:h-2/6 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-70 h-70 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/ac53/427c/ec2feb66129667973939b2ea5191c695?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUi~zB9-c~eGQGzT8TwiRHmFUgjb56OaKZd08UFUtANf-9dGje10O1RlD16wWiH1CvV2vf~ZetN~-TEO2f8ayS856NvZYuR36C0XKy39f1oD8NAAVXMmWl2KmM9tvUQpTIDKPtRBZnhW5y92B-GLHOCOB~Jw9L9epJ~qAFSPm2lcvR2CznAYRcQvOreGoBQfmf2LyOhyK3CZHmkGA8xxhBGy-qnkyaxgHI5Vr4odi6x4Yo610KD5is-C9E1m3FXbXdaDyX~H0Lf1Ia0arsV5NrYRa1j42BKoG7NHpD1ZUYUqxuZg3E15gTDNZ855pGsDBMNU4M6GLIoq7lu9WTCBwA__"
                />
              </Link>
              <div className="mt-5">
                <Link href={"/"}>
                  <h2 className=" text-pink-500 title-font font-bold text-xl flex justify-center hover:text-white">
                    Cantilever chair
                  </h2>
                </Link>

                <span className="flex  mt-2">
                  <div className="bg-green-500 w-4 pb-1.5 rounded ml-24"></div>
                  <div className="bg-pink-500 w-4 pb-1.5 rounded ml-2"></div>
                  <div className="bg-purple-500 w-4 pb-1.5 rounded ml-2"></div>
                </span>

                <h2 className=" text-gray-500 font-bold mt-2 text-sm flex justify-center">
                  Code - Y523201
                </h2>

                <p className=" mt-2 flex justify-center ml- text-gray-500 font-semibold pb-10">
                  $42.00
                </p>
              </div>
            </div>

            {/*Item 4*/}
            <div className="item-bg lg:w-1/5 lg:h-2/6 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-70 h-full rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-60 block"
                  src="https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiOcOmW4pI3zdbRIy~FsfCDeiAEPJ~ABdrN-HK-u-3vVZjkNsB61LDvNkR9SUVAtxQ3xPtK63SKl7NoGBW1hta7iHodghSuzkElrrW~gRC-KzqJYFR6kLC0IULdcRtv226jyLdN0Vi75KH1FNi2HHlngDTWVa3ieNZD-qeZBPZ~Kz1wsvbAdtftPfeFZMl7Y19hnuUbENdLCUrh3aeb9fshdvYf9hFceCyYfOor7pxJ25PUEz-xpy2dJM5HQTsd~JMnVf2caw2il9NqCyMIYzEz91OFSICSxK3P9L69F5nmVkStedViXXuvQVzV3ukUCCeg0AApGyh4ftLoDDchkrg__"
                />
              </Link>
              <div className="mt-5">
                <Link href={"/"}>
                  <h2 className=" text-pink-500 title-font font-bold text-xl flex justify-center hover:text-white">
                    Cantilever chair
                  </h2>
                </Link>
                <span className="flex  mt-2">
                  <div className="bg-green-500 w-4 pb-1.5 rounded ml-24"></div>
                  <div className="bg-pink-500 w-4 pb-1.5 rounded ml-2"></div>
                  <div className="bg-purple-500 w-4 pb-1.5 rounded ml-2"></div>
                </span>

                <h2 className=" text-gray-500 font-bold mt-2 text-sm flex justify-center">
                  Code - Y523201
                </h2>

                <p className=" mt-2 flex justify-center ml- text-gray-500 font-semibold pb-10">
                  $42.00
                </p>
              </div>
            </div>
          </div>

          <span className="flex justify-center  mt-10">
            <div className="bg-pink-500 w-7 pb-1 rounded -ml-9"></div>
            <div className="bg-pink-300 w-5 pb-1 rounded ml-2"></div>
            <div className="bg-pink-300 w-4 pb-1 rounded ml-2"></div>
            <div className="bg-pink-300 w-4 pb-1 rounded ml-2"></div>
          </span>
        </div>
      </section>

      {/*Latest Products*/}

      <section>
        <div className="container px-5 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-3 font-bold">
              Latest Products
            </span>
          </div>

          <nav className="flex justify-center mt-2">
            <Link
              href={"/"}
              className="mr-10 text-black font-bold hover:text-pink-400 hover:border-2 border-blue-600 border-solid"
            >
              New Arrival
            </Link>

            <Link
              href={"/"}
              className="mr-10 text-black hover:text-pink-400 font-bold hover:border-2 border-blue-600 border-solid"
            >
              Best Seller
            </Link>

            <Link
              href={"/"}
              className="mr-10 text-black hover:text-pink-400 font-bold hover:border-2 border-blue-600 border-solid"
            >
              Featured
            </Link>

            <Link
              href={"/"}
              className=" text-black hover:text-pink-400 font-bold hover:border-2 border-blue-600 border-solid"
            >
              Special Offer
            </Link>
          </nav>

          <div className="flex flex-wrap ml-20 mt-7 -mr-3">
            {/*Item 1*/}
            <div className="lg:w-1/4 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/4e1b/8c82/f15b5765f466da190975101e10dfdab2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7Z7r55L5ju3SPvVVSihI-PWF3QcuX6TmdTjQ7KzeB0XxgwjOY1X3laCv6xAereqdXpWncX-FOmMZhNVTiXB3xAeFNiREs8bdU5g6zGC1CevkMRLPz5puykwi0lgWmGiqQ5C3h6h35CTl2GkmzD5Hvap1OybPbO4PA0eGjECHXSLF~yOqbPiKtBMev2F8xnLlrLp3RImUXNHLB~SXk~ssRL0IONIFNAlIAwijZfPsArZtDAenNh5dG18IlIz6bVBCaqjAeOm43l0sGz9cBDk4JNXkknzZrxnAR-hutKfrWk3aZlybMDFwwC5WnFrwzDSWtokibWNHx4T8zvxxu70PA__"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>

            {/*Item 2*/}
            <div className="lg:w-1/4 m-5 ml-14 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="/images/LP-S.png"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="flex ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>

            {/*Item 3*/}
            <div className="lg:w-1/4 m-5 ml-14 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1ASbX5PQ2xgkZQUVT7fty3DynXlxANL8qO7IW9wlpV268-RxQDtE0hx8rHqWqchih~We1J7ct41jlqizDklTOyDwJf5rNeexRN0TQ4ofReelqg8AAuSqkLUmt5CRUl0gMtBipAaF6qgJHFfXKsXhYeLJ3xkLNjy3YHciF5OtkD~ion-eT4JSywJ14Llo~WekPvS9oB6Vcrrf66ItGWDKcZ0Q36qjQDhv96sBH~gPG~xVzO8N7RWSWdqDTVd-k6DvfIpRZGhEIM-Xq4SzNW0Zg85v9CcuqGx~kqQtYx9qngixxXg3moXFnASwQurY8uP7m3xjVf7nYkMx-KrVER0oA__"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ml-20 -mr-3">
            {/*Item 4*/}
            <div className="lg:w-1/4 m-5 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/e8d0/7d05/5f94bd8eef92ee5845fcca1420c3e6fa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qApKWtYTo8tuuzgaZH~leeyvu-Ab2it6P-22fhZtPkbZuqnICw-iHyfY9C9yL7oCA1d2XmnXwi8cj72QHmoHQ5kqYJxn-H2Mv0mLOBQa8OMYwMF5ViHqnWQRuiCGsjJbMkUlMOZNNpYag23BjchVemWnABeUHPFKNlhiBgvn69FdEgdbAnxAJCQueBfwDBtGvj~6AJU4A-PqiWn5huvXHxLk-M1rp6VhPT8LvQuyNuSXK6IAOAgUpnsAkZIqvCKjvwlxWdEQmy-ZhKpSjbN6-RXFoWJAZX67IHtWSRjHPLoEWy9meUDwEi1LR-ElHhdA~djQ-1wNFg6jWmTEfhZ-Og__"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>

            {/*Item 5*/}
            <div className="lg:w-1/4 m-5 ml-14 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZIGKfdtLzEgHMKhw~aqegJR7L5YcGgudDkH2jD6Uj87CeYNgVaT8sQnwULBZ3v4wHkVOtlIoV2N3-toZyYJRReFGaesEIKfnoQJKO7FKa7w2Ucj3AwQsY2Krg6rgeIGRrImSmK4dXdRLUZ1yjnhPCAPLGztdzuk8WrhP6m1GsE6hvCPpyBqoh6dBK1YPoDDvFydAgjIbiQjvGda1NZO3SCk3FtIUjxSfZY0PB7F2jQ4ifNVpwSLm8mcs1VSveB62xkIDpP1uzZ7pfCCmcsZn9qI2GxooLriK27X4C30AS~E~JfSp8vToma8xQdWL~MWP14NfPjq5xnX0YcdaEL0V-w__"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>

            {/*Item 6*/}
            <div className="lg:w-1/4 m-5 ml-14 w-full">
              <Link
                href={"/"}
                className="block relative w-80 h-80 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="bg-gray-200 object-cover object-center w-full h-full block"
                  src="https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiOcOmW4pI3zdbRIy~FsfCDeiAEPJ~ABdrN-HK-u-3vVZjkNsB61LDvNkR9SUVAtxQ3xPtK63SKl7NoGBW1hta7iHodghSuzkElrrW~gRC-KzqJYFR6kLC0IULdcRtv226jyLdN0Vi75KH1FNi2HHlngDTWVa3ieNZD-qeZBPZ~Kz1wsvbAdtftPfeFZMl7Y19hnuUbENdLCUrh3aeb9fshdvYf9hFceCyYfOor7pxJ25PUEz-xpy2dJM5HQTsd~JMnVf2caw2il9NqCyMIYzEz91OFSICSxK3P9L69F5nmVkStedViXXuvQVzV3ukUCCeg0AApGyh4ftLoDDchkrg__"
                />
              </Link>
              <div className="mt-3 flex">
                <Link href={"/"}>
                  <h2 className="ml-1 text-slate-800 title-font font-bold text-sm flex justify-center">
                    Comfort Handy Craft
                  </h2>
                </Link>

                <p className="ml-16 -mr-4 flex justify-center text-sm text-gray-500 font-semibold pb-10">
                  $42.00
                  <del className="opacity-100 text-pink-500 ml-1">$65.00 </del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*What Shopex Offer*/}

      <section>
        <div className="container px-6 py-5 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-5 font-bold">
              What Shopex Offer
            </span>
          </div>

          <div className="flex flex-wrap ml-10 -mr-3">
            {/*Item 1*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <TbTruckDelivery className=" w-28 h-28 ml-16 -mb-3" />
              <div className="mt-5">
                <h2 className=" text-slate-800 title-font font-bold text-xl flex justify-center">
                  24/7 Support
                </h2>

                <h2 className="flex text-center  text-gray-500 font-bold mt-4 mb-10 text-sm flex justify-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 2*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <img
                className=" w-28 h-28 ml-16 -mb-3"
                src="images/SO-img2.png"
                alt=""
              />

              <div className="mt-5">
                <h2 className=" text-slate-800 title-font font-bold text-xl flex justify-center">
                  24/7 Support
                </h2>

                <h2 className="flex text-center  text-gray-500 font-bold mt-4 mb-10 text-sm flex justify-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 3*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <img
                className=" w-28 h-28 ml-16 -mb-3"
                src="images/SO-img3.png"
                alt=""
              />
              <div className="mt-5">
                <h2 className=" text-slate-800 title-font font-bold text-xl flex justify-center">
                  24/7 Support
                </h2>

                <h2 className="flex text-center  text-gray-500 font-bold mt-4 mb-10 text-sm flex justify-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>

            {/*Item 4*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <img
                className=" w-28 h-28 ml-16 -mb-3"
                src="images/SO-img4.png"
                alt=""
              />
              <div className="mt-5">
                <h2 className=" text-slate-800 title-font font-bold text-xl flex justify-center">
                  24/7 Support
                </h2>

                <h2 className="flex text-center  text-gray-500 font-bold mt-4 mb-10 text-sm flex justify-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <br /> Massa purus gravida.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Next section*/}

      <section className="HS">
        <div className="container mx-auto flex px-5 py-24 mt-24 md:flex-row flex-col items-center">
          {/*Img Bg*/}
          <div
            style={{
              position: "absolute",
              top: "448%",
              left: "15.5%",
              backgroundColor: "rgb(233, 233, 233)",
              borderRadius: "50%",
              overflow: "hidden",
              width: "380px",
              height: "380px",
            }}
          ></div>

          {/*Img */}
          <div
            style={{
              position: "absolute",
              top: "446%",
              left: "17%",
              width: "400px",
              height: "600px",
            }}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://s3-alpha-sig.figma.com/img/2de2/ab83/660b40645da77ab88d969b9136d72dae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DnqYfjfaRBykeCbE1riDmD565MJjz4FwhhXm1usA8dgW-IV0fX4~~ixyPi7vfikJ1yE6T7KVsusD4XStJHE7ZVgiFSlxYjbcif5vBoN5x1Oy3p-fn0rxRGPYOL7xepNaW99Frrgq1EAOw~im4MfTIXUpOEpuTeNQWeL8AXSE7eSbzO-QQv-dd41ejBkyU52G~lBDuUAZB5OzcEob8cBqR07OteMgBQmlihrdLppfWVhxzPV90BhkWQW19A3pZh95vusgAnJI9TQgoooXdLo-VwxyPslGE3CVnvPBrrLgLyBk7eZvrz4UEk-OtDZQHrLiyzdAcyFQ~YAzEt7CUoGq2g__"
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "453%",
              left: "50%",
              color: "rgb(35, 36, 47)",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            <h1>Unique Features Of latest &</h1>{" "}
            <h1 className="-mt-2">Trending Products</h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "471%",
              left: "50%",
              color: "black",
              fontSize: "14px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <div>
              <span className="flex">
                <h1 className="bg-pink-500 w-2 h-2 rounded flex justify-center mt-1 mr-3"></h1>
                <h1 className="">
                  All frames constructed with hardwood solids and laminates
                </h1>
              </span>

              <span className="flex mt-3">
                <h1 className="bg-blue-600 w-2 h-2 rounded flex justify-center mt-1 mr-3"></h1>
                <h1 className="">
                  Reinforced with double wood dowels, glue, screw - nails corner{" "}
                  <br />
                  blocks and machine nails
                </h1>
              </span>

              <span className="flex mt-3">
                <h1 className="bg-green-400 w-2 h-2 rounded flex justify-center mt-1 mr-3"></h1>
                <h1 className="">
                  Arms, backs and seats are structurally reinforced
                </h1>
              </span>
            </div>
          </div>

          {/*Add to Cart Button*/}
          <div
            style={{
              position: "absolute",
              top: "494%",
              left: "50%",
              color: "black",
              fontSize: "13px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <span className="flex">
              <button className="bg-pink-500 px-7 py-2 text-white ">
                Add to Cart
              </button>
              <h1 className="ml-5 font-bold">
                B&B Italian Sofa <br />
                <p className="font-normal">$32.00</p>
              </h1>
            </span>
          </div>
        </div>
      </section>

      {/*Trending Products*/}

      <section>
        <div className="container px-6 py-24 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-5 font-bold">
              Trending Products
            </span>
          </div>

          <div className="flex flex-wrap ml-10 -mr-3">
            {/*Item 1*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <Link href={"/"}>
                <img
                  className="bg-gray-200 ml-2 mt-2  -mb-3"
                  src="https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ShVtA8s5iMjpp1sml5nxcqBFOpIzBbKAJ8jaIOpRs9DlTNoPt0BXSMHJGOYcD9GJuxcQMfK65AZQbt3iRLKEPWZno5T2nOtoVdknkpq~6so-NYD9K9d4DSAlhMqsRX7~FD0cY0LVnIV4AZGVNYjMy96ZhPu6J7LdCcO0ABt5U6K1s-qJr4vKes7Lk0BzEmxnvEL6QXYVyDhXfxSv2E0-zsv3W53ISLmOZKrDjZW1bwXhvly9FlDBEUJVL7rQdy-ZFi7GQraClo5gDVt2B7FyNQZ0~GOcgat7STo-jfgbFRPrAofscNPDGjPxf2PfBxigr1cYwXY64zoCB27KbmjvyQ__"
                  alt=""
                />
              </Link>

              <div className="mt-5">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font font-bold text-xl flex justify-center "
                >
                  Cantilever chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $26.00
                  <del className="opacity-50 ml-2">$42.00 </del>
                </h2>
              </div>
            </div>

            {/*Item 2*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <Link href={"/"}>
                <img
                  className="bg-gray-200 ml-2 mt-2  -mb-3"
                  src="https://s3-alpha-sig.figma.com/img/e70a/c286/dc012e6f46348c947e76cbc241026273?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnOHUQ0VV8DVt3d~FA8fRU6c~-RoPUfQ38j-qN2zDvCrNPmkRfSqgY1oCiJQaTZlUTKxRDcnVhxqotRy2jjfTL4Yv1dA1zZe51gp~hwriVZv-wAYdvChmY1iCBhirfVSKP0bAbj9kEI97nHDnC8P03VCLURpIOfy~F-yslIhC2GqYtbK86A4oUqHr-Bknz9gz9xwrm1IwjxVOc8AcbAjhAUO9GN6ByAju-Gw~jMtr6WZog8-9ZOKKR4eOER~hskJrZWfptlMWCITdYMzkRfJSt3PonsMn4EnvxhZ3E1KlBFvyL2aFjv~aA5oo2qVzQFfj6EZ5tmV6uGHgIQTVldcvA__"
                  alt=""
                />
              </Link>

              <div className="mt-5">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font font-bold text-xl flex justify-center "
                >
                  Cantilever chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $26.00
                  <del className="opacity-50 ml-2">$42.00 </del>
                </h2>
              </div>
            </div>

            {/*Item 3*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <Link href={"/"}>
                <img
                  className="bg-gray-200 w-56 h-56 ml-2 mt-2  -mb-3"
                  src="https://s3-alpha-sig.figma.com/img/402f/024e/43e865f7def49808ba73dcffe65b6b21?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cidKxqVbYY1t4oCkY~rCS1xFCZtR-rYpzEP8rX6oruR3gPPOr1wpaX72z2YdCIhjetZlv5IOYuQAccStZ1bLDtbXmLVcpl1cA2yJxHSct-wR6Vp59cCw5K-OJPZ9C5bahthofVLMuDBo8lTN4UiW7l6oEkk~0Nx2LJ60QXxAtenMXPrkj-Usl9V3~1xmKnjEXqXUHq2ZYWyBaQt0eWhv3gjZYw3HtOlwzdoOaNauSAhKNCY84fNmxGsJpFDQr4Ni~Obx2F0sHGtJYLWUSubsyKfPYsnhNOPrHRrtkEtPT~F5UriVwmkPI7b4p3vzMR7jFu3HK-JiW9q7d5guQCvXow__"
                  alt=""
                />
              </Link>

              <div className="mt-5">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font font-bold text-xl flex justify-center "
                >
                  Cantilever chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $26.00
                  <del className="opacity-50 ml-2">$42.00 </del>
                </h2>
              </div>
            </div>

            {/*Item 4*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full">
              <Link href={"/"}>
                <img
                  className="bg-gray-200 w-56 h-56 ml-2 mt-2  -mb-3"
                  src="https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZIGKfdtLzEgHMKhw~aqegJR7L5YcGgudDkH2jD6Uj87CeYNgVaT8sQnwULBZ3v4wHkVOtlIoV2N3-toZyYJRReFGaesEIKfnoQJKO7FKa7w2Ucj3AwQsY2Krg6rgeIGRrImSmK4dXdRLUZ1yjnhPCAPLGztdzuk8WrhP6m1GsE6hvCPpyBqoh6dBK1YPoDDvFydAgjIbiQjvGda1NZO3SCk3FtIUjxSfZY0PB7F2jQ4ifNVpwSLm8mcs1VSveB62xkIDpP1uzZ7pfCCmcsZn9qI2GxooLriK27X4C30AS~E~JfSp8vToma8xQdWL~MWP14NfPjq5xnX0YcdaEL0V-w__"
                  alt=""
                />
              </Link>

              <div className="mt-5">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font font-bold text-xl flex justify-center "
                >
                  Cantilever chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $26.00
                  <del className="opacity-50 ml-2">$42.00 </del>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="bg-pink-200 w-96 h-48 ml-14 mt-6 rounded">
              <span>
                <h1 className="text-xl font-bold pt-5 ml-5 ">
                  23% off in all products
                </h1>
                <Link href={"/"}>
                  <h1 className="text-pink-500 font-bold mt-2 ml-5 border-b-2 w-20 solid border-pink-500">
                    Shop Now
                  </h1>
                </Link>
              </span>
              <span className="">
                <img
                  className="ml-52 -mt-12 w-40 h-40"
                  src="https://s3-alpha-sig.figma.com/img/429c/934a/dc8a953600bab29da0ff9265ab06bb80?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SYd0ScXWe6P4nNWxHPGbpB3UAmlUUEiJNlADm4wK3mPiSTItKWMI3J2td6BhrPaQJCfZm9OFks1gU3dJRJryMvi~PDtiemiD0RXNddhDdgYWaQ6k6URHJXs2GbtsSqAF7Qk2crtihraQ6nKr~HSTvlZXWXIya6BSJNUKBfP~u0AuCWk48dycEbyeyakVb4uLUAwtQ0eBgdEk3zgxNIIV1DxbffkaQdmJxbqAFdYncZaihat7aJArulKzh6WZHMmXVFwjyIaDqOIoCi3r3AjV0YNPubbdmxanDcRcYqupZTdLfKPBswuaRDTzVfgwQXvmn3I~i5e90zFyT2z2v2XpCA__"
                  alt=""
                />
              </span>
            </div>

            <div className="bg-blue-200 w-96 h-48 ml-6 mt-6 rounded">
              <span>
                <h1 className="text-xl font-bold pt-5 ml-5 ">
                  23% off in all products
                </h1>
                <Link href={"/"}>
                  <p className="flex text-pink-500 font-bold w-32 mt-2 ml-5 border-b-2 solid border-pink-500">
                    View Collection
                  </p>
                </Link>
              </span>
              <span className="">
                <img className="ml-10 -mt-44" src="images/TP-img6.png" alt="" />
              </span>
            </div>

            <div className="w-72 h-48 ml-6 mt-6 rounded">
              <div className="flex">
                <Link href={"/"}>
                  <img
                    className="w-14 h-14 bg-gray-200"
                    src="https://s3-alpha-sig.figma.com/img/f465/6277/0a8fe5a5431dd1e8da59ce63ebdf445d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVcnM5DRxd4xWZUb7ruHctg90HyVyRfDsGgLAZCuGVMoL8X0S6dEf6JYNpdczj8EkVxI9EXDo4PjvdLEXykkb32hnajaBAFkOnFRLZoBmMw5uUwbM7BfgiBNGNrmNhhtuxPWGks1ZROQ3I7uauYOS7jF0qWJgmXoqPlkiMPN7XGwacXWzWoTWaWd26RvrC3Q9j6twFr7y4ce6vRm3b3qNN1-nrk9v2k8J8rwLDECtTszY92mVZ~GR6s8uY5a94MoGQ20dPtW2qDNBWhelsXLkavLcONGTb5Mbbb1FbcBOpXnOi5FfGkr-BPRb~Zj17VJI6hFhDlGfl5umEF6h8wEnQ__"
                    alt=""
                  />
                </Link>

                <span>
                  <Link href={"/"}>
                    <h1 className="text-left text-sm font-bold  ml-3 mt-2 ">
                      Executive Seat chair
                    </h1>
                  </Link>
                  <del className="text-sm ml-3 mt-5">$32.00 </del>
                </span>
              </div>

              <div className="flex mt-3">
                <Link href={"/"}>
                  <img
                    className="w-14 h-14 bg-gray-200"
                    src="https://s3-alpha-sig.figma.com/img/8f9e/3360/812ad9085efca29edde766f48d07bc8c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBPj0lVqKPFp7buZ6rA0jFclPPUvK~bBq061MeHufrdNbm7bu5XFJ0EkuDSjNAb2Mvf6wb0CoNgdhiQa76GezRTpGDe1J6bv0niFFTtgfLUO1mSzQFbGQhrI76yNlL4GZfVj9msvZYCw74IDOlj7GtWILpmxRBexQ2sMiRnpHCYevchJSa9~D0ON5JO4Vf~w7k4D8X8gzuz-XjDKRiBUVKHKgj80GNgqKI4-YTvw6iuVwQPc~LUOyUzsA-h4ipyqFTHXxw7o7495kAwQSRQ3o~zyqyRIHK16Rt5HJaDLc20cLWCJN7FlvXCEWsrN2Lk95u~-wztBnWDw9W2WjLrnzw__"
                    alt=""
                  />
                </Link>

                <span>
                  <Link href={"/"}>
                    <h1 className="text-left text-sm font-bold  ml-3 mt-2 ">
                      Executive Seat chair
                    </h1>
                  </Link>
                  <del className="text-sm ml-3 mt-5">$32.00 </del>
                </span>
              </div>

              <div className="flex mt-3">
                <Link href={"/"}>
                  <img
                    className="w-14 h-14 bg-gray-200"
                    src="https://s3-alpha-sig.figma.com/img/d6c0/2151/5b60fe030b1c494d6461176139d9d671?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHcFo5eMyTtJLVjjEgreYEnlrSiAPa1-vaI6lpY9ABZSn7z2sy~hTJxQl0loHEPgC9oxchj~HwW5RFRzJ8mGxRgrYKNl5UNxJVOL6zVaKGtR061ofdglnm6DBcZJxEIasK32MZUe5kttxNvlqeHoO9253GF9CzJ-7mB0IQ64KRMiV59JeQw7eBMTE7ceqVKz9jgASLo4gTRIeVUwfCSYZRO6AyGwM4Tn-CtVcWyhMRBnUEeJKlyy14oYVrGp0avfAsC4y-yZFZuSHBQNlnDCsA50e48ZFB1bTHuv~k~1TvsIHtmK8upz0VVoAaeBRD8nf~J-kT9hS8YjEjqjnyMsfQ__"
                    alt=""
                  />
                </Link>

                <span>
                  <Link href={"/"}>
                    <h1 className="text-left text-sm font-bold  ml-3 mt-2 ">
                      Executive Seat chair
                    </h1>
                  </Link>
                  <del className="text-sm ml-3 mt-5">$32.00 </del>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Discount Items*/}

      <section className="DI">
        <div className="container mx-auto flex px-5 py- md:flex-row flex-col items-center">
          <div
            style={{
              position: "absolute",
              top: "650%",
              left: "43.5%",
              color: "rgb(35, 36, 47)",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            <h1>Discount Item</h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "660%",
              left: "37%",
              color: "rgb(35, 36, 47)",
              fontSize: "15px",
              fontWeight: "semibold",
              fontFamily: "",
            }}
          >
            <div className="flex">
              <span className="flex">
                <h1 className="text-pink-400 border-b-2 border-pink-400 solid">
                  Wood Chair
                </h1>
                <p className="bg-pink-400 w-1.5 h-1.5 mt-2.5 ml-2 rounded"></p>
              </span>

              <span className="flex">
                <h1 className="text-slate-800 ml-7">Plastic Chair</h1>
              </span>

              <span className="flex">
                <h1 className="text-slate-800 ml-7">Sofa Collection</h1>
              </span>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "673%",
              left: "15%",
              color: "rgb(35, 36, 47)",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            <h1>20% Discount Of All Products</h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "682%",
              left: "15%",
              color: "rgb(234, 22, 149)",
              fontSize: "15px",
              fontWeight: "bold",
              fontFamily: "",
            }}
          >
            Eams Sofa Compact
          </div>

          <div
            style={{
              position: "absolute",
              top: "689%",
              left: "15%",
              color: "#8f8f8f",
              fontSize: "12px",
              fontWeight: "bold",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
            <br />
            feugiat habitasse nec, bibendum condimentum.
          </div>

          <div
            style={{
              position: "absolute",
              top: "698%",
              left: "14.5%",
              color: "#8f8f8f",
              fontSize: "14px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <div>
              <span className="flex">
                <TiTick className=" mt-0.5 mr-1 text-gray-600" />
                <h1>Material expose like metals</h1>

                <TiTick className="ml-10 mt-0.5 mr-1 text-gray-600" />
                <h1>Clear lines and geomatric figures</h1>
              </span>

              <span className="flex mt-2.5">
                <TiTick className="mt-0.5 mr-1 text-gray-600" />
                <h1>Simple neutral colours.</h1>

                <TiTick className="ml-16 mt-0.5 mr-1 text-gray-600" />
                <h1>Material expose like metals</h1>
              </span>
            </div>
          </div>

          {/*Shop Now Button*/}
          <div
            style={{
              position: "absolute",
              top: "711%",
              left: "15%",
              color: "black",
              fontSize: "13px",
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <span className="flex">
              <button className="bg-pink-500 px-10 py-3 text-white ">
                Shop Now
              </button>
            </span>
          </div>

          {/*Img Bg*/}
          <div
            style={{
              position: "absolute",
              top: "668%",
              left: "58%",
              backgroundColor: "rgb(233, 233, 233)",
              borderRadius: "50%",
              overflow: "hidden",
              width: "300px",
              height: "300px",
            }}
          ></div>

          {/*Img */}
          <div
            style={{
              position: "absolute",
              top: "661%",
              left: "53%",
              width: "440px",
              height: "610px",
            }}
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://s3-alpha-sig.figma.com/img/72a8/a1fa/c3f4dfc7179464e113c3b725fc00d212?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H7DrFRkVyAJzs5NLWfZVhBkSDZP05m4R9zp34bAffk~9utR8fT7yhislL~IHUKcM6eOUqmprdSKgRDrm5sefaFvKfnnNw0AghFDg76EFrIBnY1A29scjL63skoX02DnwiVTC-Qcj4Mf-3yxWAeJNR5HPl5ZlKHWqy3zKOhB2hbODLEh9qre46XUGIvMErLoj4d-kyeO~zRf6IeHsWZoWEouvVpByjurahGgWzfMw6VVrDHjqsKs5foPUmPDTy2GmbaCEzBWzsjxw~hQIl6GKUZjESekT6jqFJgGSNTx6oYqa2tFJ~5TsZcv-9VilLHuUhlF-QY~XweH5pttUgUCbIA__"
            />
          </div>
        </div>
      </section>

      {/*Top Categories*/}

      <section>
        <div className="container px-6 py-14 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-5 font-bold">
              Top Categories
            </span>
          </div>

          <div className="flex flex-wrap ml-10 -mr-3">
            {/*Item 1*/}
            <div className="lg:w-1/5 lg:h-1/2 m-5 ">
              <Link href={"/"}>
                <img
                  className="SO bg-gray-200 w-full h-full px-6 py-6 -mb-3 rounded rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQalbf4yKQ2TnY2FckhnM9o3Bhiidofu~Hz~62E9Ncc2hjUygvaWDo702UZK8FrLvwZoAzGb~DlTjE7mP7WCkr-dSX5U621JA6JOwho8eNgY3nG5CkKNrwTXtE0Qre-jz5a0HtKnDL~sp4Zc7ldOLJlNzRDacMKPP~U91QdRH6rky2JFI9shwU-xQaL6zaiufdBqYA-nSfkZvW4siDcBAcuZ5pA5XX0VkUrSCQ-b3miaTE6mX8yYL3-nLiVqVtveN2OWguK65Si9V853jeGlPORSdZFeWSykcZUeojYAh2T0oB0GFjEen03TnSO-P9NwYitR0woGx2B4w-8x7i8j8g__"
                  alt=""
                />
              </Link>

              <div className="mt-8">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font fo text-xl flex justify-center "
                >
                  Mini LCW Chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $56.00
                </h2>
              </div>
            </div>

            {/*Item 2*/}
            <div className="lg:w-1/5 lg:h-1/2 m-5 ">
              <Link href={"/"}>
                <img
                  className="SO bg-gray-200 w-full h-full px-6 py-6 -mb-3 rounded rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSmUctYaVtF1uF9vnlnhSqDJUDEJI99klIWO40AVBz2hCZFI3a0UOEhofBlLX2gcO1MHeDWRtqO7bFp8M9VXAygBp7ccI-2FHFHN1sbPy9FVwzqOoe3SPQt9xnzLyeZOv~~x0WujmABv8o6w08d0CfejhLE7bcO5nkNnYUpfkL7rTHw1-2FY8SfJEAkkxd58CFwoiR~ZkTdYcS3oQKWaJ1gJ88OZSyO3VOVwpDv1M1Dh1o1IfzezZ96fme~9wFwPOTCYLflphrtPK0Heg8jQkKOl-NIyVndb1G6Kyk-aI6PKR-kLW7sdUKhI6yc0uml7vLRgA18QJQljJYt14rKhvw__"
                  alt=""
                />
              </Link>

              <div className="mt-8">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font fo text-xl flex justify-center "
                >
                  Mini LCW Chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $56.00
                </h2>
              </div>
            </div>

            {/*Item 3*/}
            <div className="lg:w-1/5 lg:h-1/2 m-5 ">
              <Link href={"/"}>
                <img
                  className="SO bg-gray-200 w-full h-full px-6 py-6 -mb-3 rounded rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KedwMaHmooAQ8BeqnMTS6ron-nDSn1vSWlCXqqsnY9BL1gGKWqfnufkIk5P1rojU2xkr3AXPRsYf6-lYl3Z7~OWPPtJiAZd13bu8PtxvoCdZNm0wU8EelENJq-PwAgQAgwCRLpbDa0sMaj36CHJETNMmEayAGIdeYaUE34w1ZFptWXahOwcwUHP6c-I0ty210ZgxLqKvFGQ6yeZNC~wuK5qT818f77~vZuF43~slLVLMkniTM0AkM2Uv2EDdYn5eha5R96wPuOLwloHoVU1WYAcDVrLBvD-uK4d1lNEhW-p4uZatBB1vTALmVcoOYwzMRgWgYZVG8ke5ZJuE0qhJwQ__"
                  alt=""
                />
              </Link>

              <div className="mt-8">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font fo text-xl flex justify-center "
                >
                  Mini LCW Chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $56.00
                </h2>
              </div>
            </div>

            {/*Item 4*/}
            <div className="lg:w-1/5 lg:h-1/2 m-5 ">
              <Link href={"/"}>
                <img
                  className="SO bg-gray-200 w-full h-full px-6 py-6 -mb-3 rounded rounded-full"
                  src="https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SQalbf4yKQ2TnY2FckhnM9o3Bhiidofu~Hz~62E9Ncc2hjUygvaWDo702UZK8FrLvwZoAzGb~DlTjE7mP7WCkr-dSX5U621JA6JOwho8eNgY3nG5CkKNrwTXtE0Qre-jz5a0HtKnDL~sp4Zc7ldOLJlNzRDacMKPP~U91QdRH6rky2JFI9shwU-xQaL6zaiufdBqYA-nSfkZvW4siDcBAcuZ5pA5XX0VkUrSCQ-b3miaTE6mX8yYL3-nLiVqVtveN2OWguK65Si9V853jeGlPORSdZFeWSykcZUeojYAh2T0oB0GFjEen03TnSO-P9NwYitR0woGx2B4w-8x7i8j8g__"
                  alt=""
                />
              </Link>

              <div className="mt-8">
                <Link
                  href={"/"}
                  className=" text-slate-800 title-font fo text-xl flex justify-center "
                >
                  Mini LCW Chair
                </Link>

                <h2 className="flex text-center  text-gray-500 font-bold mt-1 mb-7 text-sm flex justify-center">
                  $56.00
                </h2>
              </div>
            </div>
          </div>

          {/*Hero Section-3 dots*/}
          <div
            style={{
              position: "absolute",
              top: "803%",
              left: "47%",
              flex: "center",
            }}
          >
            <span className="flex">
              <h1 className="bg-pink-500 w-2 h-2 rounded"></h1>
              <h1 className="w-2 h-2 ml-1.5 rounded border border-pink-500"></h1>
              <h1 className="w-2 h-2 ml-1.5 rounded border border-pink-500"></h1>
            </span>
          </div>
        </div>
      </section>

      {/*Latest Update section*/}

      <section className="mt-14">
        <div>
          <img src="images/LU-img1.jpg" alt="" />
        </div>

        <div
          style={{
            position: "absolute",
            top: "848%",
            left: "33%",
            color: "rgb(35, 36, 47)",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <h1 className="text-center">
            Get Latest Update By Subscribe <br />
            our Newslater
          </h1>
        </div>

        {/*Shop Now Button*/}
        <div
          style={{
            position: "absolute",
            top: "870%",
            left: "45%",
            color: "black",
            fontSize: "13px",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          }}
        >
          <span className="flex">
            <button className="bg-pink-500 px-10 py-3 text-white ">
              Shop Now
            </button>
          </span>
        </div>
      </section>

      {/*As seen in*/}

      <div className="flex ml-7 mt-5">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtaRKpQa58WhEx4WrkNOgoy~DA7m~EQ8fu8mUxFJJfoEaDtCLkbgc85Ygc2VZoQs70W8Ug8Ug8Jw6a96P6VprhRBwfKdV-1AQXcHED382XyT06z7PZifBj1KO6xZ1C2ycZX73UBgXQabRkkKcr0UxuOg2wYx-BeQThti-Hk~gTepLRdGmeosHD4Q9c9nTCVua1PoE4h2BC0rmplIMUVB7f~48i4h5XU2MBkNg7Ur~6KsuqrUikMGwDv2aEOwU2MnLeEdLugQq0oZQBTdjszsEr7aCuS~GyJhrqqMIp7u21~YXEcpls9GBKu0wBI6IXy3eFDZ1VsenJsV6xY0o05UBQ__"
            alt="adidas"
            className="mt-14 ml-52"
            width={850}
          />
        </div>
      </div>

      {/*Latest Blog Section*/}

      <section className="mt-20">
        <div>
          <h1 className="text-3xl text-slate-800 font-bold text-center -ml-10">
            Latest Blog
          </h1>
        </div>

        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/*Blog 1*/}

            <div className="p-4 md:w-1/3 ml-16">
              <div className="h-full w-80  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-80 object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/9e7e/909c/6de3d358d2ea968a5624e707d8c55157?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyTdkPxbW8F-nmHRw~mJ70cbx4gxVgBK3-ORla7-mMYjxl7xunsg~3uKNA6UJdgh3n5bRi12le-tvpB~4I8hoS3rZUym4HnvdFXl1i5hbxAaBpNK~KNhN3iJkbJotMnl3Hy0HHaYl0cBu9q3mMv95EUc1L7sl1YJAEEmyMJYrQwoIJFwo7nUHO9kDqAsV7OuUU3ddNs~-Y1kc2X2B1MHrZZVASdrlrOfMVgNW9WpBLIu4SgEoPoKnWonuD0OHmJl75oBRLxysH0hSV1gTYExbkAqo64Ojn1i96bSTu0ExAB~SzUtRjzdneW3yYqhFtI92QGXckkH5BkOD7fWD9x7lg__"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August,2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top esssential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Blog 2*/}

            <div className="p-4 md:w-1/3 -ml-10">
              <div className="h-full w-80  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-80 object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/e3c4/499d/9a11a4d1f9f95293b7180830d656c096?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VX8ZXQLiNKRuHeqWizJ6GwAo8G01TL0RS2PF1XtLosPNAXWGGwTGsmtrrAz01cL~oq0dQ8-ZlAQZnmy8e91-Gz~HRIpU4mDEZKNks3eBy77TsTBCLKFih1J~a1d0VCRoNUc-uLM0hEyRS67qRUkxFVIGNLKjd1FdimqLFmybUaYcUToiiLe7o5tgz6FU8OY3R9D4Lx9CYgmJqUQVyKxYxoGzF81Ghv19ghPg~n5CK-1B8~R8mOm2OkF7rRNMdpg3LirPC3WybxBJT8BDnQpT8KwJBDNLmxw2gH1yO0gBNFQ5MwOtFA73yaH3rosYA2y1KENE96hiVMC~STgOvimbtg__"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August,2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top esssential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Blog 3*/}

            <div className="p-4 md:w-1/3 -ml-10">
              <div className="h-full w-80  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-80 object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/6287/0a73/cbbe0be3bb081d3dd4e072cd840872d6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mq06rOJ1Jw3FlJ-D7A0vrgbod3moL8W3bhKfsRTV6pbkrAEp2DP5aW7p-0JbNPI8Lm2a2YaH~C79jFeQdIIGLtHhaGfAepxcLFqFrY18jjodZpelBHQaxRNa9lWZjZKe90VLAZLqDjKLImI-UsCguruqnmPB8q59NjZ6GiBctCFo2i4c9K5hyahGObDMNYSyAfQ6e9RTdIFttwqxrhMRWc1EVDQsS0LuF61CBxenyFHMfp682Wm-9qWbTKEDzwNSp7c5fKve3Y7S~yV7nKRz6JnpDatmFlZpDABfdJL6Yn78KBWA1gpdSrjiuaTyEJf7dpqm-soqwP-9rNKxfWXTFA__"
                  alt="blog"
                />
                <div className="p-6 border border-0.5">
                  <span className="flex">
                    <FaPenNib className="w-3 text-pink-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      SaberAli
                    </h2>
                    <FaRegCalendarAlt className="ml-10 w-2.5 text-yellow-500" />
                    <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1 ml-2">
                      21 August,2020
                    </h2>
                  </span>
                  <h1 className="title-font text-lg font-medium text-slate-800 mb-3 mt-4">
                    Top esssential Trends in 2021
                  </h1>
                  <p className="leading-relaxed mb-3 text-sm text-gray-500">
                    More off this less hello samlande lied much <br />
                    over tightly circa horse taped mightly
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href=""
                      className="text-blue-800 border-b-2 border-blue-800 inline-flex items-center mb-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <Footer />
    </main>
  );
}
