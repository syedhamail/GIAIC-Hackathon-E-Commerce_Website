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

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Blog Page</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Blog</p>
            <p className="ml-3 text-pink-400">Blog Page</p>
          </h1>
        </span>
      </div>

      {/*Blog Section*/}

      <section>
        <div className="flex mt-24">
          {/*Blog Left Section*/}

          <div className="ml-24">
            <div className="w-full mt-4 rounded">
              {/*Blog 1*/}
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

              <Link href={"/Blog/SingleBlog"}>
              <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
                Read More
                <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
              </h1>
              </Link>

              {/*Blog 2*/}
              <img
                src="https://s3-alpha-sig.figma.com/img/e447/0c0e/93afa793fecd7cd920d44125b3ce71eb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aKrfFJewo1QNCWm71za1yjQBJS611ikY2U07oXyzZckPoLywpoun97~~dGDHTN8AXe82rI0yEYZuXeD20ppOfZf0eLROPdImP~-cpaZuBWFTbsXbsePf0bWhNPRl1bFDbBVXCNKZrOqoU5aAwSL627-NK1Rp7TkXk90eFq9L0T97X9YD3Rf1K3iOTI6yHiINI26vjIImIut1~WEJYCckgUDulaCwhcqJgO7VrKhH7z-nnwSeyApMep5P8I9hBXzvIAXEg4JV1qhrAp~LyXHHn1o8k9r5acpBtUTQaP7T1PvOn3v-jM8sXS0Zl74aH79uFGNmtX-Y~tMiC0yAGrp7Bg__"
                alt=""
                className="mt-7 rounded BP-img"
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
                Aenean vitae in aliquam ultrices lectus. Etiam.
              </h1>

              <p className="text-sm font-sans text-gray-400 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
                Read More
                <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
              </h1>

              {/*Blog 3*/}
              <img
                src="https://s3-alpha-sig.figma.com/img/d860/3942/da211490b1fd2691e079c48320614281?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LBBF8xZns7iljnEOOOGeY68fm7nZ7hebFe37Kf9n6J5O7gnC4YQPQDRk8S4qzl4XtXpHgW9VxMPzWJL4CQ0DpITwNS1NYh4TJOwbPZ1voZWYnDOJ6PqhwsCkXaKwcl8Qk~pnxogUGj3RnZFhkVFACTbxhugVi9ps00-k7~hd3t5rdikCPe~8iBph3oeWjAUx~UxSdxbyYuT4wZDn7nBy9DkoMIHrEQYm-FVazQZnjNHojg1FBtYEhAGbw1XVf3tVC2BumfMy8qNZApFzPgeP4EDB~ZwWBhLkBj7ZFDmgFmos28LLvAxNGCUcViedW6ihtC58HLVLsJ99YWXah5R-nw__"
                alt=""
                className="mt-7 rounded BP-img"
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
                Sit nam congue feugiat nisl, mauris amet nisi.{" "}
              </h1>

              <p className="text-sm font-sans text-gray-400 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum{" "}
                <br />
                eu malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              <h1 className="flex items-center text-sans text-blue-900 font-semibold mt-7">
                Read More
                <p className="bg-pink-500 w-1 h-1 ml-1 rounded"></p>
              </h1>

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

      {/*Footer*/}

      <div className="mt-20">
        <Footer />
      </div>

    </main>
  );
}
