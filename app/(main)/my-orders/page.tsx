'use client';

import React, { useState } from 'react'
import { Styles } from '@/components/Styles'
import { FiPlus, FiMinus, FiTrash2, FiX } from 'react-icons/fi'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const cartItems = [
  {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    image: '/food1.png'
  },
  {
    id: 2,
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    image: '/food2.png'
  },
  {
    id: 3,
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    image: '/food3.png'
  },
  {
    id: 4,
    name: 'Jollof Rice & Fried Chicken',
    description: 'With plantain, extra pepper sauce',
    price: 3200,
    quantity: 1,
    image: '/food1.png'
  }
]

const CartPage = () => {
  const [items, setItems] = useState(cartItems);
  const router = useRouter()

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="space-y-2">
            {items.map((item) => (
              <div onClick={()=> router.push("/food-details")} key={item.id} className="border border-gray-200 py-1 px-3 cursor-pointer">

                {/* ── MOBILE LAYOUT (hidden on sm+) ── */}
                <div className="flex gap-3 sm:hidden">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 self-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right side */}
                  <div className="flex-1 min-w-0 py-1">
                    {/* Name */}
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">
                      {item.name}
                    </h3>
                    {/* Description */}
                    <p className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </p>

                    {/* Line 1: Quantity controls */}
                    <div className="flex items-center justify-between gap-2 my-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <FiMinus className="text-xs text-gray-700" />
                      </button>

                      <span className="text-sm font-semibold text-gray-900 w-5 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <FiPlus className="text-xs text-gray-700" />
                      </button>
                    </div>

                    {/* Line 2: Price + X */}
                    <div className="flex items-center justify-between mt-1">
                      <p style={{ color: Styles.primaryOrange }} className="text-sm font-bold">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-5 h-5 rounded-sm text-white flex items-center justify-center"
                        style={{ backgroundColor: Styles.primaryOrange }}
                      >
                        <FiX className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
                <div className="hidden sm:flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <FiMinus className="text-sm text-gray-700" />
                    </button>
                    
                    <span className="text-xl font-semibold text-gray-900 w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <FiPlus className="text-sm text-gray-700" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <p style={{ color: Styles.primaryOrange }} className="text-base font-bold">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-5 h-5 rounded-sm text-white flex items-center justify-center"
                      style={{ backgroundColor: Styles.primaryOrange }}
                    >
                      <FiX className="text-sm" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Add More Items */}
          <Link href={"/explore"} className="mt-6 text-sm text-blue-600 hover:underline flex items-center gap-1">
            <FiPlus className="text-sm" />
            Add more items from Chuks Kitchen
          </Link>
        </div>

      </div>
    </div>
  )
}

export default CartPage