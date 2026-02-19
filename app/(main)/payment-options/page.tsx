'use client';

import React, { useState } from 'react'
import { Styles } from '@/components/Styles'
import { useRouter } from 'next/navigation'

const TOTAL = 10
const ORANGE_COUNT = 2

const Loader = () => (
  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      className="animate-spin"
      style={{ animationDuration: '0.9s' }}
    >
      {Array.from({ length: TOTAL }).map((_, i) => {
        const angle = (i * 360) / TOTAL
        const isOrange = i >= TOTAL - ORANGE_COUNT
        const opacity = isOrange ? 1 : 0.15 + (i / TOTAL) * 0.65
        const color = isOrange ? Styles.primaryOrange : `rgba(150,150,150,${opacity})`
        return (
          <line
            key={i}
            x1="22" y1="6" x2="22" y2="13"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 22 22)`}
          />
        )
      })}
    </svg>
  </div>
)

const PaymentPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [payWith, setPayWith] = useState<'card' | 'bank' | 'transfer'>('card')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [saveCard, setSaveCard] = useState(false)

  const handlePayment = () => {
    setLoading(true)
    setTimeout(() => {
      router.push('/order-completion')
    }, 3000)
  }

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16)
    return digits.replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4)
    if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2)
    return digits
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-start justify-center py-8 px-4">

      {/* Loader overlays only the page content, not navbar/footer */}
      {loading && <Loader />}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-6">

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Payment</h1>
        <hr className="border-gray-200 mb-4" />

        {/* Pay With */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-gray-800 mb-3">Pay With:</p>
          <div className="flex items-center gap-6">
            {(['card', 'bank', 'transfer'] as const).map((method) => (
              <label key={method} className="flex items-center gap-1.5 cursor-pointer">
                <div className="relative w-4 h-4">
                  <input
                    type="radio"
                    name="payWith"
                    checked={payWith === method}
                    onChange={() => setPayWith(method)}
                    className="sr-only"
                  />
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: payWith === method ? Styles.primaryOrange : '#d1d5db',
                      backgroundColor: '#fff',
                    }}
                  >
                    {payWith === method && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: Styles.primaryOrange }}
                      />
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-700 capitalize">{method}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234  5678  9101  1121"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors tracking-wider"
          />
        </div>

        {/* Expiration Date + CVV */}
        <div className="flex gap-3 mb-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">Expiration Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(formatExpiry(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 outline-none focus:border-orange-400 transition-colors"
            />
          </div>
        </div>

        {/* Save card details */}
        <label className="flex items-center gap-2 cursor-pointer mb-5">
          <div
            className="w-4 h-4 border rounded flex items-center justify-center shrink-0"
            style={{
              borderColor: saveCard ? Styles.primaryOrange : '#d1d5db',
              backgroundColor: saveCard ? Styles.primaryOrange : '#fff',
            }}
            onClick={() => setSaveCard(!saveCard)}
          >
            {saveCard && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-sm text-gray-600">Save card details</span>
        </label>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full py-3 rounded-xl text-white text-sm font-semibold mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ backgroundColor: Styles.primaryOrange }}
        >
          Pay ₦9,900
        </button>

        {/* Privacy note */}
        <p className="text-xs text-gray-400 leading-relaxed">
          Your personal data will be used to process your order, support your experience
          throughout this website, and for other purposes described in our privacy policy.
        </p>

      </div>
    </div>
  )
}

export default PaymentPage