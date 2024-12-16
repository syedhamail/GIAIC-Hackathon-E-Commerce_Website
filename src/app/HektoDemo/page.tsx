"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

import { TiTick } from "react-icons/ti";

export default function HektoDemo() {
  return (
    <main>
      <Header />

      {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 pb-28 text-4xl font-bold">Hekto Demo</h1>
        </span>
      </div>

      {/*Heckto Demo Section*/}

      <section>
        <div className="flex mt-16">

            {/*Heckto Demo*/}
        <div className="ml-24">
            <h1 className="font-bold mt-4 text-2xl text-blue-900">Hekto Demo</h1>
            <p className="text-xs font-sans mt-2 text-blue-900">Cart/ Information/ Shipping/ Payment</p>
            <div className="HD bg-gray-100 w-72 mt-4 rounded">

            <span className="flex justify-between pt-10 ml-7">
                <h1 className="font-semibold text-blue-900">Contact Information</h1>
                <p className="text-sm mr-7 text-slate-400">Already have an account? Log in</p>
            </span>
            <span className="flex mt-8 ml-7 ">
            <input type="text" placeholder="Email or mobile phone number"
             className=" text-black font-sans text-sm  bg-transparent border-b-2 border-gray-300 w-full mr-10" />
            </span>

            <h1 className="flex text-xs text-gray-400 items-center ml-7 mt-8">
            <TiTick className="bg-green-500 text-white rounded-full mr-2"/>
            Keep me up to date on news and excluive offers
            </h1>

            <h1 className="font-semibold text-blue-900 ml-7 pt-20">Shipping address</h1>
            <div className="bg-gray-100 mt-7 rounded">

            <div className="flex">         
            <input type="text" placeholder="First name (optional)"
             className="ml-7 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-full mr-10" />

            <input type="text" placeholder="Last name"
             className="ml-4 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-full mr-10 " />
            </div>

            <span className="flex mt-8 ml-7 ">
            <input type="text" placeholder="Address"
             className=" text-black font-sans text-sm  bg-transparent border-b-2 border-gray-300 w-full mr-10" />
            </span>
            
            <span className="flex mt-8 ml-7 ">
            <input type="text" placeholder="Appartment,suit,e.t.c (optional)"
             className=" text-black font-sans text-sm  bg-transparent border-b-2 border-gray-300 w-full mr-10" />
            </span>

            <span className="flex mt-8 ml-7 ">
            <input type="text" placeholder="City"
             className=" text-black font-sans text-sm  bg-transparent border-b-2 border-gray-300 w-full mr-10" />
            </span>

            <div className="flex mt-8">         
            <input type="text" placeholder="Bangladesh"
             className="ml-7 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-full mr-10" />

            <input type="text" placeholder="Postal Code"
             className="ml-4 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-full mr-10 " />
            </div>

            <Link href={"/"}>
            <button className="bg-pink-500 text-sm text-white font-sans ml-7 mt-20 mb-14 py-1.5 px-9 rounded">
            Continue Shipping
            </button>
            </Link>
          
            </div>

            </div>

        </div>
        
         {/*Product Section*/}
         <div className="ml-10">
          <div className="HD-P mt-20 container">
            <table className="w-full text-left border-collapse ">
              <tbody>

                {/*Product 1*/}
                <tr className="border-b ">
                  <td className="p-4 flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/f006/4cfe/cd7d7e333cb343c07df1a46d3ba07d2c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kugNtSoE3budf~paWRvHogkQ7ej4Ql0mZ63MGRF-vaAJO6F3gwlw6n-69IfXCL-FPi9Htkmf1nMGvmAmjswQMyBBIk7w76XYRH5u5xHEloX3CMuYzamv3KxZ7z5oeyEH-xZmiO~cd6-XGWBBfnbiF5D0tyuFRKIbxUviWmztZNamCaVW7xDM78dvZVbJn5MEdW9fn1I~ez2n4ihzErEtgtJxQasCG9aAE-50vNEMcQCVcuvovijeJ5YEdo3k5zDUR~lPejFAO1A2ea4KTTH8C19WDJoBpEK6pcVAQtXaQzoivW~8PT7HEhBoWWnj8OPE5-Gi-lOI72Jcse6qG-EqaA__"
                      alt="Product 1"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm">Ut diam consequat</p>
                      <p className="text-xs text-gray-500">
                        Color: Brown <br />
                        Size: XL
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$32.00</td>
                </tr>

                {/*Product 2*/}
                <tr className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/6ba6/31c6/52aa6039f04fb7dc0be25d473ae49bfc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJrmhviQb5FTEo6VYUtBkxZGmRLi5G9QMe2tPhX4ArgMmvDWgDzf6TiHmqRD8zUiF54KG5nn4bzPnn5qDOpJLULrMa80Ct3Ky7usSp7cMu6N0nYImt-rVOGWcMlux8X-N7fUH-sLjjyV-6ZW7JSo~7sLHfAehCdDIvqPXcbzs2uWH93XC5eLiEczTIr1iz9Q3HGmAw8QdDPLcAmsLGjv2mPFEXOpO~NLq7vZ5tC9VyWEt3nAc~4dby19UNMY8lKPgq2Fr5AuVGoA5BSPOq6FUnqGO7xptBZRRMe~Q4JxqCDptDY7OvLWiZUcjK8DF8UgrezmEFCLF6kgPTr-Ku9ULw__"
                      alt="Product 2"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm">Ut diam consequat</p>
                      <p className="text-xs text-gray-500">
                        Color: Brown <br />
                        Size: XL
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$32.00</td>
                </tr>

                {/*Product 3*/}
                <tr className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/65e9/a2e3/2197e755ec35c2801fa25a7c99aa3c9a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q4UwupHEqa6v~aaSsWtG5-GAfVTu0OGLQBBMArGPq6P2GOwGWYzVswcpXOxhnd9c-O6HQ8DnyS2Om7jlaTK0e2D1zWUxql77Rl2Z-0Nl~D-K~egOf80ZdUbo8EU74~K90~YnbkHu6sesE9Tjwv9zS9Vav3P9CA56Us~X2SVRiC-1aJJyfAgmP-Kkw3Gaco9OovdZYc~Dx4u2R8bPTkao-dIJneKTYmMWcM~x1IOCHE3DH9MBngo4RSrwvlc7eC1hQwl6hfjiEHP2bl6xLSUDVYeo1-QkC9zIhirzLSMeffh0539EHidmyI-CbyOKOzAOyjDOdFxkDTPkQSFC~-9vmQ__"
                      alt="Product 3"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm">Ut diam consequat</p>
                      <p className="text-xs text-gray-500">
                        Color: Brown <br />
                        Size: XL
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$32.00</td>
                </tr>

                {/*Product 4*/}
                <tr className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/bf20/87e8/ffecc8128db8041f18b2faad13f1debb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mqL77QtC8OrEPg~u~CVKwt4LPBq0oLJ9ZwWEPw3jKzzVqkxVm7yBaAdVUARNLafgpGbOum1KnAGZqpq3U80Pw2GTvLopATeEE0ieZ76j929BAwBQJWbk2Yi2vEZvoJ9Sz4snE0EYf~YlZ38IWgOLGfrLjPO6Fw7ISJxe8ePuFotPjRV6UyffdDDx6vn-ZSbzSUA08W0FJ7Qoo6tWt4KMhmu-vOcoU0ANR4AMNpBVXYhMipDkLrhGN9V4xFr3rgRQR2nYble9t9kbI9GvQYY2wGhnzVOTxMqOtR0s2qBhDdCcybQ0cGEdGz7kgj75XTp-THwmS3HY1W7OzIT3FFsxTw__"
                      alt="Product 4"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm">Ut diam consequat</p>
                      <p className="text-xs text-gray-500">
                        Color: Brown <br />
                        Size: XL
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$32.00</td>
                </tr>

                {/*Product 5*/}
                <tr className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/dddc/63a9/e8d14dd0cd2fe920968f105cfbd1cac9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS-SI4ijzNDd440I3UpRS9iAQF5C05Qf8GeN9FmQ-noQVVQ7Eh70m1hJ3E7~izAJ8JflpHehR1-ep2gVvTkDX~ST3YCpZxMd7NUDRMZvf-ZFpSlMuUtGx3u1M6eSnl-D4vBJz5faK3TkblEiAOsij9XP0H4nM3wcqU8hg-5V2UIEr3moEBcB6kJy4Z8xDHf2veA94IpeAuhv8IHacFkp0H9bSgPpro8FotjbjW45D0REylVrAhJcibBKovu4Mz1tPr72Guu9wfccZfSgLlLZiyi3EUBTBZCjWTEaHBYqcGwh7nToA2uuMiA~z5uYVL8hBWujNHDkhR1huzgBmwEhIw__"
                      alt="Product 5"
                      className="rounded mr-4 w-16 h-16"
                    />
                    <div>
                      <p className="font-medium text-sm">Ut diam consequat</p>
                      <p className="text-xs text-gray-500">
                        Color: Brown <br />
                        Size: XL
                      </p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">$32.00</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/*Heckto Demo Subtotal Section*/}
        <div className="mt-10">
            <div className=" bg-gray-100 w-full rounded">

            <span className="flex justify-between pt-10 ml-7 border-b-2 border-gray-300 mr-7">
                <h1 className="font-semibold ">Subtotals:</h1>
                <p className=" text-sm">£219.00</p>
            </span>
            <span className="flex justify-between mt-10 ml-7 border-b-2 border-gray-300 mr-7">
                <h1 className="font-semibold ">Totals:</h1>
                <p className=" text-sm">£325.00</p>
            </span>

            <h1 className="flex text-xs text-gray-400 items-center ml-7 mt-6">
            <TiTick className="bg-green-500 text-white rounded-full mr-2"/>
            Shipping & taxes calculated at checkout
            </h1>

            <Link href={"/Order"}>
            <button className="bg-green-500 text-sm text-white font-sans ml-10 w-80 mt-8 mb-8 py-1.5 px-9 rounded">
            Proceed To Checkout
            </button>
            </Link>
            </div>
        </div>
        </div>

        </div>
      </section>

        {/*Footer*/}

      <div className="mt-60">
      <Footer/>
      </div>

    </main>
  );
}
