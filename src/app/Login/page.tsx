"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

export default function Login() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">My Account</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Login</p>
            <p className="ml-3 text-pink-400">My Account</p>
          </h1>
        </span>
      </div>

      {/*Login Section*/}

      <section className="flex justify-center mt-28">
        <div className="LS flex justify-center bg-white shadow-md">
          <div>
            <h1 className="flex justify-center text-3xl font-bold mt-10">
              Login
            </h1>
            <p className="flex justify-center text-gray-400 font-sans mt-1">
              Please login using account detail below.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="text-sm w-96 border-2 pt-2 pb-3 pl-3 mt-8 flex justify-center"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-sm w-96 border-2 pt-2 pb-3 pl-3 mt-6"
            />
            <p className="text-sm text-gray-400 font-sans mt-2.5">
              Forgot your password?
            </p>
            <button className="w-96 mt-10 text-white font-medium font-sans bg-pink-500 py-3 px-5 rounded hover:bg-pink-600 transition">
              Sign In
            </button>
            <p className="flex justify-center text-gray-400 font-sans mt-6">
              Don’t have an Account?Create account
            </p>
          </div>
        </div>
      </section>

      {/*As seen in*/}

      <div className="flex ml-7 mt-14">
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
