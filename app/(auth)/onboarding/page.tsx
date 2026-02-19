import OnboardingFooter from '@/components/Onboardingfooter';
import OnboardingNav from '@/components/Onboardingnav';
import { Styles } from '@/components/Styles';
import React from 'react';
import { MdRestaurant, MdStorefront, MdLocalShipping } from 'react-icons/md';

export default function Page() {

    const features = [
    {
      id: 1,
      icon: MdRestaurant,
      text: 'Freshly Prepared'
    },
    {
      id: 2,
      icon: MdStorefront,
      text: 'Freshly Prepared'
    },
    {
      id: 3,
      icon: MdLocalShipping,
      text: 'Freshly Prepared'
    }
  ];

  return (
    <main className='grid lg:grid-cols-2'>
        <article className="hidden lg:block min-h-dvh bg-[url('/onboarding.png')] bg-no-repeat bg-center bg-cover"></article>
        <article className="min-h-dvh flex flex-col">
            <div className='max-md:hidden'><OnboardingNav/></div>
            
            {/* Mobile View - Matches the image */}
            <div className="lg:hidden flex-1 flex flex-col p-3">
              <div className="flex-1 flex flex-col justify-center space-y-6 max-w-md mx-auto w-full">
                {/* Hero Image */}
                <div className="w-full aspect-video overflow-hidden">
                  <img 
                    src="/onboardingmobile.png" 
                    alt="Nigerian Food" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sign In Button */}
                <div className="flex justify-end">
                  <button className="text-blue-600 font-medium text-sm px-6 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Sign In
                  </button>
                </div>

                {/* Brand Name */}
                <div className="text-center">
                  <h2 className="text-orange-500 font-serif text-3xl italic">
                    Chuks Kitchen
                  </h2>
                </div>

                {/* Heading */}
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                    Your Authentic Taste<br />of Nigeria
                  </h1>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.id} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          <Icon style={{color: Styles.primaryOrange}} className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-gray-800 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <button style={{backgroundColor: Styles.primaryOrange}} className="w-full text-white font-semibold py-3.5 px-6 rounded-lg text-base">
                    Start Your Order
                  </button>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3.5 px-6 rounded-lg border border-blue-600">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View - Unchanged */}
            <div className="hidden lg:flex flex-1 items-center justify-center px-6 sm:px-8 lg:px-12 py-12">
              <div className="w-full max-w-md space-y-3">
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Your Authentic Taste of Nigeria
                  </h1>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
                  </p>
                </div>

               <div className="space-y-4 grid md:grid-cols-2 gap-3">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.id} className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <Icon style={{color: Styles.primaryOrange}} className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-black font-medium">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-3">
                  <button style={{backgroundColor: Styles.primaryOrange}} className="w-full text-white font-semibold py-3.5 px-6 rounded-lg text-sm sm:text-base">
                    Start Your Order
                  </button>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3.5 px-6 rounded-lg border border-blue-600 text-sm sm:text-base">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>

            <div><OnboardingFooter/></div>
        </article>
    </main>
  );
}