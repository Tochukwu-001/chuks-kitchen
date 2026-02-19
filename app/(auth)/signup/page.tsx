"use client";

import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdPhone, MdLock } from "react-icons/md";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left Panel - Desktop Only */}
      <article className="hidden lg:block min-h-dvh bg-[url('/onboarding.png')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-full bg-[#FF7A18]/60 flex items-center justify-center">
          <div className="text-white w-1/2 space-y-2">
            <h1 className="font-bold text-3xl text-center">Chucks Kitchen</h1>
            <p className="text-center">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favourites today!
            </p>
          </div>
        </div>
      </article>

      {/* Right Panel - Form */}
      <section className="flex items-center justify-center px-6 py-12 lg:px-12 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <h2 className="text-orange-500 font-serif text-2xl lg:text-3xl italic mb-2">
              Chuks Kitchen
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Create Your Account
            </h3>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail className="text-gray-400 text-xl" />
                </div>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdPhone className="text-gray-400 text-xl" />
                </div>
                <input
                  type="tel"
                  placeholder="8123340690"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdLock className="text-gray-400 text-xl" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="QWE123#"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-lg" />
                  ) : (
                    <FaEye className="text-lg" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdLock className="text-gray-400 text-xl" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="QWE123#"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-lg" />
                  ) : (
                    <FaEye className="text-lg" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-lg"
            >
              Continue
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
             <div className="space-y-3">
                        {/* Google Login */}
                        <button
                          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                        >
                          <FcGoogle className="w-5 h-5 text-red-500" />
                          <span className="font-medium text-gray-700">
                            Continue with Google
                          </span>
                        </button>
            
                        {/* Apple Login */}
                        <button
                          className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                        >
                          <FaApple className="w-5 h-5 text-gray-800" />
                          <span className="font-medium text-gray-700">
                            Continue with Apple
                          </span>
                        </button>
                      </div>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
