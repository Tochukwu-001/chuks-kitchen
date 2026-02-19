import React from 'react'
import { Styles } from '@/components/Styles'

const MenuAdditions = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/add-menu.png')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Introducing Our New Menu Additions!
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white mb-8 leading-relaxed">
            Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
          </p>

          {/* CTA Button */}
          <button 
            style={{backgroundColor: Styles.primaryOrange}} 
            className="text-white font-semibold px-8 py-3.5 rounded-lg text-base shadow-sm"
          >
            Discover what's new
          </button>
        </div>
      </div>
    </section>
  )
}

export default MenuAdditions