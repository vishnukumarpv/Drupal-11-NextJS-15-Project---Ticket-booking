"use client";
import { useState } from "react";

type QuantitySelectorProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
};

export default function QuantitySelector({
  min = 1,
  max = 99,
  defaultValue = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(defaultValue);

  const updateQuantity = (newValue: number) => {
    if (newValue < min || newValue > max) return;
    setQuantity(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center">
      {/* Minus button */}
      <button
        type="button"
        onClick={() => updateQuantity(quantity - 1)}
        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span className="sr-only">Decrease quantity</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>


      <input
        type="text"
        value={quantity}
        onChange={(e) => updateQuantity(Number(e.target.value))}
        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center disabled"
        min={min}
        max={max}
        disabled
      />

      <button
        type="button"
        onClick={() => updateQuantity(quantity + 1)}
        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        <span className="sr-only">Increase quantity</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}
