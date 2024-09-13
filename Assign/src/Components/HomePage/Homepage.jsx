import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMenu, AiOutlineGlobal, AiOutlineShoppingCart, AiOutlineLogin, AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import hii from "./hii.png";
import bye from "./bye.png";

const Homepage = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isStartSellingOpen, setStartSellingOpen] = useState(false);
  const [isToolsOpen, setToolsOpen] = useState(false);
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
      <nav className="sticky top-0 bg-white shadow-lg z-10 border-b border-gray-300">
        <div className="flex items-center p-4 md:p-6 max-w-screen-xl mx-auto">
          <div className="flex items-center flex-grow">
            <div className="text-2xl md:text-3xl font-bold text-gray-800">Gelato</div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 flex-shrink-0">
            <div className="flex items-center space-x-2 text-xs md:text-sm">
              <AiOutlineGlobal />
              <span>IN/INR</span>
            </div>
            <button className="hidden md:block text-xs md:text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Contact us
            </button>
            <AiOutlineShoppingCart className="text-xl md:text-2xl text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
            <button className="flex items-center space-x-2 text-xs md:text-sm text-gray-700 hover:text-gray-900 transition-colors bg-gray-200 hover:bg-gray-300 px-3 md:px-4 py-1 md:py-2 rounded-full">
              <AiOutlineLogin className="text-lg" />
              <span>Sign In</span>
            </button>
            <button className="bg-black text-white px-4 md:px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Sign Up for Free
            </button>
          </div>
        </div>
      </nav>

      <nav className="shadow-md">
        <div className="max-w-screen-xl mx-auto p-3 md:p-4">
          <ul className="flex flex-wrap space-x-2 md:space-x-8 text-gray-700 justify-center">
            <li className="relative cursor-pointer hover:text-gray-900 transition-colors">
              <div onClick={() => setProductsOpen(!isProductsOpen)} className="flex text-black font-bold items-center">
                Products <AiOutlineDown className="ml-1" />
              </div>
              {isProductsOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg w-36 md:w-40 space-y-2 py-2">
                  <li className="hover:bg-gray-100 px-4 py-2">T-Shirts</li>
                  <li className="hover:bg-gray-100 px-4 py-2">Mugs</li>
                  <li className="hover:bg-gray-100 px-4 py-2">Posters</li>
                </ul>
              )}
            </li>

            <li className="relative cursor-pointer hover:text-gray-900 transition-colors">
              <div onClick={() => setStartSellingOpen(!isStartSellingOpen)} className="flex text-black font-bold items-center">
                Start Selling <AiOutlineDown className="ml-1" />
              </div>
              {isStartSellingOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg w-36 md:w-40 space-y-2 py-2">
                  <li className="hover:bg-gray-100 px-4 py-2">How it works</li>
                  <li className="hover:bg-gray-100 px-4 py-2">Seller tools</li>
                </ul>
              )}
            </li>

            <li className="relative cursor-pointer hover:text-gray-900 transition-colors">
              <div onClick={() => setToolsOpen(!isToolsOpen)} className="flex text-black font-bold items-center">
                Tools and Apps <AiOutlineDown className="ml-1" />
              </div>
              {isToolsOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg w-36 md:w-40 space-y-2 py-2">
                  <li className="hover:bg-gray-100 px-4 py-2">App 1</li>
                  <li className="hover:bg-gray-100 px-4 py-2">App 2</li>
                </ul>
              )}
            </li>

            <li className="relative cursor-pointer hover:text-gray-900 transition-colors">
              <div onClick={() => setPricingOpen(!isPricingOpen)} className="flex text-black font-bold items-center">
                Pricing <AiOutlineDown className="ml-1" />
              </div>
              {isPricingOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg w-36 md:w-40 space-y-2 py-2">
                  <li className="hover:bg-gray-100 px-4 py-2">Plan 1</li>
                  <li className="hover:bg-gray-100 px-4 py-2">Plan 2</li>
                </ul>
              )}
            </li>

            <li className="relative cursor-pointer hover:text-gray-900 transition-colors">
              <div onClick={() => setResourcesOpen(!isResourcesOpen)} className="flex text-black font-bold items-center">
                Resources <AiOutlineDown className="ml-1" />
              </div>
              {isResourcesOpen && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg w-36 md:w-40 space-y-2 py-2">
                  <li className="hover:bg-gray-100 px-4 py-2">Blog</li>
                  <li className="hover:bg-gray-100 px-4 py-2">Tutorials</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row min-h-screen justify-between items-center p-8 md:p-12 lg:p-32">
        <div className="max-w-lg lg:max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Print on demand for <br /> your ecommerce business
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
            Sign up for free and only pay for what you sell.
          </h2>
          <h3 className="text-md md:text-lg mb-8">
            Turn your passion into profit with the world's largest print on demand network.
          </h3>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 md:px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Get started for free
            </button>
            <button className="border border-gray-800 px-6 md:px-8 py-3 rounded-full text-gray-800 hover:bg-gray-100 transition-colors">
              See our products
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <img src={bye} alt="Shopify Logo" className="h-8 md:h-10" />
            <div>
              <p className="font-semibold text-gray-800">4.8 / 5</p>
              <p className="text-sm text-gray-500">based on 887 reviews</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg lg:w-100 rounded-lg overflow-hidden">
          <img src={hii} alt="T-Shirt" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
