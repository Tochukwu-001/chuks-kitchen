"use client";
import { Styles } from "@/components/Styles";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaApple,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log("Google login");
  };

  const handleAppleLogin = () => {
    // Handle Apple login
    console.log("Apple login");
  };

  return (
    <main className="grid md:grid-cols-2">
      {/* Left Side - Image with Overlay */}
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

      {/* Right Side - Login Form */}
      <article className="min-h-dvh bg-gray-50 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h2
              className="text-3xl italic mb-2"
              style={{
                fontFamily: "Brush Script MT, cursive",
                color: "#F5A623",
              }}
            >
              Chuks Kitchen
            </h2>
            <h3 className="text-2xl text-gray-800">
              Login your Account
            </h3>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email or phone number
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  id="email"
                  placeholder="name@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg"
              style={{ backgroundColor: Styles.primaryOrange }}
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
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
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <FcGoogle className="w-5 h-5 text-red-500" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* Apple Login */}
            <button
              onClick={handleAppleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <FaApple className="w-5 h-5 text-gray-800" />
              <span className="font-medium text-gray-700">
                Continue with Apple
              </span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:underline font-medium"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
