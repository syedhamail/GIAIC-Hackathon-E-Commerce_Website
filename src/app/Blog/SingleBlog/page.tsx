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

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Single Blog</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Blog</p>
            <p className="ml-3 text-pink-400">Single Blog</p>
          </h1>
        </span>
      </div>

      {/*Blog Section*/}

      <section>
        <div className="flex mt-24">
          {/*Blog Left Section*/}

          <div className="ml-24">
            <div className="w-full mt-4 rounded">
              {/*Blog */}
              <img
                src="https://s3-alpha-sig.figma.com/img/9779/884d/5444ceac773404fab4785e3e8d933e7d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVNbYbNk4s4N~P~tgK8vOxGd2uOWelAG2UghdyTS5R3FDdqefp4FkJ6VfZu8e8e0rFKtFEafLB~T6qnLPkGkBqEVGjz8yyBtygvvprri4iNPe4CI5iJI8YlDXAqZpu1oLaYV2lgnb-Drba2IFv~eKp-IzfOx5Xq84RSkNV2dA~HS3g1q9DfKj~sag5FQZhWgbGgQTGi3VIkk9YcA-GHZg9rHv003ybyzY-uT1iuqvRStyiYjQNRdl85PDtmyPVlmr1COtLXFaTwwRevfDRTHb8M3~Lqa6X3IdEDL6Q-ky3D3l1FPaTx4y4mZ0R~o0gnH4MJLyFheD4vLI5QAWcOh5w__"
                alt=""
                className="rounded BP-img"
              />

              <span className="flex items-center mt-8">
                <FaPenNib className="w-3 mb-1 text-pink-500" />
                <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                  Surf Auxion
                </h2>
                <FaRegCalendarAlt className="ml-10 mb-1 w-3 text-yellow-500" />
                <h2 className="bg-pink-200 px-8 py-0.5 rounded tracking-widest text-xs title-font font-medium text-blue-900 mb-1 ml-2">
                  Aug 09 2020
                </h2>
              </span>

              <h1 className="font-bold text-blue-900 text-2xl mt-7">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>

              <p className="text-sm font-sans text-gray-400 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              <p className="text-sm font-sans text-gray-400 mt-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit{" "}
                <br />
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu <br />
                platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                <br />
              </p>

              <p className="flex justify-center bg-gray-100 text- font-sans font-medium py-6 italic text-gray-400 border-l-2 border-pink-500 leading-[2] mt-12">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                dictum sapien, amet, consequat <br />
                toamk risusu” <br />
              </p>

              <span className="flex justify-between items-center mt-12">
                <video className="SB-V" controls muted>
                  <source src="/video/SingleBlogVideo.webm" type="video/webm" />
                </video>

                <img src="/images/SB-img.jpg" alt="" className="SB-I" />
              </span>

              <p className="text-sm font-sans text-gray-400 mt-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit{" "}
                <br />
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu <br />
                platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                <br />
              </p>

              <div className="flex mt-16 space-x-3">
                {/*Product 1*/}
                <div className=" w-ful">
                  <a className="SB-LS-P-img block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="https://s3-alpha-sig.figma.com/img/5e7e/0223/124c33575fb994c4da44afece518cedb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjJYa6lE9f2LcHZFSAomvzg0k7NQLHhf8dSpgaJqu0juOJOqyL37WqyGFUlTS2Opn7Aujs-DQv1qpvVm70-FC6~wxzETdJq1XY-zHzpMXIE3HMUHByuK-6F8YjxiK6G4RTbSPYmwS1qqHFtN72QSEUGcOE7KmGSpSNzI6tD4u2sVzfd5IfzDJYXS8J~U5kWoKmTbZodEO0VK9w8TJNebhSfvSiOxEhMwNcJD3C9TXX3vo2-nPYOkHG4GF~zC3UlSfsajYulXPTy0S0iZzzRAGIfqp5lMjW9Y615bWDA9unrLFhbwwubtudIZz9FZLa827uGzMKX6IkSnb6gkYzTb-A__"
                    />
                  </a>
                  <div className="mt-2 ">
                    <h2 className="text-blue-900 title-font text-lg ml-6 font-medium ">
                      Quam sed
                    </h2>
                    <span className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm ml-">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <p className="text-yellow-500 ml-3 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-gray-500 text-xs">★</p>
                    </span>
                  </div>
                </div>

                {/*Product 2*/}
                <div className=" w-ful">
                  <a className="SB-LS-P-img block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="https://s3-alpha-sig.figma.com/img/6a18/7668/79c506d74a54a385a139d531d57a66e0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g5uFuMMn7tZxMAKRPHdYfhBvK4qxAjSdDiV~h3hmpXlIKKxUanT8kFusEjwraFnxpX1WzefbL35VwhW54u3tX6rHkLJCyYXsTflfYa-QVpFb31~jLvy1ShY1J-YEX~8~nqI33cnDh5QlBorCif9hXBa-AImoH-m3vJTnmtGgb0wVPg26HD4nlMsHoY3E6Q8xdlyrv7mBC8Mlcw4NfHAJch8VhaU~P1uhVddVuCEu-XSAGPJzZi5QSQwZ0a4FCMszo3FQGWbzrLnn5i5ocupcm5WK2UxH2CK3WDaTasKMh4Pmqu08St8r7~Ih52urQ7gqyxXER7~8ZcTKnY0850zCmQ__"
                    />
                  </a>
                  <div className="mt-2 ">
                    <h2 className="text-blue-900 title-font text-lg ml-6 font-medium ">
                      Tristique sed
                    </h2>
                    <span className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm ml-">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <p className="text-yellow-500 ml-3 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-gray-500 text-xs">★</p>
                    </span>
                  </div>
                </div>

                {/*Product 3*/}
                <div className=" w-ful">
                  <a className="SB-LS-P-img block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="https://s3-alpha-sig.figma.com/img/bf20/87e8/ffecc8128db8041f18b2faad13f1debb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mqL77QtC8OrEPg~u~CVKwt4LPBq0oLJ9ZwWEPw3jKzzVqkxVm7yBaAdVUARNLafgpGbOum1KnAGZqpq3U80Pw2GTvLopATeEE0ieZ76j929BAwBQJWbk2Yi2vEZvoJ9Sz4snE0EYf~YlZ38IWgOLGfrLjPO6Fw7ISJxe8ePuFotPjRV6UyffdDDx6vn-ZSbzSUA08W0FJ7Qoo6tWt4KMhmu-vOcoU0ANR4AMNpBVXYhMipDkLrhGN9V4xFr3rgRQR2nYble9t9kbI9GvQYY2wGhnzVOTxMqOtR0s2qBhDdCcybQ0cGEdGz7kgj75XTp-THwmS3HY1W7OzIT3FFsxTw__"
                    />
                  </a>
                  <div className="mt-2 ">
                    <h2 className="text-blue-900 title-font text-lg ml-6 font-medium ">
                      A etiam
                    </h2>
                    <span className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm ml-">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <p className="text-yellow-500 ml-3 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-gray-500 text-xs">★</p>
                    </span>
                  </div>
                </div>

                {/*Product 4*/}
                <div className="w-ful">
                  <a className="SB-LS-P-img block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block bg-gray-100"
                      src="https://s3-alpha-sig.figma.com/img/8919/f1a0/f60c99e3ec53bd4ac0c4e0aa2fbf82a0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ae-raFyXNXfXduJJhuFVSb5dSgQKWYm8rV1kG4oy3aUNJlUlc8S02cX6XwHYJuz3KEMiXPJHxP8rL1B54t0et59eRoMeHPJe95bxCNgCaZM4JK7RgLc5NuFO4xaf99YGl6D25WlQUiHodBOUZQ6CbYXfUpMWB849pfjjnlDlOnrrzRjtUJTwn2qtkcy1YDN5yRzbJBIXdcAB5gX0XOMeax2idWoXLhe6OtzJla-W9YcgrmL5XfLbJ-yClPXFzTBvDjsj1xen~Y-~kzHQ0~qbgAq987N1-bCHUNDD01oNwF1nO-Q51C~vYwJfVgpDC1V9n7VF1c3eALrcYwDHIe7iZA__"
                    />
                  </a>
                  <div className="mt-2 ">
                    <h2 className="text-blue-900 title-font text-lg ml-6 font-medium ">
                      Mi nisi
                    </h2>
                    <span className="flex justify-center items-center mt-1.5">
                      <p className="text-blue-900 text-sm ml-">$32.00</p>
                      <del className="text-pink-400 text-sm ml-3">$56.00</del>
                      <p className="text-yellow-500 ml-3 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-yellow-500 text-xs">★</p>
                      <p className="text-gray-500 text-xs">★</p>
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-sans text-gray-400 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit{" "}
                <br />
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu <br />
                platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                <br />
              </p>

              <p className="text-sm font-sans text-gray-400 mt-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit{" "}
                <br />
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu <br />
                platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
                <br />
              </p>

              <div className="ml-80 mt-16">
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mr-44 justify-center sm:justify-start bg-white px-2 py-1">
                    <a href="https://www.facebook.com/">
                      <FaFacebookF className="w-6 h-6 px-2 py-1 text-white bg-indigo-700 rounded-full" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <AiFillInstagram className="w-6 h-6 px-1 py-1 text-white bg-pink-500 rounded-full ml-3" />
                    </a>
                    <a href="https://www.twitter.com/">
                      <FaTwitter className="w-6 h-6 px-1 py-1 text-white bg-blue-400 rounded-full ml-3" />
                    </a>
                  </span>
                </div>

                <span className="flex justify-between px-5 py-2 bg-gray-100 mt-5">
                    <h1 className="flex items-center text-gray-400 font-sans font-medium"><FaLongArrowAltLeft className="mr-1"/>Previous Post</h1>
                    <h1 className="flex items-center text-gray-400 font-sans font-medium">Next Post<FaLongArrowAltRight className="ml-1"/></h1>
                </span>

                {/*Blog Post 1*/}
                <div className="mt-20 LS-BP px-3.5 py-3.5 bg-white shadow-lg">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/8c6a/c5d8/38f0a07becd2c4577e35b9106e4f9403?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBBnka0NcNJ1xSGAYeckt6XZSBsq8DGL2B98wCl7FDtnWpXZfouAEexE5-Efwi0L6bWeEwSFX3LEv~GnuJiQgaB5QymjmDmQuFFA2f05FFEb-H4t7tIsnkkWmGGObRwLg-B9kYJsY34R2gVF8aNIpfjBEBFJN1eZZ-xCDmpY-BX5XBUIcwS6WcPUPimaeNbKwXP0FV59jtAsBDrF9IPqp2XGwlni7rEQCjBmM5DkSC0qOKkIUYtU30WtLH0gbrtAoFDjBNOTVMrbhBqtFevMoD5nmDRENw4uuzMyuOfdzP~II87~Q4P2ESNxPGguPVGueGw9IC0-SnYL9AGTwRZvIA__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16 LS-BP-img"
                    />
                    <div>
                      <h1 className="flex items-center font-medium text-xl font-sans text-blue-900">
                      Sapien ac
                      <p className="text-xs text-gray-400 font-sans mt-0.5 ml-8">Jan 09 2020</p>
                      </h1>
                      <p className="text-xs text-gray-400 font-sans mt-0.5 leading-[2]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate <br />
                      consectetur.
                      </p>
                    </div>
                  </span>
                </div>

                {/*Blog Post 2*/}
                <div className="mt-5 LS-BP px-3.5 py-3.5 bg-white shadow-lg">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/7b73/9f2a/51eea92b76cb801100e7eda6d723916e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8Ke-mHVZAlu~dTINRF8TzqWrHb79DTrhal7dURIrrWQoluW1lOalJ~npy6flzfNxxNXjLbl1TszZg7vL94YOce-j7ZHvqHy~KBt35~XP41Bsgvlnb4-~kA0CU68unK7JRHRoxpg~hNdnvamnoJYfUvhMr5IE3YwBAlr6tUVFdG25XUi2qY-dZ8CmbT9MP3zueuKh47wubB~Nf15MaU24rVNcBzSOCaq5YUq0fIs0cZ~6UQUQfPVybelRe7BWGbK3XGmPqyGakvZojyaIWlMmU-jptabekw8hhtzcvE5NwWNejlSpogsoSfLp1tEMK2j4notGXnYN-n2Y9f608Vfgw__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16 LS-BP-img"
                    />
                    <div>
                      <h1 className="flex items-center font-medium text-xl font-sans text-blue-900">
                      Augue conva
                      <p className="text-xs text-gray-400 font-sans mt-0.5 ml-2">Aug 18 2020</p>
                      </h1>
                      <p className="text-xs text-gray-400 font-sans mt-0.5 leading-[2]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate <br />
                      consectetur.
                      </p>
                    </div>
                  </span>
                </div>

                <div className="flex mt-28">
                <span className="flex items-center mt-3 ">
                <p className="bg w-10 h-10 flex justify-center pl-2 border- border-t-2 border-b-2 border-l-2 border-gray-300 items-center">
                    <FaUser className="text-gray-400 font-bolder w-4 h-3 " />
                  </p>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-72 h-10 text-sm font-sans bg-white border-t-2 border-b-2 border-r-2 border-gray-300 text-black"
                  />                 
                </span>

                <span className="flex items-center mt-3 ml-12">
                <p className="bg w-10 h-10 flex justify-center pl-2  border-t-2 border-b-2 border-l-2 border-gray-300 items-center">
                    <MdEmail className="text-gray-400 font-bolder w-4 h-4 " />
                  </p>
                  <input
                    type="text"
                    placeholder="Write Your Email*"
                    className="w-72 h-10 text-sm font-sans bg-white border-t-2 border-b-2 border-r-2 border-gray-300 text-black"
                  />                 
                </span>
                </div>

                <span className="flex mt-10 ">
                <p className=" w-10 h-48 pl-4 pt-6 border- border-t-2 border-b-2 border-l-2 border-gray-300 ">
                    <FaComment className="text-gray-400 font-bolder w-4 h-3 " />
                  </p>
                  <input
                    type="text"
                    placeholder="Write your comment*"
                    className="SB-L-CS h-48 text-sm pb-32 flex items-center font-sans bg-white border-t-2 border-b-2 border-r-2 border-gray-300 text-black"
                  />                 
                </span>

                <span className="flex text-xs text-gray-400 items-center mt-5 ml-3">
                <p className="bg-white w-2.5 h-2.5 border border-gray-400 rounded-sm"></p>
                <p className="ml-1.5 font-sans">Save my name, email, and website in this browser for the next time I comment.</p>
                </span>

                <Link href={"/"}>
                    <button className="bg-pink-500 text-white font-sans px-64 py-2.5 font-medium rounded ml-6 mt-10 hover:bg-pink-600">
                        Continue Shipping
                    </button>
                </Link>

            </div>
          </div>

          {/*Right Section*/}

          <div className="ml-10">
            <div className="HD-P mt-3 container">
              {/*Search Section*/}
              <div>
                <h1 className="text-blue-900 font-semibold text-lg font-sans">
                  Search
                </h1>
                <span className="flex items-center mt-3">
                  <input
                    type="search"
                    placeholder="Search For Posts"
                    className="w-48 h-7 text-xs pl-2 bg-white border-t border-b border-l border-gray-300 text-black"
                  />
                  <p className="bg w-10 h-7 flex justify-center border-t border-b border-r border-gray-300 items-center">
                    <CiSearch className="text-gray-300 font-bolder w-6 h-4 " />
                  </p>
                </span>
              </div>

              {/*Categories Section*/}
              <div className="mt-10">
                <h1 className="text-blue-900 font-semibold text-lg font-sans">
                  Categories
                </h1>
                <span className="flex mt-6">
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 rounded text-blue-900 py-2 hover:bg-pink-500 hover:text-white ">
                    Hobbies (14)
                  </button>
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 ml-10 rounded text-blue-900 py-2 bg-pik-500  hover:bg-pink-500 hover:text-white ">
                    Women (21)
                  </button>
                </span>

                <span className="flex mt-3">
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 rounded text-blue-900 py-2 hover:bg-pink-500 hover:text-white ">
                    Women (21)
                  </button>
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 ml-10 rounded text-blue-900 py-2 bg-pik-500  hover:bg-pink-500 hover:text-white ">
                    Women (21)
                  </button>
                </span>

                <span className="flex mt-3">
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 rounded text-blue-900 py-2 hover:bg-pink-500 hover:text-white ">
                    Women (21)
                  </button>
                  <button className="text-sm font-sans flex justify-cente w-32 pl-2 ml-10 rounded text-blue-900 py-2 bg-pik-500  hover:bg-pink-500 hover:text-white ">
                    Women (21)
                  </button>
                </span>
              </div>

              {/*Recent Post Section*/}
              <div className="mt-8">
                <h1 className="text-blue-900 font-semibold text-lg font-sans">
                  Recent Post
                </h1>

                {/*Product 1*/}
                <div className="mt-9">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/b64e/5bd7/4238db123595dfe5ed439aa303890122?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gHTBozX0jbiuYM4hrFBUPAq2UU8mfR~GohSK6LnCpimGo55DNOjBm7mHA4jugwqzYxGjEKYyByy-xYNQXgCcoc0RMwXfPAn9ZtqwKpN2k1loQWhaAEJ1vvtc4N4jGKT5PU7waOOgidUeGJ3RW2BRpTqcT8bOMrZieHVzSpplZAphN0dn1rv~IgPIPrqTFnAz~VaAYFHm4Ze4BJZxlhMSOeyDje2-~~24KZ-BC3rPhONon1-DpEHot4GgIkf2Vo6WrIYYhMQwP0W3DllMV5jgFdoaXAcwrnWoPrR79KQhGZ5EyQ9lPqdsgTNFrRCpe2lqG3CCzKskftVdIJ51G2YhHA__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        It is a long established fact
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>

                {/*Product 2*/}
                <div className="mt-6">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3da6/b4b6/d016a12f7c753a338ba129db9998ef81?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2fJs~vmWVbpcht7Ra1AOBvjtZUGkO0--EG4M8EkdiofsoD9f6CiIZ9f6BnaHvKxGb3GKgt4mB3jvqXyO~nGDCSf8zNwPv8RtAHA9qMg~7vwFhy~zPNoqcuW1noLC74NDhBxaLuTgmdt3~rHxqO35mXM4Tq7k-thg53RwsHsLNePLHdSJzd3tDWllOTxXq8AABoVMqkYUVVABMQPOONN56XxFydQmQWzQXd7AHLsLQ-QolVH3SYXB6V767~oR1qGXOCf1f17noNXCuNpyVviXAtqX0F0PWEBWkFsKfriEmwySScT3~u5ctIw0~sM08KmEQN2zzVCszgFVX4Fh8PyRw__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        It is a long established fact
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>

                {/*Product 3*/}
                <div className="mt-6">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/5dd8/d16a/5ae1b94baf284fc6984514da8669859d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KD~cfhiiYqOeTY9YV3OOBJqdeAbA2hQYkj~2XcIXcWB1z4wSAiEg3oGjYQX0TS~vNcSINzlvgn5zXG7F-ml0iJEVW6NiwnUpqTBgRuyhaWF7OLwnsBziF8VXtzX~C64I7T5PPC7BUlNZ7rcyj0NWCqwzehtwXmzLGSXkZVUpdSbAOkrT-7NBe6odX4XFg19UF0IY-AQIjbmtDNQuHNZ7R2srCE6yXEm7ady-On-wXmF42Ui3xjMhW~T4zJG3DBLwK~zAAlXUQ~7egjsCF4AdRHQei8HxJIHS6G6YfSa~WpstSE6bT81qqgNQE1JNwNTjZyvSUoBdqupvNSwX-4bQkQ__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        It is a long established fact
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>

                {/*Product 4*/}
                <div className="mt-6">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/4f96/ece1/2c84e9989c0b2ab4d4fb9e076fa244c8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q2L6k-zoxvxYokwL2YaNlQ5Y4LDcnmmJmn8bQgKkzkFfMbOqJb3y8g6~R3eohqtbtUDTPxurUMQ9NmeEAl41k-~IBHC-J23d0SwW1Uqit8TKo3NTfTENWkXtaYSCfndRBcFcsG~r-lefgCyLWtXPiqw6pL0ikBpmfTWrZpUTrnSzlTb~zz8nriXgGsuWzB3bJz6XsbpwPsXmz8Kk9KTtb0rJlevZ27Rbtz0-al0TFOHx8j9hMnq2SvA9bQLwdLO-K9-shU7TNSyWGtneb-XdSs4WK5xmUi2ytB0504ZwbiMzzdmMgo7XpXO4uM~NJnsmVMm9r3x0r8lRSdya06Pvvw__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        It is a long established fact
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>
              </div>

              {/*Sale Product Section*/}
              <div className="mt-8">
                <h1 className="text-blue-900 font-semibold text-lg font-sans">
                  Sale Product
                </h1>

                {/*Product 1*/}
                <div className="mt-9">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/7d72/3a72/9a28768b4b2fee7dd0a22546a119b550?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S6Z8HY7Ck-Kxv1tR~71ItIWDpqcrDAUQWbk5hJD4bE-Zfq0CZonyjL4A48SxjPi5gWlF34m4sfE5tZSSEMT-8CzGyPnpOqDx~VFYVCEmLCA94ppGUQesAGh4s48YXo8D1HrxRBsjx1xzNcojQYPmtIKEgj7acq5JS2GlRcbE~6b-66FHtm0QbxKQQfXyyYI2pPSEw7WEHICCrXLTBstuueLdRwkaykni5U9FMQOQHA343s9OERWUStD2hL~4iP4YOKx07km-6F6bjr368VQUTNXhI5u9SbcuzBNnZXuf408INv8H-BXhmYrAcFDriIbzHELB3J2~FM4S7FO9xfexyA__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        Elit ornare in enim mauris.
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>

                {/*Product 2*/}
                <div className="mt-6">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1704/9893/d39d9fe349e0054ca3accd8c315fb613?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6ekdjgj23YVA5lFd2bDV38g4vsVIR4t3tEa0g3WvvqG6Z59mV6zVAPRGqzaDue8M7AEgMNyGmhy6b2VwD6pwdqTKzXdaTtJETbGzBMNgVXzJjaKZnduEarXzwM9u4TypjKyhXHmuRRTg8VxEqn6rWSX4noo3u0yDzQSSsdpBUPF3vaRtNO-OA96rF8WTjnktkflfUP7N~D06qPHacElZSV1oki7uKQ4AGtJ1qKqw3Halqx7JVPg7zWuVitcKKtf4ckQaxUgesBqkPcd4NbqlgUnFJ5ID4MO3ZU89fjXIs8dQ~aUJkR0V9NjbeBTm2S1rcYvZn2qmLzPMznkbDKxRw__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        Viverra pulvinar et enim.
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>

                {/*Product 3*/}
                <div className="mt-6">
                  <span className=" flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/e3e9/e3c9/e1be94c0df78df07cd346c7c59fba04b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV6NijWt7Kpfj1hNQqxdwoOgZNDsEaFJFj~bLIM7EzKdgbe0vAYYvVQ3uGTr8A-ZYwrHLuKSsKnmSpd5eJGmqhbjb9-RrKTDhHxUbxpvjSVpPSZVLviHPC37C9ZQFhDJCh5Gh95HhattPWb-3MqNzqR3zZlhoBGiKVxvTa83tJXp3ADvbkdWjv4mJyELkCAoH6pGZZtbKKHfDkHwiaKYFcMEYwBEUhe2tXjQFb4FoWZnnGVwqEDUT2wiHi2ldeumbQZezh-vYGgva7keTpxV9SOopZSwzZjsQtoRxVkBfHirDwadQH46YoIqGcJikaGPBI7zTRCh0yGLcK3uMG94gA__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm font-sans text-blue-900">
                        Mattis varius donec fdsfd
                      </p>
                      <p className="text-xs text-gray-500 font-sans text-blue-900 mt-0.5">
                        Aug 09 2020{" "}
                      </p>
                    </div>
                  </span>
                </div>
              </div>

              {/*Offer Product Section*/}
              <div className="mt-8">
                <h2 className="text-blue-900 font-semibold text-lg font-sans">
                  Offer Product
                </h2>

                <div className="flex mt-8">
                  <div>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/75cb/ed56/8f632c5e780e7c41d8511d9d2a304e20?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCSkcQY6WajLWX8P5PnxMUEmdcNoyiXyEVwVd59TSh4PBtby4uj1z7VvtdAoo8wvLgfCJOpu1VGfNaaWHVNMdJaf~LF9KGcX~OoTfsYWVg37H2wZM8VQy~GONvu0yxiAplDxbp98k4SFl~FHh7f8wSE0aaygzRJTcv8WTryTKZAm-b4691k7ReGvddovpM3eXZJqSRvYwMNmrWce3dBdahhAASRZnKRGYVQiD4ISSVFmwmjr4c-kJYc90CPKMG7rzcgjclJKX9gFrhC1RMt6J435sXk8bPHMkfgzKD1qRanrm4iaPsEhxVZLp~eQvNHnUX25Rc-jIlFFbv3OoCmLew__"
                      alt=""
                      className="rounded mr-4 w-28 h-20"
                    />
                    <span>
                      <h1 className="text-sm text-blue-900 font-semibold font-sans ml-2">
                        Duis lectus est.
                      </h1>
                      <p className="text-xs text-gray-400 font-sans font-medium ml-4">
                        $12.00 - $15.00
                      </p>
                    </span>
                  </div>

                  <div className="ml-5">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/03da/029b/0a8cccaf41b91c6f0575413c23965b0d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMnuoHNeKqJEhsuHHfwcaGTVuWywwMUXEa09BCjEe-KDI95T-eMUjcKkADY1Pl5DXmywnbmCHSXudEKXVlZdR9pxh~axLeMMo06NdyQo28nFzwSGILoe3-X08rWnJwd0tCYLEmB8~~pJlMTmdPq82MuO4n4RtHHs8Len2gS7vJje6-7Jb2g1knieLNzvkMMFt71wAkTAdpXecMaTopo50NmSTAdLwNdtw~7X9wnseS7r83ZZ4e5qbT1227EqEfkAdhT82cvdVPjCjowcdWq2zoeCDe3YoRlYhyBWRXCJfM5yosIp7EUkFp5YZnyeLsG9aXE99B60v9q73fTBAtrjpg__"
                      alt=""
                      className="rounded mr-4 w-28 h-20"
                    />
                    <span className="items-center">
                      <h1 className="text-sm text-blue-900 font-semibold font-sans ml-4">
                        Sed placerat.
                      </h1>
                      <p className="text-xs text-gray-400 font-sans font-medium ml-4">
                        $12.00 - $15.00
                      </p>
                    </span>
                  </div>
                </div>

                <div className="flex mt-6">
                  <div>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/1351/2661/2f5cadc5fb6790d7e78365be10673dba?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OhTxzr2IvGq2wN~~~8L8o0l~vMd5Bq1F5pjUr~b23ZcH~zigJzAdI~9m0Wbvc8-v-VrgrLG~seZ65HlR71LI-diKBds~mC0SgbzoPs125a-XAmmlr8ILcRTqH9tiiPpxZdXk8e-5f5iZVjcirvhHS0TSAnPXdh8qs0uR5PwPvOP-0RiKx-oqSmQOnReTA3wmbOCfLhE2Im6kZ2KvBzmCSCqonmGk2morjfQDWIMfJM58vrWYWNV8dzvEHEaYwUZeWMDbkyDIJu1jNpnUXSR09RJSkbfPSdcuZp3rzsksvFs-B-81~1Im5Iy~upBKV6aJnkZ18zhy~RzgXHdJ6nt10Q__"
                      alt=""
                      className="rounded mr-4 w-28 h-20"
                    />
                    <span>
                      <h1 className="text-sm text-blue-900 font-semibold font-sans ml-5">
                        Netus proin.
                      </h1>
                      <p className="text-xs text-gray-400 font-sans font-medium ml-4">
                        $12.00 - $15.00
                      </p>
                    </span>
                  </div>

                  <div className="ml-5">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/0e78/069f/1fde37b975a527b843e465c7cee28e20?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5pgyl6g8xCLp~CmIXfQ4ZzfqyI4aI4gGn-CZMPGZTEInmSajFxFSIfKqVny~9wraV-RRSZl2mzTXyL7Bz71gYE62k700hGvLjwGrTcVsfpjDFVKAy--r6E4XTCAdm79ayfIUPo-B-rdfU9A97k6j5Ln2qLR6ZfkLUF-TVGNamQsTOJ5fsPDvQp2SIpCte4Rdw8cP3A2wrkruNY2xHeO3K101dMYAlshNQk4J36XmGF59LFoXqWbM~6BZE7~AfT2l3mRu36X5GrhhrBkIUGA8Xe7w4g75gY07pRYrrkZTkTRg5Rm0xhuH5e1zXpvKxQBBUAk-e1G1lDrc5oBkKZdMw__"
                      alt=""
                      className="rounded mr-4 w-28 h-20"
                    />
                    <span className="items-center">
                      <h1 className="text-sm text-blue-900 font-semibold font-sans ml-7">
                        Platea in.
                      </h1>
                      <p className="text-xs text-gray-400 font-sans font-medium ml-4">
                        $12.00 - $15.00
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              {/*Follow Section*/}

              <div className="mt-8">
                <h2 className="text-blue-900 font-semibold text-lg font-sans">
                  Follow
                </h2>

                <div className="mt-4">
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 mr-44 justify-center sm:justify-start bg-white shadow-md px-2 py-1">
                    <a href="https://www.facebook.com/">
                      <FaFacebookF className="w-6 h-6 px-2 py-1 text-white bg-indigo-700 rounded-full" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <AiFillInstagram className="w-6 h-6 px-1 py-1 text-white bg-pink-500 rounded-full ml-3" />
                    </a>
                    <a href="https://www.twitter.com/">
                      <FaTwitter className="w-6 h-6 px-1 py-1 text-white bg-blue-400 rounded-full ml-3" />
                    </a>
                  </span>
                </div>

                {/*Tags Section*/}

                <div className="mt-8">
                  <h2 className="text-blue-900 font-semibold text-lg font-sans">
                    Tags
                  </h2>
                  <span className="flex mt-4 space-x-10">
                    <p className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 w-16 hover:text-pink-500 hover:border-pink-500">
                      General
                    </p>
                    <p className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 w-14 hover:text-pink-500 hover:border-pink-500">
                      Atsanil
                    </p>
                    <p className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 w-11 hover:text-pink-500 hover:border-pink-500">
                      Insas.
                    </p>
                  </span>
                  <span className="flex mt-4 space-x-10">
                    <p className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 w-16 hover:text-pink-500 hover:border-pink-500">
                      Bibsaas
                    </p>
                    <p className="text-blue-900 font-sans font-medium border-b-2 border-blue-900 w-12 hover:text-pink-500 hover:border-pink-500">
                      Nulla.
                    </p>
                  </span>
                </div>
              </div>
            </div>
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
