import React from 'react'
import { Styles } from '@/components/Styles'
import Link from 'next/link'

const specialMeals = [
  {
    id: 1,
    name: 'Spicy Tilapia Pepper Soup',
    description: 'A wholesome and spicy soup made tender tilapia fish, a true Nigerian delicacy.',
    price: '₦3,500',
    image: '/food5.png',
  },
  {
    id: 2,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
    price: '₦3,500',
    image: '/food1.png',
  },
  {
    id: 3,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
    price: '₦3,500',
    image: '/food1.png',
  },
  {
    id: 4,
    name: 'Jollof Rice & Smoked Chicken',
    description: 'Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.',
    price: '₦3,500',
    image: '/food1.png',
  },
  {
    id: 5,
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.',
    price: '₦3,500',
    image: '/food6.png',
  },
  {
    id: 6,
    name: 'Egusi Soup & Pounded Yam',
    description: 'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
    price: '₦3,500',
    image: '/food7.png',
  },
]

const ChefSpecials = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-900 mb-12">
          Chef's Specials
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {specialMeals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-2xl overflow-hidden text-left group shadow-sm"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meal Name */}
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                  {meal.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {meal.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span style={{color: Styles.primaryOrange}} className="text-base font-bold">
                    {meal.price}
                  </span>
                  <Link
                    href={"/my-orders"} 
                    style={{backgroundColor: Styles.primaryOrange}} 
                    className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ChefSpecials