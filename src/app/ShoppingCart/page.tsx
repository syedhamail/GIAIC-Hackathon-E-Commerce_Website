"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";
import React, { useState } from "react";

import { TiTick } from "react-icons/ti";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([

    /*Product 1*/
    {
      id: 1,
      name: "Ut diam consequat",
      image: "https://s3-alpha-sig.figma.com/img/06df/685d/89ce690ebe62b390c3d5145dda42ffa0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M782tKXAk5HJmW2mWq4W68dmT-r8sAv0rc6tWi6I9GtN-9kxt413Q0XYG9XC9H9Uh2TGR7VRYLxQt9kcWG1uQhtUkGCaejW8z6GNqBuIpXJ8RTurfWTub7SiWYwX7yVnD4mXInb0J-EK1mmnN2RNuACBiFs5O4gkwI8fYOcNWdQeQhEibivqXkJB~kbwk4GlDhlv9u3SGnfWr2ONaO4CDB8gFBAVb1NyFZEH~asymtzA7uZ4FANCRr41w2XAe~KRHs~sgDF-cnvWfMQpBvwe6OCfyYZhgC9uKmakRRFgsu4iUkh7sPFJFu0N1NEkcNt9V0Gsr5apQh~fYTkaEQLArw__",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 2*/
    {
      id: 2,
      name: "Vel faucibus posuere",
      image: "https://s3-alpha-sig.figma.com/img/525b/b204/ba97a271085d6af4d3fae04b40a6588f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LCw~ni3XZv8-RAVbHtDB~YcQeXiUmHF6xVYaE38pm4ijlSOYSktoM2FfRkHwHl1EWGFyYyvVzdPszixCz9GJD7AxVRGwabyjajamRajGaL0QGqR8svDi6-8c0JBVJZs379MboEaeyOYPjBuOdwuyb4UvUrl~QBVD-9ggMr8gdP7XDQe7dIm1zPemcvKL6T-dqTsUbB90Q9inoK~Hsh9rBlv5qlysRds-L72PMQsVTlEi5TQ00tvBWHAj4ZAeXWsyPKko~5le5L2QEFKK2N7tjVx5CkRGQQRL041YjhpUhjSx5iqrFtTy-d50MirMH~fX1NeqK7uJW4ZTZla3w50jMg__",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 3*/
    {
      id: 3,
      name: "Ac vitae vestibulum",
      image: "https://s3-alpha-sig.figma.com/img/6928/f331/aca9be75144a86da573d03358146b905?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k8RKTmKT0jiavQ2PEgJg-Uj~nv-XvQsc8heicVgHFN8is8C8ft5H3EVGEE0ot4rYbP9lQnX8c1wiNeBLagv7BVNfhRtQo8DSY7EIBwE5tqr6kzIsfZ~gUQHoTZyDYhva4ShyChyyAosw9cCKTaSbPlVaEN5EhHCkHBXm7cDWyQroezXSV00~XXqZOYu1e7cM1SXT5AzFPYUNhqhMnh9zR~d0XQ8k-e-L-4Yp02w67SdPSWGAwrLDbZ0n~69hmwKfIWfDk~2b6N9f-z6r66DE7Kz1hKlbE4LchjwOqIJGQGKXiIXgEuv0gMDY3Vpco-Yt0PUI5Hq~2s9oQDkB6ZBhsw__",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 4*/
    {
      id: 4,
      name: "Elit massa diam",
      image: "https://s3-alpha-sig.figma.com/img/96ae/fed8/b00e3df894e9e0d82b9973de84e08789?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NBeccUmjZp1mlk~dWVBXhi4SBEHs8cGxVbH5WIJmzaOTLPCPBhrYbm9ZZVeY5DkDKVFn5IRd3-Y3DK1LVGs~QguNh2zjlLfgDitZNw1bEOEKtEKaKd9J3VArVGwb0p9lJRTU~CnHo9Sm4mGo13kcsSIsByQcROik7luTyuRzyiugWWbDPZbiTesOkDUFrSsaaEosPq~5N8H-ahbitOdO2dXOEihbIvPuliZMqO6YqBVvcr0pLPAkG30aw0T6YaH~aZnYiOn6qZdSBl2amad7SgJSWGo96TInuHVu4y9rfLD2v51nfeMpHB1SU7wQJcB0n71-I7kEhgZ-E5XYp2zQuQ__",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

    /*Product 5*/
    {
      id: 5,
      name: "Proin pharetra elementum",
      image: "https://s3-alpha-sig.figma.com/img/f006/4cfe/cd7d7e333cb343c07df1a46d3ba07d2c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kugNtSoE3budf~paWRvHogkQ7ej4Ql0mZ63MGRF-vaAJO6F3gwlw6n-69IfXCL-FPi9Htkmf1nMGvmAmjswQMyBBIk7w76XYRH5u5xHEloX3CMuYzamv3KxZ7z5oeyEH-xZmiO~cd6-XGWBBfnbiF5D0tyuFRKIbxUviWmztZNamCaVW7xDM78dvZVbJn5MEdW9fn1I~ez2n4ihzErEtgtJxQasCG9aAE-50vNEMcQCVcuvovijeJ5YEdo3k5zDUR~lPejFAO1A2ea4KTTH8C19WDJoBpEK6pcVAQtXaQzoivW~8PT7HEhBoWWnj8OPE5-Gi-lOI72Jcse6qG-EqaA__",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
    },

  ]);

  const updateCart = () => {
    alert("Cart updated!");
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    
    <main>

        <Header />

        {/*Hero Section*/}

      <div className="HS-SLSB-SL-SGD">
        <span>
          <h1 className="ml-60 pt-24 text-4xl font-bold">Shopping Cart</h1>
          <h1 className="flex ml-60 mt-3 pb-28 text-sm font-bold">
            <Link href={"/"}>Home</Link>
            <p className="ml-3">Page</p>
            <p className="ml-3 text-pink-400">Shopping Cart</p>
          </h1>
        </span>
      </div>

      {/*Shopping Cart Section mx-auto p-6*/}
      <section className="flex justify-center mt-28">
      <div>
    <div className="SC-S container">
      <table className="w-full text-left border-collapse">

        <thead>
          <tr>
            <th className="p-4 ">Product</th>
            <th className="p-4 ">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4 ">Total</th>
          </tr>
        </thead>
        
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-4 flex items-center">
                {/*Product Text*/}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />

                {/*Product Text*/}
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Color: {item.color} <br />
                    Size: {item.size}
                  </p>
                </div>
              </td>

              <td className="p-4 text-sm">${item.price.toFixed(2)}</td>
              <td className="p-4 text-sm">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 border text-center"
                  onChange={(e) =>
                    setCartItems((prev) =>
                      prev.map((cartItem) =>
                        cartItem.id === item.id
                          ? { ...cartItem, quantity: Number(e.target.value) }
                          : cartItem
                      )
                    )
                  }
                />
              </td>
              <td className="p-4 text-sm">
                £{(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-sm flex justify-between">

        <button
          className="bg-pink-500 text-white  px-4 py-2 rounded hover:bg-pink-600"
          onClick={updateCart}
        >
          Update Cart
        </button>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>
    </div>
        </div>

          {/*Cart Total & Calculate Shopping*/}
        <div className="ml-28">
            <h1 className="font-bold mt-4 ml-24">Cart Totals</h1>
            <div className="bg-gray-100 w-72 mt-5 rounded">

            <span className="flex justify-between pt-10 ml-7 border-b-2 border-gray-400 w-60">
                <h1 className="font-semibold ">Subtotals:</h1>
                <p className=" text-sm">£32.00</p>
            </span>
            <span className="flex justify-between mt-10 ml-7 border-b-2 border-gray-400 w-60">
                <h1 className="font-semibold ">Totals:</h1>
                <p className=" text-sm">£160.00</p>
            </span>

            <h1 className="flex text-xs items-center ml-7 mt-6">
            <TiTick className="bg-green-500 text-white rounded-full mr-2"/>
            Shipping & taxes calculated at checkout
            </h1>

            <Link href={"/Order"}>
            <button className="bg-green-500 text-sm text-white font-sans ml-11 mt-7 mb-6 py-1.5 px-9 rounded">
            Proceed To Checkout
            </button>
            </Link>
            </div>

            <h1 className="font-bold mt-5 ml-14">Calculate Shopping</h1>
            <div className="bg-gray-100 w-72 mt-5 rounded">

            <span className="flex pt-7">
            <input type="text" placeholder="Bangladesh"
             className="ml-7 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-60" />
            </span>
            <span className="flex pt-7">
            <input type="text" placeholder="Mirpur Dhaka - 1200"
             className="ml-7 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-60" />
            </span>
            
            <span className="flex pt-7">
            <input type="text" placeholder="Postal Code"
             className="ml-7 pt-1 text-black font-sans text-sm bg-transparent border-b-2 border-gray-300 w-60" />
            </span>

            <button className="bg-pink-500 text-sm text-white font-sans ml-7 mt-7 mb-6 py-1.5 px-9 rounded">
            Calculate Shipping
            </button>
          
            </div>

        </div>

        </section>

        {/*Footer*/}

      <div className="mt-28">
      <Footer/>
      </div>

    </main>
  );
};

export default ShoppingCart;