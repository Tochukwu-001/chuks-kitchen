'use client';

import React, { useState } from 'react'
import { Styles } from '@/components/Styles'

const OrderSummaryPage = () => {
  const [promoCode, setPromoCode] = useState('')
  const [deliveryMode, setDeliveryMode] = useState<'delivery' | 'pickup'>('delivery')
  const [instructions, setInstructions] = useState('')

  const subtotal = 9200
  const deliveryFee = 500
  const serviceFee = 200
  const tax = 0
  const total = subtotal + deliveryFee + serviceFee + tax

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 px-4">
      {/* Card full width on mobile */}
      <div className="w-full md:max-w-lg bg-white rounded-md shadow-sm p-5 max-md:p-3">

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-2">
          Order Summary
        </h1>

        {/* Promo Code */}
        <div className="mb-5">
          <p className="text-base font-semibold text-gray-800 mb-2">Add a Promo Code</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Code here"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors"
            />
            <button
              className="px-5 py-2 rounded-lg text-white text-sm font-semibold shrink-0"
              style={{ backgroundColor: Styles.primaryOrange }}
            >
              Login
            </button>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee</span>
            <span>₦{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₦{tax === 0 ? '0' : tax}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Total */}
        <div className="flex justify-between items-center mb-5">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">
            ₦{total.toLocaleString()}
          </span>
        </div>

        {/* Delivery / Pick up Toggle */}
        <div className="flex rounded-lg overflow-hidden mb-5 border border-gray-200">
          <button
            onClick={() => setDeliveryMode('delivery')}
            className="flex-1 py-2 text-sm font-semibold transition-colors"
            style={
              deliveryMode === 'delivery'
                ? { backgroundColor: Styles.primaryOrange, color: '#fff' }
                : { backgroundColor: '#f3f4f6', color: '#6b7280' }
            }
          >
            Delivery
          </button>
          <button
            onClick={() => setDeliveryMode('pickup')}
            className="flex-1 py-2 text-sm font-semibold transition-colors"
            style={
              deliveryMode === 'pickup'
                ? { backgroundColor: Styles.primaryOrange, color: '#fff' }
                : { backgroundColor: '#f3f4f6', color: '#6b7280' }
            }
          >
            Pick up
          </button>
        </div>

        {/* Special Instructions */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Special Instruction{' '}
            <span className="font-normal">for restaurant{deliveryMode === 'delivery' ? 's' : ''}</span>
          </p>
          <textarea
            rows={4}
            placeholder="E.g no onion, food is too spicy, food is too hot nhhhhnnhh&#10;food is tasty"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors resize-none"
          />
        </div>

        {/* Proceed to Checkout */}
        <button
          className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: Styles.primaryOrange }}
        >
          Proceed to Checkout
        </button>

      </div>
    </div>
  )
}

export default OrderSummaryPage