"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function FAQs() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">FAQs</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Pages</p>
            <p className="ml-3 text-pink-400">FAQs</p>
          </h1>
        </span>
      </div>

      {/*FAQs Section*/}

      <section className="flex justify-center space-x-40 mt-24">
        {/*Left Section*/}

        {/*General Info*/}

        <div>
          <h1 className="text-blue-900 text-2xl font-sans font-bold">
            Generel Information
          </h1>

          <span>
            <h1 className="text-blue-900 font-sans font-medium mt-10">
              Eu dictumst cum at sed euismood condimentum?
            </h1>
            <p className="text-sm text-gray-400 font-sans font-medium leading-[1.6] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed
              <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </span>

          <span>
            <h1 className="text-blue-900 font-sans font-medium mt-10">
              Magna bibendum est fermentum eros.
            </h1>
            <p className="text-sm text-gray-400 font-sans font-medium leading-[1.6] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed
              <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </span>

          <span>
            <h1 className="text-blue-900 font-sans font-medium mt-10">
              Odio muskana hak eris conseekin sceleton?
            </h1>
            <p className="text-sm text-gray-400 font-sans font-medium leading-[1.6] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed
              <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </span>

          <span>
            <h1 className="text-blue-900 font-sans font-medium mt-10">
              Elit id blandit sabara boi velit gua mara?
            </h1>
            <p className="text-sm text-gray-400 font-sans font-medium leading-[1.6] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed
              <br />
              tristique mollis vitae, consequat gravida sagittis.
            </p>
          </span>
        </div>

        {/*Right Section*/}

        {/*Ask a Question*/}

        <div className="bg-gray-50">
          <div className="mt-10 ml-9 mr-16 mb-14">
            <h1 className="text-blue-900 text-2xl font-sans font-bold">
              Ask a Question
            </h1>

            <span className="flex items-center mt-24">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-80 h-11 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black rounded"
              />
            </span>

            <span className="flex items-center mt-8">
              <input
                type="text"
                placeholder="Subject*"
                className="w-80 h-11 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black rounded"
              />
            </span>

            <span className="flex items-center mt-10">
              <input
                type="text"
                placeholder="Type Your Message*"
                className="w-80 h-40 pb-28 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black rounded"
              />
            </span>

            <button className="bg-pink-500 text-white font-sans text-sm px-9 py-2.5 font-medium rounded mt-10 hover:bg-pink-600">
              Send Mail
            </button>
          </div>
        </div>
      </section>

      {/*As seen in*/}

      <div className="flex ml-7 mt-10">
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
        <Footer />
      </div>

    </main>
  );
}
