"use client"
import { FiSearch} from "react-icons/fi";
import { Styles } from "./Styles";
import Link from "next/link";

export default function Hero() {


  return (
    <main className="relative min-h-screen">    

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              The Heart of Nigerian Home Cooking
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 lg:mb-12 font-medium">
              Handcrafted with passion, delivered with care.
            </p>

            {/* CTA Button */}
            <Link href={"/explore"} style={{backgroundColor: Styles.primaryOrange}} className="text-white font-semibold px-8 py-4 rounded-lg text-base md:text-lg">
              Discover what's new
            </Link>
          </div>
        </div>

        {/* Search Bar at Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 translate-y-1/2">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-md shadow-sm flex items-center px-6 py-4">
              <FiSearch className="text-gray-400 text-2xl mr-4 shrink-0" />
              <input
                type="text"
                placeholder="What are you craving for today?"
                className="flex-1 text-base sm:text-lg text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative: If you want to use an actual uploaded image */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </main>
  );
}
