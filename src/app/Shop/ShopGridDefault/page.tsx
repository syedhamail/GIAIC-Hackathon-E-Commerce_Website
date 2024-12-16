"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { SetStateAction, useState } from "react";

import { CgLayoutGrid } from "react-icons/cg";
import { FaListUl } from "react-icons/fa6";

export default function ShopGridDefault(){

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Best Match");
  const handleSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option); // Set selected option
    setIsOpen(false); // Close the dropdown
  };
    return(

        <main>

            <Header />

            {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Shop Grid Default</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Shop</p>
            <p className="ml-3 text-pink-400">Shop Grid Default</p>
          </h1>
        </span>
      </div>

            {/*Products Section*/}
      <section className="mt-24">

        {/*Heading*/}
        <div className="flex">

          <span className="ml-24">
            <h1 className="text-xl font-bold text-gray-800">
              Ecommerce Accessories & Fashion Item
            </h1>
            <p className="text-gray-500 text-xs">
              About 9,620 results (0.62 seconds)
            </p>
          </span>

          <span className="pl-32 flex text-slate-600">

            <h1 className="flex items-center text-sm">
              Per Page:
              <input type="text" className="bg-white border w-14 h-6 ml-2" />
            </h1>

            <div className="flex ml-8 items-center">
              <h1 className="flex items-center text-sm">Sort By:</h1>
              <div className="relative inline-block text-left ml-2">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex justify-between items-center w-44 h-7 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded shadow-sm hover:bg-gray-100 focus:outline-none"
                >
                  {selectedOption}
                  <svg
                    className="w-3 h-3 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Options */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Best Match")}
                    >
                      Best Match
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: Low to High")}
                    >
                      Price: Low to High
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Price: High to Low")}
                    >
                      Price: High to Low
                    </div>
                    <div
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect("Newest")}
                    >
                      Newest
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="flex items-center ml-8 text-sm">
              View:
              <CgLayoutGrid className="w-6 h-6" />
              <FaListUl className="w-3" />
              <input type="text" className="bg-white border w-32 h-6 ml-4" />
            </h1>
          </span>
        </div>

        {/*Products*/} 
        <section>
  <div className="container px-5 mt-24 mx-auto">
    <div className="flex flex-wrap justify-center">
            
        {/*Product 1*/}  
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/4851/c906/03270716b886324ea4b54a2320807d8b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8jJeXCwLg-McauksPFUfv7XQ-1u7MW3psspFUisKoSvKzKkipCILRevzboSVM2uCysstn2myeL~zqcd8lruLHBfWF8avBtdsBz4Da~FA1wavVNr2Sk2uuH7~T2IGypwoJ7eSOpP01W3K8RPT5KbU07nhExtAKX3cnTxFhsj4M03pfuvzHCx3hnPospszyc9NA537DUGk63Lt6X41DhaTTVo3QMTY17FfQAhjpBX1aNN7cwerMLvGBYFRuHBeAT5ZXZoIzgwZlBmu~DiD3HB9crIbbpCVT0W1ZWUYOgiGGowflcNl379KGlyFQ7r8LuO2FsFCsdEInIkZ5VZEUHyIQ__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Vel elit euismod</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>
        
        {/*Product 2*/}
        <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/9db5/545f/6002c578779f313538a8a68e1a6f8050?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGM-cMJoKLI12m7w00v86WlO~A8XCSkvIKGOehexLcZ740PY6ZtEcsM~-49U-B09ZB0eL-UouhIctvfuZW7YFnti3gJwKDy5qAwiOMsSPFexRH0hdYuk3sv9~gwBEfSPA-OJpFE2K-pKoUznyD6m6QZzRNvb6cs75ElaHBInFg5hY1okNMG9mvDkwJUFzbDs1JjZeaQDrsoTezk6Spy1gXFAjJvyOLIWveJO-KTAcIeM~BHsY7Pbqpb1jfOrMt0cG89fc5Ytn3z2WbxcdAs8ae5jjO8hLhcDbgVpoCETysMPi0CMnd1JD6oj9~GqliQDQSJfxq-mjwpnDUQTDRNjyQ__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Ultricies condimentum imperdiet</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 3*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/795e/f307/40fb6d72006bc9fe7a747b3dfca0a5de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jx~XX6n~2-ohwXf-4ccaoir2b7oLEegZrdjU9TegSM7MZDQWDNynvcY-BrN3EfIc0FUZa3wKiWymYrJVqWPA-OMzt6uFugipBw~asIibHY5boFOZqpkeU1n3wXxk1A4PZOxUqIaRWdd4rjHyn1LSjEZ2sk368QLMtt1IsCBnTEzT-bAM8SdFEFhT2S97YciFw8WHG2P3rqGGnpBhsvgwU2sWU51k9lZq-nq-Ox~IrcXwptuV4R7ajHCawjfLePK7aUGH46sgjUtVpQF4PDqxT5dyWloPs-hh~0gaJOT4bIvrgTH0sKmWz3ieGPIoO5plXx1R9bQoKt9WIfFR5DPaJA__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Vitae suspendisse sed</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 4*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZj~x588BdIMmLB07qzsbzZUbDCarXyyo1jSvp4B1-VztgEOzK9cOlLE11h4ia4aJjEyeL2GBC1~9tgHAGkIlnQDOu-19LPsi1LfYGCnvPT5VsdGUzZTrzYER5nanL1ddP1cqSdYB-dz1oTnpK4jeyHTswC3MH3HpiDiAjq29R2GT6GhDZNRahSUO6KCAK2trwZ99AyW-v-hO1YVrP6coY-IqiswTohuNYFa0I31UeZsY4qaO4y6ZkdL6Q7yuvkaELnWe3qdQOsIMNo5N2tkwp9ZtNC~0USIu7K0~D9wPTNEkmFLG11AwCLtFZLBzuhfF~uDa4pPEz-tPplPl9nRkQ__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Sed at fermentum</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 5*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/fd2f/84fd/2c2d0ada0fbe15246b3ac6692d538aea?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJX8biSRI-aR~2acL8lQvKRS7V81ypn6PzCBrgnqB~O3Q3tIuG7FcEUbxPBsQqTLv-Mh4AjNf8jMzM1uJl1hHQP~XYL~SGXx0pvN0cjCasu5qggEeTHcOXcj5Q7JWu3STnq8ZM-TyKXRhtajSKUdrOe5M6SDrD6HnZkRYnYsz4euoJf5gVkQJLgzZOvhEPAauqL2syI76QH4TQEhnoU6eqXuWDoDTZtxWaDSwPoH2EGFmF~FdW9~a-a4FB6sf4nsuXnST2d5vXC9ON-zEtcUITkCMUYAvJQOJ1ibhQCXhRsu8L3Vxsss57m0gsoWeKkQSg1R0MnJ-FB14RrRJuHsWQ__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Fusce pellentesque at</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 6*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/8143/e8cd/09780c98df0e8ca5a7c576a7097d9a4d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gKz92uwea3y7-3NJkmr1R2pUL0OnNuG7dkVx6UkTuRkBCri9vbIeheKQF4XU-KngwUcR8HwsXA7cPSKZMzDaNkG07uHS3g8Ueggfvrhj73gLWXYOwYGdNyPW~e-W1p9nUE-xk4NX81VAoG29~fsVsaujjRi1KSFaGoeewlrQOjUE6WkdA-Mg7hNgq8xny6sF79A~W4I0L3P0eQ7A8ByJZtFImOi8ETAYhlzKXDLccSeaRgYnZ6GByxpqtMD6lIKGYgYFyJXoI0du6N2pys-9NF3Eigu431lSGay1MmgDGarcPUWcIxHhScjhfi634ElYVU4LHi8xl2g78eitUlzisA__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Vestibulum magna laoreet</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 7*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/59de/f39f/4cf484a463c3db3e312bea9e660f449d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzTYPvWPqn7sO6iEz~31kTVGQDrOlwnnxUy~cixVoyNRujmmGYe0g2UcXc-xtRJQF~kttGr0uQ5S2UQdHmb3DRXlFf7pq7FtrtxVYW39wqKoBNxbEOwXMljpZgivslU0-Jo8tXfqKl2VCmyCXNuXSjMQhTDsdXhvh8~3qaboiC1KFYUUVHBFC2gc5FeUsY6dfj04nF8i3Q0BYkBzjD0JY1eGL8d0b9nCbsQLsgq9HT-Z7NwtxuZz1~H9HveOdyrnsXiyYkESAMdujohZMRlLu9qur56peL3tDEOZzpVVnlLc9MQkYYTCCfU-J5bqGI1RwE00g0E6nK-AWEukSwX6vw__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Sollicitudin amet orci</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 8*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/68de/911f/7877d7223d13169b98bd9540d24d5673?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NX0FYv9YaK57rr-ZktEWrDlEhNv4R0bFLmJswAJhALPLoZ2fBEp2eMoz8Uc8jSRLlAxbZGmOFv7FBWPlUZ-H1O7zTxYlZdiMDTU9c9nuaKr64VakQUM0fCc~-lcvqJvlybrH-nAjbsvg-2PrFJj5jT7GQcKfI5ykMiVRVcw60uo5VK9L8qsN9Y4F9MOsEfAT4wgJ6Gm2QUF~BfKgJdffRp8iIh3p2gV1lMD9IXHX1KN7Opg4mFMCku8cWFowVMBN~eGITsBzQQJi6pQSYAHRTp11MrwpGhjUexTvT1Pv85bmSvEyyYU4kow6~wG0AaBZCF3cJQxCZDSvBcwhHcycDg__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Ultrices mauris sit</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 9*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/dad6/283f/cf563ab816e36d2754c94e88b5f4ed21?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z9apBs-c9qYWr3Gs4MTGN2eM19E1N8w5kCOq1kp7bdQxe5GjD2tYTHMDyutF1OKRNbx2sH~ffyy5l6Yl54GyOB6ozKw9yPg6uCCRGFJLx5v7uh-EnN7~hC6EAn~Zob6fZ2xNCy51dU9dzwHXrDO0-Hn4TUAG7yzJM-pTus7dL~6wBisaUEEPwLEufN9ojS0UV2qMd6tbyETe~uT1hB7y2PlnAXfV2zBviHV8w34Gt7Q0FrQMBudhpt9O37QIEOgeJ1hdvqSRV8tLjNjiMTM6YHUgu4htcXOqcp4qbKCanH0FMCIXH~qF8OsuA5T3Y4tIpdKVb12vhMbpOn2aRasg~Q__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Pellentesque condimentum ac</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 10*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/5d23/d89f/fb399a001ca2c9596b7e4e167945bbdc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j5YP8OVAiQIbESyRWu9zS2fiFFzseGXTkjm5Bwe7a~cCkbYLoYPbrT8XGaHVu1aUxRquBC788PV0JkEuK6SHaQ-edSFSKIW4mF-DbrBQcV8uq9bNMEF1eOjTskMzhd2OLEM6zztsiN9xGXI8Sgb8twxgwUVLtOJ~y7q-skVG2zQsgmu45VSEKGCSrheHuqpMNJ4ETQW6Cp0-YthDROOreMTD9DM4a7YFC9ZROs9sgGGg9wM5AV-i8iZPNgtzRYjKlYhzuRc~cJ52qGrdzB-gMty05~PugtlnDw6L91l3W0vJxIcgvJtKPCyUAmRlMZVknEhPEB6YXC1bcNrUM9sbUg__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Cras scelerisque velit</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 11*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/93ea/e296/578b831cdad3eb6622f8100a707cf7c3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuxMUNzA8K9G-GluOxgd0y~aq~w9BhJkGQ2A1AjQpm4sZqeJ8Fn~x1GSHX3ng2pNu-GlYXV4JbkCsk6hdCMTZFoN5yG6wmoSoSBgPe4hkdeFGYjgK-LwkhsQ2M7mXqNVUpH91qYpVgo9awCnTPRLjiRQG97ZujK6zF6f9Svhn4lRbXXSY0UTq5UC-F5iemTHs1iWuJ6Xz0jcDkhBX0m9h~SfDlEsTOpntDSG~VSadeZWBisFrwuwnd1h8xCnI1UvGB2nHCpwgDxt5p6TFlYXwKtaPjW2rWgT-ld6GpftT3fIDYD5C6wWEM8XvW7vTnGFODoVxI1F9cWjzQKjz-d2ZA__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Lectus vulputate faucibus</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

      {/*Product 12*/}
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full ml-3 mt-10">
        <a className="SGD-P-img block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block bg-gray-100" 
          src="https://s3-alpha-sig.figma.com/img/c298/504d/adeb68467abfedd08c1e1d67526e0d7a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZj~x588BdIMmLB07qzsbzZUbDCarXyyo1jSvp4B1-VztgEOzK9cOlLE11h4ia4aJjEyeL2GBC1~9tgHAGkIlnQDOu-19LPsi1LfYGCnvPT5VsdGUzZTrzYER5nanL1ddP1cqSdYB-dz1oTnpK4jeyHTswC3MH3HpiDiAjq29R2GT6GhDZNRahSUO6KCAK2trwZ99AyW-v-hO1YVrP6coY-IqiswTohuNYFa0I31UeZsY4qaO4y6ZkdL6Q7yuvkaELnWe3qdQOsIMNo5N2tkwp9ZtNC~0USIu7K0~D9wPTNEkmFLG11AwCLtFZLBzuhfF~uDa4pPEz-tPplPl9nRkQ__"/>
        </a>
        <div className="mt-5 text-center ">
          <h2 className="text-slate-800 title-font text-sm font-medium">Purus risus, ut</h2>
          <span className="flex space-x-2 justify-center mt-2">
            <p className="w-3 h-3 rounded-full bg-yellow-600"></p>
            <p className="w-3 h-3 rounded-full bg-red-600"></p>
            <p className="w-3 h-3 rounded-full bg-blue-600"></p>
          </span>
          <span className="flex mt-3 text-sm items-center justify-center space-x-3">
          <p className="text-slate-800">$26.00</p>
          <del className="text-pink-400">$42.00</del>
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

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
      <Footer/>
      </div>

        </main>
    )
}