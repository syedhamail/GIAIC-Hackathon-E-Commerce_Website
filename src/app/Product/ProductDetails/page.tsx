"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { useState } from "react";

import { IoMdHeart } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function ProductDetails(){

    const [isWishlist, setIsWishlist] = useState(false); // State to manage wishlist color
    return(

        <main>

            <Header />

            {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Product Details</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Product</p>
            <p className="ml-3 text-pink-400">Product Details</p>
          </h1>
        </span>
      </div>

      {/*Product Details Product Section*/}
      <div className="PD-W flex bg-white rounded-lg shadow-lg  mt-5 p-4 items-start space-x-4">
            {/* Image Section */}

            <div>
            <div className="">
              <img
                src="https://s3-alpha-sig.figma.com/img/03da/029b/0a8cccaf41b91c6f0575413c23965b0d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMnuoHNeKqJEhsuHHfwcaGTVuWywwMUXEa09BCjEe-KDI95T-eMUjcKkADY1Pl5DXmywnbmCHSXudEKXVlZdR9pxh~axLeMMo06NdyQo28nFzwSGILoe3-X08rWnJwd0tCYLEmB8~~pJlMTmdPq82MuO4n4RtHHs8Len2gS7vJje6-7Jb2g1knieLNzvkMMFt71wAkTAdpXecMaTopo50NmSTAdLwNdtw~7X9wnseS7r83ZZ4e5qbT1227EqEfkAdhT82cvdVPjCjowcdWq2zoeCDe3YoRlYhyBWRXCJfM5yosIp7EUkFp5YZnyeLsG9aXE99B60v9q73fTBAtrjpg__"
                alt="Product"
                className="rounded flex-wrap object-cover PD-P-img1-2-3"
              />
            </div>

            <div className="mt-3.5">
              <img
                src="https://s3-alpha-sig.figma.com/img/ecbe/ac3f/a9e2004573e1a08397ce10b25d96422c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MvdlzYVOU0I-5THMS7zhB7MLw6AQQFXq1f~Q0uiefmb-pm~NQGyKc6Cky4bLmposNJKB3GXeHEBAEo5~pZXvXqMofFqa~ZNVC1aQM0OVBoupQ3oeZQEjhHl~UT~7KRXiICGJNpssnTuKv3WJcu1XJu0WE7rC8a1JAtCeX6vvwK3vxc5su~44sAR-Z1rqwHdI-p1HXMu990fGJ4PjFHSN~5V~3Dai8gT4001RJPfnVdCAo-aP8IWV5ujzRetwWvQCuTbQLfOEBTC7eoFJ1kyw4dW32paMAJbGWJBuxtytBtT4Cryccaf8E~z6IUJkgM1gxlxnFuLw9TWX5JO0BmQQSQ__"
                alt="Product"
                className="rounded object-cover PD-P-img1-2-3"
              />
            </div>

            <div className="mt-3.5">
              <img
                src="https://s3-alpha-sig.figma.com/img/848b/9094/1cd9a4e9bebaa6cfba09c590bd700c1b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMuYq1pFMuKf8GC2mFW5Bkup2IbIYkXj88cMAbq3Hi3WBbEcsWc3~E7Wr3-~SebXmAI0m2XE8nbKe2U1jhwlE~NSTVnyH-9OUtrQrVkX-IoY4xT7S5PmtZGUA3q-PUYpypaxRrtSKE17NZBE7RYkeYpmyjjHB1kHilnxgLc1DjCGRIxGqTcO9j4jIZUfL0~thUtXmkCL1KeqrAkEcyoMQTdRSatJKOrNmpsvFknyEfnkpNEZBQVxJzDb4nzGSR1oIHz5CUiqgWK0c9sq9J2YGwCLWiiaBCrVpcakK5LKZaslAka~wjtn9X1xKs2ulzNqMnTSytxNCQ9i-N0KOLC32g__"
                alt="Product"
                className="rounded object-cover PD-P-img1-2-3"
              />
            </div>
            </div>

            <div className="">
              <img
                src="https://s3-alpha-sig.figma.com/img/5e29/37d7/bae8dbd83e04e7a1c34f5c4b911eba0d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPUdtpF1lgtDXTGWb7L7gq3pBgPtDqJHi9PAF5OT491s36AZL4VP2QKIBzbnEY27qXTy3RKiXVIBMnuH2c2tQT6qBZo9VahgpeuCAO8gtzNVk4dKgbcX9x9mkhLrtdxwLj20AS4I7ifI9XKFg9SPuN-21IlR5e0w2PmUsHnPs5lfZt6bE~Rp0BrmDTyLxGjAgdHEO~xSjJ96xlMispG5UbuWbXliuTxIOU6z8OukdfFwyzQyxxKpOitjLbkgLuerjoBoNspW38v5-GNTe5jYUyMBVHG~o5vg-DaR2xdceG40NUQJWKFHqUMU35UlxJOAyqWwpjNQNrVQiO6R1ZDHmA__"
                alt="Product"
                className="rounded object-cover PD-P-img"
              />
            
            </div>

            {/* Content Section */}
            <div className="w-2/3 mt-14 pl-7">
              {/* Product Title and Colors */}
              <div className="">
                <h2 className="text-3xl font-bold text-blue-900">
                    Playwood arm chair
                </h2>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <h3 className="text-slate-800 text-sm font-bold ml-1">(22)</h3>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mt-3">
                <p className="text-sm font-bold text-blue-900">$32.00</p>
                <del className="text-sm text-pink-500 line-through">$42.00</del>
              </div>

              {/* Product Description */}
              <p className="text-sm font-bold text-gray-800 mt-3">Color</p>
              <p className="text-gray-400 font-sans text-sm font-sans mt-3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus <br />
               porttitor purus, et volutpat sit.
              </p>

              {/* Icons Section */}
              <div className="flex space-x-4 mt-4 text-gray-500 items-center ">
                {/*Cart*/}
                <button className="flex items-center ml-14 font-sans font-medium text-blue-900">
                  Add To Cart
                </button>

                {/*Wishlist*/}
                <button
                  onClick={() => setIsWishlist(!isWishlist)} // Toggle wishlist state
                  className={`flex items-center space-x-2  ${
                    isWishlist ? "text-red-500" : ""
                  }`}
                >
                  <IoMdHeart className="w-5 h-5 ml-1 mt-0.5" />
                </button>
              </div>

              <p className="text-sm font-bold text-blue-900 mt-6">Categories:</p>
              <p className="text-sm font-bold text-blue-900 mt-4">Tags</p>
              <span className="flex items-center text-sm font-bold text-blue-900 mt-4">Share
                <a href="https://www.facebook.com/"><FaFacebook className="w-3 h-3 ml-5 text-blue-900"/></a>
                <a href="https://www.instagram.com/"><AiFillInstagram className="w-3.5 h-3.5 ml-3 text-pink-600" /></a>
                <a href="https://www.twitter.com/"><FaTwitter  className="w-3.5 h-3.5 ml-3 text-blue-400"/></a>
              </span>

            </div>
          </div>

          {/*Description Section*/}

      <div className="D-S mt-20">

        <div>

        <span className="flex items-center font-sans">
          <h1 className="ml-60 pt-20 text-xl border-b-2 border-black w-28 font-bold">Description</h1>
          <h1 className="ml-28 pt-20 text-xl font-bold">Additional Info</h1>
          <h1 className="ml-28 pt-20 text-xl font-bold">Reviews</h1>
          <h1 className="ml-28 pt-20 text-xl font-bold">Video</h1>
        </span>
        
        <span>
            <h1 className="ml-60 pt-16 text-lg font-bold">Varius tempor.</h1>
            <p className="ml-60 pt-4 text-xs text-gray-400 font-medium leading-[1.6]">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. <br />
            Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus <br />
            cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
        </span>

        <span className="">
            <h1 className="ml-60 pt-7 text-lg font-bold">More details</h1>
            <p className="flex items-center ml-60 pt-4 text-xs text-gray-400 font-medium">
            <FaArrowRight className="text-black w-3 h-4 mr-3"/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
            <p className="flex items-center ml-60 pt-3 text-xs text-gray-400 font-medium">
            <FaArrowRight className="text-black w-3 h-4 mr-3"/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
            <p className="flex items-center ml-60 pt-3 text-xs text-gray-400 font-medium">
            <FaArrowRight className="text-blue-700 w-3 h-4 mr-3"/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
            <p className="flex items-center ml-60 pt-3 text-xs text-gray-400 font-medium pb-20">
            <FaArrowRight className="text-black w-3 h-4 mr-3"/>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
            </p>
        </span>

        </div>
      </div>

      {/*Related Products Section*/}

      <section>
        <div className="container px-5 mt-24 mx-auto">

        <span className="">
            <h1 className="RP-S-H text-3xl font-bold text-black">Related Products</h1>
        </span>

        <div className="flex flex-wrap justify-center">

            {/*Product 1*/}  
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
        <a className="PD-RP-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/a90b/9c75/baca406cc54e0dcbe487208a9b0cf9c0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fmibqg80CN3I9A7u3clG-FyPvn1VQhL~oowCx8CgNrjKozm2VWxsEosM1wPudBY5iDnkgWM3qYkbyzf7hG-i2o38RfeyEptBYsH~7auSdckUux5lifDlC6oHXp3Rtj68G8pITBswAxZZdnnBdjkrTB4ZW7mkjbDey8dnmPHJMPhtk-a9vUBkGrarQjDCv0wtNVZ5zToq6S~OwSmrvHpdtvTzycbKPdsMvJkfxBXvy8rm0tya7vn4HSK0hdmdWs0z40hsSOehbsK1HMkqpnJkjI5SzymqWjb7oYcUGCq06ZVlLFJss9I6w8QM2kvSJ7vxs-DKhKSbu4DnJ8Dz4OInoQ__"/>
        </a>
        <div className="mt-5 text-center ">
            <span className="flex items-center">
          <h2 className="text-slate-700 title-font text-sm font-medium ">Mens Fashion Wear</h2>
                <span className="text-yellow-500 ml-5">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-500">★</span>
            </span>
            <p className="text-slate-800  mt-2 text-sm text-left">$43.00</p>
        </div>
      </div>
        
        {/*Product 2*/}
        <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="PD-RP-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/af11/8034/b9abadac8084fb983ebb2042e90efea6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbEYGIjxS~oc23Uz6Ry69iNV27CaYmHYABVyeIooHzCu2zn4cvkT6mSEtiTmos6UdPTb4fXGxdNOXX-KddocvAPO-dRq-UUGBymjsag0BgB5uzlEPi4h4ocI2msXKL6dTP9RrpFr7lc9y1J0AMxqkradx7LH7B88-Un1x2ubgC3~ylYWxJoP9lYsfSsc8qpaEe2Nm6azqBGsr5ONmJuXpY5Iz7TM0ZZRuGMr2SN~xA0-Nh60Vb2tnIk4OOugzG8qZpsS~H8epbkTCnxcrGPiN0HMou4kzGFtJEhwoLQRx7DlkQbmOndM6iqeqO9ETmyze6Y6JEA6acaIBbePria1Rw__"/>
        </a>
        <div className="mt-5 text-center ">
          <span className="flex items-center">
          <h2 className="text-slate-700 title-font text-sm font-medium ">{`Women's Fashion`}</h2>
                <span className="text-yellow-500 ml-8">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
            </span>
            <p className="text-slate-800  mt-2 text-sm text-left">$67.00</p>
        </div>
      </div>

      {/*Product 3*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="PD-RP-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/bc2b/04a8/4c892f40975cec3177c5bb87c239bce4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JKMn8zI3OUGxAkEO40wE4~XFFww6n~kY3K6PiumPKFvqj-moRCKsH21~747mel4iRfPcqlco4onRZ4mdDWCDHxf129UBz2mL2IKQmLnxUq3Z6pf~9EUGmL6-taDIqZpjJQjL662THgOx~L4JjM3EgYlFRHolVuvpbWBMLXP1jA07mTlpCjwlacKZz-V3gMFHCWnl-mGpj~GzoZ5z~izr5pVwXcmXCDXGmPX7DH7XTJWp0b~3DPYu9d8aayY5JNh1qpf9jm1rtyyiIUP3jJB~zgl5UfWhwGh0dpDIrV42Y21ltyurpXGgilqA~rE8rnAygUTHRJ81uMsTNl3Fvhzd-w__"/>
        </a>
        <div className="mt-5 text-center ">
        <span className="flex items-center">
          <h2 className="text-slate-700 title-font text-sm font-medium ">Wolx Dummy Fashion</h2>
                <span className="text-yellow-500 ml-2.5">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-500">★</span>
            </span>
            <p className="text-slate-800  mt-2 text-sm text-left">$67.00</p>
        </div>
      </div>

      {/*Product 4*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="PD-RP-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/928c/ca64/e1cacdb9866ae8672ef2f5cb4d1f23a2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTF42~tqXg5s7eC7d2zdUwVc4aMSJcn78Z4pT9e-nbz0KGBYEBvttJV~4KMBxwZweShLdtpSlareJvaxUekybv9pW15Sime3f0CvXAu3wj5l-47HDGU5EaOqibHVLv50TruKCcWvM1Jy0bgKlx9aZiR224ZZJ97i9Q7k016MHmcUeasZ2slmdYcf9ezg~P4KicQbLuUZa17yV9F25-przEl45kfbBBIUiu4CrqNQgic3KUwbML7YR7Km8gbq0o3No~mrZ67aqw86ISScf1VdauJIhXY-RqRGk5flg1h-V4x6DDpkHBfhN17RWM2i1KdKignlrqxeTYjgID3n--yJ4w__"/>
        </a>
        <div className="mt-5 text-center ">
        <span className="flex items-center">
          <h2 className="text-slate-700 title-font text-sm font-medium ">Top Wall Digital Clock</h2>
                <span className="text-yellow-500 ml-3">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-500">★</span>
                <span className="text-gray-500">★</span>
            </span>
            <p className="text-slate-800  mt-2 text-sm text-left">$51.00</p>
        </div>
      </div>
            </div>
        </div>
      </section>
      
      {/*As seen in*/}

      <div className="flex ml-7 mt-16">

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
    )
}