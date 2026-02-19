import ExploreMenu from '@/components/ExploreMenu'
import React from 'react'

const Page = () => {
  return (
    <div>
      <section className="relative w-full h-[80vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image10.png')"
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end px-6 sm:px-8 lg:px-16 pb-8 sm:pb-10 lg:pb-12">
          <div>
            {/* Restaurant Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              Chuks Kitchen
            </h1>

            {/* Subtitle with Rating */}
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm sm:text-base text-white">
                Chuks Kitchen Nigerian Home Cooking
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm sm:text-base font-semibold text-white">4.8</span>
                <span className="text-sm sm:text-base text-white/90">(1.2k)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreMenu/>
    </div>
  )
}

export default Page