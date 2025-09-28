"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const params = useSearchParams();
  const name = params.get("name");
  const price = params.get("price");
  const [email, setEmail] = useState("example@email.com");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Half - Image */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/pay.png" // public ফোল্ডারে pay.png রাখো
          alt="Payment Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Half - Content */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex flex-col items-center py-8 px-15">
        {/* Logo */}
        <div className="my-4 self-start">
          <Image
            src="/logo.png" // public ফোল্ডারে logo.png রাখো
            alt="Site Logo"
            width={180}
            height={80}
          />
        </div>

        {/* Card */}
        <div className="rounded-2xl px-4 w-full">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-600 mb-1">
            Price: <span className="font-medium">${price}</span>
          </p>
          <p className="text-gray-500 mb-6 text-sm">
            Please review the product details and complete your payment below.
          </p>

          {/* Payment info */}
          <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-lg font-medium text-[#ff0000] mb-2">
              Payment Information
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Secure SSLCommerz payment integration</li>
              <li>Instant confirmation after payment</li>
              <li>Refund option within 7 days</li>
            </ul>
          </div>

          {/* Email input */}
          <div className="mb-6 text-left">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#ff0000]/40 rounded-xl focus:outline-none focus:border-[#ff0000]"
            />
            <p className="text-xs text-gray-500 mt-1">
              This email will be used to send you the invoice and updates.
            </p>
          </div>

          {/* Pay button */}
          <button className="w-full px-4 py-3 bg-[#ff0000] text-white rounded-xl font-medium hover:bg-red-700 transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
