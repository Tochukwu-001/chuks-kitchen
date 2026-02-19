'use client';

import React, { useState } from 'react'
import { Styles } from '@/components/Styles'
import { FiPlus } from 'react-icons/fi'

const categories = [
  'Popular',
  'Jollof Rice & Entrees',
  'Swallow & Soups',
  'Grills & sides',
  'Beverages',
  'Desserts'
]

const menuItems = [
  {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
    price: '₦3,500',
    image: '/food1.png',
    category: 'Popular'
  },
  {
    id: 2,
    name: 'Eba & Egusi Soup (Goat Meat)',
    description: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: '₦4,500',
    image: '/food2.png',
    category: 'Popular'
  },
  {
    id: 3,
    name: 'Pounded Yam & Edikaikong',
    description: 'Traditional pounded yam with rich, leafy Edikaikong soup.',
    price: '₦4,800',
    image: '/food3.png',
    category: 'Popular'
  },
  {
    id: 4,
    name: 'Ofada Rice & Ayamase Sauce',
    description: 'Local Ofada rice paired with spicy green pepper sauce.',
    price: '₦3,800',
    image: '/food4.png',
    category: 'Popular'
  },
  {
    id: 5,
    name: 'Grilled Tilapia & Jollof',
    description: 'Perfectly grilled tilapia served with seasoned Jollof rice.',
    price: '₦5,200',
    image: '/food2.png',
    category: 'Popular'
  },
  {
    id: 6,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, served with crispy fried chicken and plantain.',
    price: '₦3,500',
    image: '/food1.png',
    category: 'Popular'
  }
]

const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Popular')

  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Menu Categories - Top Section */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Menu Categories
          </h2>
          <nav className="space-y-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-3 text-base font-medium transition-colors relative ${
                  selectedCategory === category
                    ? 'text-gray-900'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
                style={selectedCategory === category ? { 
                  backgroundColor: '#FFDDB8',
                  borderLeft: '4px solid #FF8C42'
                } : {}}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content - Food Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm group"
              >
                {/* Image */}
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 mb-3 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between">
                    <span style={{ color: Styles.primaryOrange }} className="text-base font-semibold">
                      {item.price}
                    </span>
                    <button
                      style={{ backgroundColor: Styles.primaryOrange }}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <FiPlus className="text-base" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExploreMenu