// src/pages/LoginPage.jsx
import React from "react";

export default function LoginPage() {
  return (
    <div className="bg-[#0f0f0f] p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">SmartCart+ Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-green-300 text-sm mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-black border border-green-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-green-300 text-sm mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-black border border-green-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-sm text-green-200 flex justify-between">
        <a href="#" className="hover:underline">Forgot password?</a>
        <a href="#" className="hover:underline">Sign up</a>
      </div>
    </div>
  );
}
