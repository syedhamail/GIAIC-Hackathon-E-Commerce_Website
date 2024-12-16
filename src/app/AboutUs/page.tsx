"use client";

import React from "react";
import Link from "next/link";
import Header from "../header/page";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../footer/page";

export default function AboutUs() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">About Us</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Page</p>
            <p className="ml-3 text-pink-400">About Us</p>
          </h1>
        </span>
      </div>

      {/*About Us Section*/}

      <section className="">
        <div className="container mx-auto flex px-5 py-24 mt-24 md:flex-row flex-col items-center">
          {/*Img Bg*/}
          <div
            className="rounded"
            style={{
              position: "absolute",
              top: "75%",
              left: "17%",
              backgroundColor: "rgb(26, 23, 195)",
              overflow: "hidden",
              width: "380px",
              height: "316px",
            }}
          ></div>

          {/*Img */}
          <div
            style={{
              position: "absolute",
              top: "75%",
              left: "18%",
              width: "380px",
              height: "300px",
            }}
          >
            <img
              className="object-cover object-center h-full w-full rounded"
              alt="hero"
              src="https://s3-alpha-sig.figma.com/img/9437/2134/69a47fa45eda4e206e1a6fb580313c6b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQRAB8NsZZM6PmkXqSzXQ6mRg4nqBprojZGGrAxbLbmAkl62le5S1HUhZ5ukiDSPish3JODWelrz~YeRkG7cousaXC0nZ0FgfveI8EVLozc9gisq5bafHiDEbP90zoYj6V-wahi4Xl5rGE6Ri4gsUKbLPvU2dz5tnjfcFKJnvc2pA2r9hsHDIA2BGltN-kMu25uAlWLwJVbqnglII-sIBSbfSobmiA91SCYjhgXZ5Vn4qgb3NdXlmJPnyOTiWhBN81aQ3b9tHhcbRVXHvEJpieXu5I9Mb8xvEGdpJY3-2hkhmnok8gXCvi5QJ-Oyj83YxtHHsOqXoZNHtAgg~Sfx3w__"          
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "49%",
              color: "rgb(35, 36, 47)",
              fontSize: "33px",
              fontWeight: "bold",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            <h1 className="text-blue-900">Know About Our Ecommerce</h1>{" "}
            <h1 className="text-blue-900 -mt-2">Business, History</h1>
          </div>

          <div
            style={{
              position: "absolute",
              top: "96%",
              left: "49%",
              fontSize: "13px",
            }}
          >
            <h1 className="text-gray-400 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrice <br />
              mattis aliquam, malesuada diam est. Malesuada sem tristique amet
              erat vitae <br />
              eget dolor lobortis. Accumsan faucibus vitae lobortis quis
              bibendum quam. <br />
            </h1>
          </div>

          {/*Contact us Button*/}
          <div
            style={{
              position: "absolute",
              top: "113%",
              left: "49%",
              fontSize: "13px",
            }}
          >
            <Link href={"/ContactUs"}>
            <button className="bg-pink-500 px-7 py-2 text-white font-sans rounded">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/*Our Features Section*/}

      <section className="mt-56">
        <div className="container px-6 py-5 mx-auto">
          <div className="flex justify-center">
            <span className="text-slate-800 text-3xl mb-10 font-bold">
              Our Features
            </span>
          </div>

          <div className="flex flex-wrap ml-10 -mr-3 ">
            {/*Item 1*/}
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full hover:border-b-4 hover:border-yellow-500">
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
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full hover:border-b-4 hover:border-yellow-500">
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
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full hover:border-b-4 hover:border-yellow-500">
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
            <div className="SO lg:w-1/5 lg:h-1/2 m-5 w-full hover:border-b-4 hover:border-yellow-500">
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

      {/*Our Client Say Section*/}

      <section className="">
        <div className="OCS-S">
          <h1 className="flex justify-center text-3xl font-bold pt-11">
            Our Client Say!
          </h1>

          <span className="flex justify-center mt-12 space-x-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/0ea0/dcc8/f0922b9597d6bf10e35abbf68b863f93?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX4mI6K~OC-aUEcRWZIL6FcejUg6Ms2T3IGj45dtgTPG7pgfNe9EYmCtVhNkQ2eM7Gu5m3fFFYXIqdjBYBPbFNXaegGsgOFNwlQkf~Igknkfohwjwi7KrPJZQSDGpcSTzJ5nvC8nNa~HRHttv7MYjFaS9GeyQHYfTLFjgP0HGmbkmwyTe-pH0y0XbTMyC-bciQGNje2O0omAH00Ekh6Rq8XByiSEMl41vQDRWmh4F8ZD6fOqtRwBSCK94p2BMhb3v~DZ3KFTAWzXPo27KOLItMqA2OrAq3ECJoGvLyqbL4a2-ZnfbiHF3K~54s6AHSU2~cHvKNla2EOW1N56qWCQXQ__"
              alt=""
              className="w-11 h-12 rounded"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/9913/1567/b63ac48b2ddcea0c0d906d2b8b3b984b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALVPQnsRp-h7kQU8vqX57NXrAfoJ-hTQ-avMEJ8iDSHAlUAzQ9~4EZS1kF1ym3mC0yfkw4LMQnmYiKpXa6w4b8DI6NDZIEgBI3ZlhdCKbDXh4moHepcvKGom5Z6qkDPa9XpUSRtbBSX2wmOnzATWue5bvwPzXHh9D2pT8VBIY--F3gZYer9NhMacP4q26v8nll8438fDfMnszgcWY2Yuy-iaCLJdOErXbGzYho1Bm4jjgtlNhZXer6BiF8TA0ttlfNHKNJ5WHrH~xhUomIshfVC4FpY5To8DWQQv32FJ0JwtwqeR-QIFI4Y9QcRZZptn8grsbRPM5av2uVNgOdqHVg__"
              alt=""
              className="w-11 h-12 -mt-2 rounded"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/f66d/9da2/ae2ee4fbe305351c838c2ed3294bbeb3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XVT5erKLpBwoaIEfpdP6dZJKwp1Y6ch1YFFxrFmPFAGESh8xv4hj8rQJQqrLutvOqzcmQLDWg94hAXBd8AlihG~vtm1dBjn2dVaUYBeeyCARdZG63uRmR0tU7xV7Rwll88E9~e4Vy6kSSl0m6CepHPtmcHK4zwHUlwtjtB1sSpZiFtfwdT9cNNlix78vWv1mZ~W02Uf0E8KKq3-nZv6bb55IuqH01Zu6qqhkGA8R3iRSB8cdLyM9acHwP6No8EKUBGCt4LLUwUnb~bsqyKfvypO0Jw~6WHHO0LigcjY~pM7JYWuKNii5Z8SO-mTvlnK7vc-nU3C6pMcyVRGhqQvCAg__"
              alt=""
              className="w-11 h-12 rounded"
            />
          </span>

          <h1 className="flex justify-center font-semibold font-sans text-xl mt-5">
            Selina Gomez
          </h1>
          <p className="flex justify-center text-xs font-sans text-gray-400 mt-0.5">
            Ceo At Webecy Digital
          </p>

          <p className="flex justify-center text-center mt-5 text-gray-400 text-sm font-bold font-sans leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin <br />
            aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.
            Tristique ultrices <br />
            dolor aliquam lacus volutpat praesent.
          </p>

          <span className="flex justify-center  mt-9 pb-16">
            <div className="bg-pink-300 w-5 pb-1 rounded ml-2"></div>
            <div className="bg-pink-500 w-7 pb-1 rounded ml-2"></div>
            <div className="bg-pink-300 w-5 pb-1 rounded ml-2"></div>
          </span>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-60">
        <Footer />
      </div>

    </main>
  );
}
