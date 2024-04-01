import React, { useState } from "react";
import './Css/Banner.css'

export const Banner = () => {
  const [billingType, setBillingType] = useState("month");
  const [basicPrice, setBasicPrice] = useState("19");
  const [premiumPrice, setPremiumPrice] = useState("29");
  const [proPrice, setProPrice] = useState("39");

  const handleMonthlyBilling = () => {
    setBillingType("month");
    setBasicPrice("9.900");
    setPremiumPrice("75.000");
    setProPrice("180.000");
  };

  const handleAnnualBilling = () => {
    setBillingType("year");
    setBasicPrice("205");
    setPremiumPrice("313");
    setProPrice("421");
  };

  return (
    <div className="min-h-full bg-gray-200 pb-12">
      <div className="w-full bg-blue-900 pt-16 pb-24 text-center">
        <h4 className="text-2xl text-gray-100">Elige tu PLan </h4>
        <p className="text-sm text-gray-100 mt-2">
          tarifas diseñadas para empresas de todos los tamaños. Elige el paquete
          que se adapte a tus necesidades.
        </p>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleMonthlyBilling}
            className={`text-gray-800 px-4 py-2 rounded-tl-lg rounded-bl-lg bg-gray-200 ${
              billingType === "month" ? "bg-blue-300" : "bg-gray-200"
            }`}
            title="Choose Monthly billing"
          >
            Pago Mensual
          </button>
          <button
            onClick={handleAnnualBilling}
            className={`text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg bg-gray-200 ${
              billingType === "year" ? "bg-blue-300" : "bg-gray-200"
            }`}
            title="Choose Annual billing"
          >
            Pago Anual
          </button>
        </div>
      </div>
      <div className=" w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
        <div className="  w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className=" card  bg-white shadow-2xl rounded-lg py-4">
            <p className="  text-xl text-center font-bold text-blue-600">
              Basic{" "}
            </p>

            <p className="text-center py-8">
              <span className="text-4xl font-bold text-gray-700">
                $<span>{basicPrice}</span>
              </span>
              <span className="text-xs uppercase text-gray-500">
                / <span> {billingType}</span>
              </span>
            </p>
            <ul className="border-t border-gray-300 py-8 space-y-6">
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">Revision</span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">Diagnostico</span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">C</span>
              </li>

              {/* Otros elementos de la lista */}
            </ul>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150"
                title="Purchase"
              >
                Comprar
              </a>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg py-4 card">
            <p className="text-xl text-center font-bold text-blue-600">
              Premium
            </p>
            <p className="text-center py-8">
              <span className="text-4xl font-bold text-gray-700">
                $<span>{premiumPrice}</span>
              </span>
              <span className="text-xs uppercase text-gray-500">
                / <span>{billingType}</span>
              </span>
            </p>

            <ul className="border-t border-gray-300 py-8 space-y-6">
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">Aceleracion</span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">
                  Cambio de tecnologia en HD
                </span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">C</span>
              </li>
            </ul>

            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150"
                title="Purchase"
              >
                Comprar
              </a>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-lg py-4 card">
            <p className="text-xl text-center font-bold text-blue-600 ">Pro</p>
            <p className="text-center py-8">
              <span className="text-4xl font-bold text-gray-700">
                $<span>{proPrice}</span>
              </span>
              <span className="text-xs uppercase text-gray-500">
                / <span>{billingType}</span>
              </span>
            </p>

            <ul className="border-t border-gray-300 py-8 space-y-6">
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">limpieza Full</span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">
                  Instalacion de programas
                </span>
              </li>
              <li className="flex items-center space-x-2 px-8">
                <span className="bg-blue-600 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="text-gray-600 capitalize">
                  Instalacion de S.O.
                </span>
              </li>
            </ul>

            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150"
                title="Purchase"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};