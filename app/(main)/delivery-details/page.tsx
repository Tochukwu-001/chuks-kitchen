"use client";

import React, { useState } from "react";
import { Styles } from "@/components/Styles";
import Link from "next/link";

const DeliveryDetailsPage = () => {
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [contactAddress, setContactAddress] = useState("+234 801 234 5678");

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Delivery Details
        </h1>

        {/* Address Box */}
        <div className="border border-gray-300 rounded-lg px-4 py-3 mb-5 flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-700">
              Home: 123 Main Street, Victoria Island, Lagos
            </p>
            <p className="text-sm text-gray-700">Apt 4B, Opposite Mega Plaza</p>
          </div>
          <button
            className="text-sm font-medium shrink-0 ml-4"
            style={{ color: Styles.primaryOrange }}
          >
            Change Address
          </button>
        </div>

        {/* Delivery Time */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Delivery Time
          </p>
          <div className="border border-gray-300 rounded-lg px-4 py-3">
            <p className="text-sm text-gray-600">ASAP(30-25)</p>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Delivery Instructions (Optional)
          </p>
          <textarea
            rows={4}
            placeholder="E.g leave at the front of the door, knock twice....................."
            value={deliveryInstructions}
            onChange={(e) => setDeliveryInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors resize-none"
          />
        </div>

        {/* Contact Address */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Contact Address
          </p>
          <input
            type="text"
            value={contactAddress}
            onChange={(e) => setContactAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-600 outline-none focus:border-orange-400 transition-colors"
          />
        </div>
        <Link
          href={"/payment-options"}
          style={{ backgroundColor: Styles.primaryOrange }}
          className="block text-center text-white font-semibold py-4 rounded-lg text-base"
        >
          Make Payment
        </Link>
      </div>
    </div>
  );
};

export default DeliveryDetailsPage;
