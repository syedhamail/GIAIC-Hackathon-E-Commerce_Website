"use client";

import Link from "next/link";
import Header from "./header/page";
import Footer from "./footer/page";

export default function NotFoundPage() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">404 Not Found</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>

            <p className="ml-3 text-pink-400">404 Not Found</p>
          </h1>
        </span>
      </div>

      {/*404 Section*/}

      <div className="flex justify-center mt-28">
        <span>
          <img src="/images/404-img.png" alt="" />

          <h1 className="flex justify-center text-blue-900 text-2xl font-sans font-bold mt-3">
            ooPs! The page you requested was not found!
          </h1>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-12 ml-64 px-6 py-2.5 bg-pink-500 text-white font-medium font-sans rounded-md hover:bg-pink-600"
          >
            Back To Home
          </button>
        </span>
      </div>

      {/*As seen in*/}

      <div className="flex ml-7 mt-12">
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
