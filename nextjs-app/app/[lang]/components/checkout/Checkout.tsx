"use client";
import { useState } from "react";

type CheckoutData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  zip: string;
  notes: string;
};

type CheckoutProps = {
  onSubmit?: (data: CheckoutData) => void;
};

export default function CheckoutForm({ onSubmit }: CheckoutProps) {
  const [formData, setFormData] = useState<CheckoutData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    zip: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Billing Information
      </h2>

      {/* First + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Country
        </label>
        <select
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Select a country</option>
          <option value="IN">India</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
        </select>
      </div>

      {/* City + ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="zip" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            ZIP
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            required
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Additional information..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium"
      >
        Submit
      </button>
    </form>
  );
}
