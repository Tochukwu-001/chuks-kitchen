'use client';

import React, { useState } from 'react'
import { Styles } from '@/components/Styles'
import { FiX, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link';

const FoodItemDetail = () => {
  const [selectedProtein, setSelectedProtein] = useState('Fried Chicken')
  const [selectedSides, setSelectedSides] = useState<string[]>([])
  const [specialInstructions, setSpecialInstructions] = useState('')

  const proteins = [
    { name: 'Fried Chicken', price: 0, default: true },
    { name: 'Grilled Fish', price: 400 },
    { name: 'Beef', price: 700 }
  ]

  const sides = [
    { name: 'Fried Plantain', price: 700 },
    { name: 'Coleslaw', price: 600 },
    { name: 'Extra Pepper Sauce', price: 350 }
  ]

  const toggleSide = (sideName: string) => {
    setSelectedSides(prev => 
      prev.includes(sideName) 
        ? prev.filter(s => s !== sideName)
        : [...prev, sideName]
    )
  }

  const calculateTotal = () => {
    let total = 2800
    const selectedProteinObj = proteins.find(p => p.name === selectedProtein)
    if (selectedProteinObj) total += selectedProteinObj.price
    
    selectedSides.forEach(sideName => {
      const side = sides.find(s => s.name === sideName)
      if (side) total += side.price
    })
    
    return total
  }

  return (
    <div className="min-h-dvh bg-gray-50">
      <div className="grid md:grid-cols-2 min-h-screen">
        
        {/* Left - Image */}
        <div className="bg-[url('/image9.png')] bg-no-repeat bg-center bg-cover"></div>

          <div className="h-48 bg-[url('/food1.png')] bg-no-repeat bg-center bg-cover hidden max-md:block">

          </div>
        {/* Right - Details & Options */}
        <section className='md:m-6 rounded-md'>
        <div className="p-6 md:p-8 lg:p-12 overflow-y-auto bg-white">
          
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button className="w-8 h-8 bg-black text-white rounded-sm flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FiX className="text-lg" />
            </button>
          </div>


          {/* Title & Price */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Jollof Rice with Fried Chicken
            </h2>
            <p style={{ color: Styles.primaryOrange }} className="text-xl font-semibold mb-3">
              ₦{calculateTotal().toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 mb-4 leading-relaxed">
            Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food that's flavorful and satisfying. Perfect for a quick lunch or a hearty dinner.
          </p>

          {/* Tags/Info */}
          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <FiAlertCircle className="text-sm" style={{ color: Styles.primaryOrange }} />
              Mildly spicy
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-600">
              <FiCheckCircle className="text-sm text-green-500" />
              Vegetarian option available
            </span>
            <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
              <FiAlertCircle className="text-sm" />
              View Allergies
            </button>
          </div>

          {/* Choose Your Protein */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Choose Your Protein
            </h3>
            <div className="space-y-2">
              {proteins.map((protein) => (
                <label
                  key={protein.name}
                  className="flex items-center justify-between p-3.5 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="protein"
                      checked={selectedProtein === protein.name}
                      onChange={() => setSelectedProtein(protein.name)}
                      className="w-4 h-4"
                      style={{ accentColor: Styles.primaryOrange }}
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {protein.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {protein.default ? '(Default)' : `+₦${protein.price}`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Extra Sides */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Extra Sides (Optional)
            </h3>
            <div className="space-y-2">
              {sides.map((side) => (
                <label
                  key={side.name}
                  className="flex items-center justify-between p-3.5 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedSides.includes(side.name)}
                      onChange={() => toggleSide(side.name)}
                      className="w-4 h-4"
                      style={{ accentColor: Styles.primaryOrange }}
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {side.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    +₦{side.price}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              Special Instructions
            </h3>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
              className="w-full p-3.5 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:border-transparent"
              rows={4}
            />
          </div>

          {/* Add to Cart Button */}
          <Link
            href={"/order-summary"}
            style={{ backgroundColor: Styles.primaryOrange }}
            className="block text-center text-white font-semibold py-4 rounded-lg text-base"
          >
            Add to Cart - ₦{calculateTotal().toLocaleString()}
          </Link>
        </div>
        </section>

      </div>
    </div>
  )
}

export default FoodItemDetail