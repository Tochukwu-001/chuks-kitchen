'use client';

import React from 'react'
import { Styles } from '@/components/Styles'
import Link from 'next/link'

const OrderSuccessPage = () => {
  const orderId = '123RGR231567Y'

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

      {/* Success Icon */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: '#2e9e5b' }}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Success Text */}
      <h2 className="text-base font-semibold text-gray-800 mb-1">
        Order Placed Successfully!
      </h2>
      <p className="text-sm text-gray-800 mb-10 text-center">
        Your delicious Chuks Kitchen meal is on its way!
      </p>

      {/* Order Confirmed */}
      <p className="text-base font-semibold text-gray-800 mb-3 text-center">
        Order #{orderId} Confirmed
      </p>

      {/* Track Order Button */}
      <button
        className="w-full max-w-xs py-3 rounded-lg text-white text-sm font-semibold mb-3"
        style={{ backgroundColor: Styles.primaryOrange }}
      >
        Track Order
      </button>

      {/* Generate Receipt */}
      <button className="text-sm text-gray-500 mb-2 hover:underline">
        Generate Receipt
      </button>

      {/* Need help */}
      <Link
        href="#"
        className="text-sm font-medium hover:underline"
        style={{ color: Styles.primaryOrange }}
      >
        Need help with your order?
      </Link>

    </div>
  )
}

export default OrderSuccessPage