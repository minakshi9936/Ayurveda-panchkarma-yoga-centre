"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ user: "", pass: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.user === "admin" && form.pass === "1234") {
      localStorage.setItem("admin_logged_in", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl w-96"
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Admin Login
        </h1>

        {/* ERROR */}
        {error && (
          <p className="mb-3 text-red-500 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* USERNAME */}
          <div>
            <label className="text-gray-600 text-sm">Username</label>
            <div className="flex items-center mt-1 bg-gray-100 border border-gray-300 p-3 rounded-xl">
              <User className="text-gray-600 w-4 h-4 mr-3" />
              <input
                type="text"
                placeholder="Enter username"
                value={form.user}
                onChange={(e) => setForm({ ...form, user: e.target.value })}
                className="bg-transparent outline-none text-gray-800 w-full placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <div className="flex items-center mt-1 bg-gray-100 border border-gray-300 p-3 rounded-xl relative">
              <Lock className="text-gray-600 w-4 h-4 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.pass}
                onChange={(e) => setForm({ ...form, pass: e.target.value })}
                className="bg-transparent outline-none text-gray-800 w-full placeholder-gray-500"
                required
              />

              {/* EYE TOGGLE */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* FORGET PASSWORD */}
          <p
            className="text-right text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={() => alert("Password recovery not implemented yet!")}
          >
            Forgot password?
          </p>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-black hover:bg-gray-800 text-white font-semibold transition"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
