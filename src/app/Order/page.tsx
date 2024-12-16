"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

import { TiTick } from "react-icons/ti";

export default function OrderCompleted() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Order Completed</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Page</p>
            <p className="ml-3 text-pink-400">Order Completed</p>
          </h1>
        </span>
      </div>

      {/*Order Completed Section*/}

      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        {/* Icons Row */}
        <div className="flex w-full justify-between items-center mb-10">
          {/*Left Img*/}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16">
              <img src="/images/OC-C-img1.png" alt="" className="ml-80" />
            </div>
          </div>

          {/*Border*/}
          <div
            style={{
              top: "125.5%",
              width: "23.3%",
              height: "20",
              marginLeft: "4.5%",
            }}
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full  border-dotted border-t-2 border-gray-300 rotate-90"></div>
          </div>

          <div
            style={{
              top: "150%",
              width: "65.5%",
              marginLeft: "16.4%",
            }}
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full  border-dotted border-t-2 border-gray-300"></div>
          </div>

          {/*Center Icon*/}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <TiTick className="text-pink-500 w-20 h-20" />
            </div>
          </div>

          {/*Right Img*/}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src="/images/OC-B-img2.png"
                alt=""
                className="OC-B-img2 mr-80"
              />
            </div>
          </div>
        </div>

        {/*Main Content*/}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-400 mb-6 text-sm font-sans">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 <br />
            hours. You will receive an email confirmation when your order is
            completed.
          </p>
          <button className="bg-pink-500 text-white text-sm px-8 py-3 rounded-md font-medium hover:bg-pink-600 transition">
            Continue Shopping
          </button>
        </div>
      </div>

      {/*As seen in*/}

      <div className="flex ml-7">

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
