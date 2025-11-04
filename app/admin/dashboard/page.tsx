"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Users,
  Package,
  Calendar,
  Star,
  Activity,
  DollarSign,
  Award,
  Zap,
  Eye,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

// ---------------- DATA ----------------
const revenueData = [
  { month: "Jan", revenue: 4000, users: 240 },
  { month: "Feb", revenue: 3000, users: 221 },
  { month: "Mar", revenue: 2000, users: 229 },
  { month: "Apr", revenue: 2780, users: 200 },
  { month: "May", revenue: 1890, users: 229 },
  { month: "Jun", revenue: 2390, users: 200 },
];

const packageData = [
  { name: "Basic", value: 30, color: "#10b981" },
  { name: "Premium", value: 45, color: "#3b82f6" },
  { name: "Platinum", value: 25, color: "#f59e0b" },
];

const recentActivity = [
  { id: 1, action: "New booking", user: "John Doe", time: "2 min ago", type: "booking", IconComponent: Calendar },
  { id: 2, action: "Package purchased", user: "Jane Smith", time: "15 min ago", type: "purchase", IconComponent: Package },
  { id: 3, action: "Review submitted", user: "Mike Johnson", time: "1 hour ago", type: "review", IconComponent: Star },
  { id: 4, action: "Appointment completed", user: "Sarah Wilson", time: "2 hours ago", type: "appointment", IconComponent: Calendar },
];

const quickStats = [
  { icon: Users, title: "Total Users", value: "1,234", change: "12" },
  { icon: Package, title: "Active Packages", value: "45", change: "8" },
  { icon: Calendar, title: "Bookings", value: "892", change: "5" },
  { icon: Star, title: "Avg Rating", value: "4.8", change: "2" },
];

// ---------------- STAT CARD ----------------
const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    className="relative overflow-hidden rounded-3xl p-6 shadow-lg border bg-white transition-all duration-300"
  >
    <div className="relative z-10">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="text-sm mt-4 flex items-center gap-2 font-semibold text-green-600">
            <TrendingUp className="w-4 h-4" />
            +{change}% from last month
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-gray-100 shadow">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    </div>
  </motion.div>
);

// ---------------- ACTIVITY CARD ----------------
const ActivityCard = ({ activity }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border hover:shadow transition-all duration-300 cursor-pointer"
  >
    <div className="p-3 rounded-xl bg-gray-200">
      <activity.IconComponent className="w-5 h-5 text-gray-600" />
    </div>
    <div className="flex-1">
      <p className="text-gray-800 font-semibold text-sm">{activity.action}</p>
      <p className="text-gray-500 text-xs">{activity.user}</p>
    </div>
    <span className="text-gray-500 text-xs bg-gray-200 px-2 py-1 rounded-lg">{activity.time}</span>
  </motion.div>
);

// ---------------- MAIN DASHBOARD ----------------
export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-white">

      <div className="relative z-10 space-y-10">
        
        {/* -------- HEADER -------- */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Welcome back, Admin 👋
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Here’s today’s business analytics overview
          </p>
        </motion.header>

        {/* -------- QUICK STATS -------- */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {quickStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.section>

        {/* -------- MAIN GRID -------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Revenue Chart */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow border"
          >
            <div className="flex items-center gap-4 mb-8">
              <DollarSign className="w-6 h-6 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Revenue Analytics</h2>
                <p className="text-gray-500">Monthly revenue & user growth trends</p>
              </div>
            </div>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#10b981"
                    strokeWidth={4}
                    fill="url(#revenueGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div className="bg-white rounded-3xl p-8 shadow border">
            <div className="flex items-center gap-4 mb-8">
              <Activity className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <p className="text-gray-500 text-sm">Latest user actions</p>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {recentActivity.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* -------- BOTTOM GRID -------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PIE CHART */}
          <div className="bg-white rounded-3xl p-8 shadow border">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-6 h-6 text-purple-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Package Distribution</h2>
                <p className="text-gray-500">Available packages overview</p>
              </div>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={packageData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {packageData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl p-8 shadow border">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="w-6 h-6 text-red-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
                <p className="text-gray-500">Manage admin tasks</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[{ label: "Manage Users", icon: Users, href: "/admin/users" }, { label: "Add Package", icon: Package }, { label: "View Bookings", icon: Calendar }, { label: "Reviews", icon: Star }].map((item, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gray-100 rounded-2xl text-gray-800 font-bold hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3"
                >
                  <item.icon className="w-8 h-8" />
                  <span className="text-sm">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
